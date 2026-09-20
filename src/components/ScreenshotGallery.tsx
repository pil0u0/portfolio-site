"use client";

import { useState } from "react";
import Image from "next/image";

export default function ScreenshotGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = () => setSelectedIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length));
  };

  return (
    <>
      <div className="flex gap-3 mt-3 flex-wrap">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(i)}
            className="w-40 h-28 border border-panel-border overflow-hidden shrink-0 cursor-pointer hover:border-accent transition-colors"
          >
            <Image
              src={src}
              alt={`Capture d'écran — ${title}`}
              width={160}
              height={112}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 cursor-zoom-out"
          onClick={close}
        >
          {images.length > 1 && (
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl px-3 py-2 border-2 border-panel-border bg-panel hover:border-accent transition-colors cursor-pointer"
              aria-label="Image précédente"
            >
              ←
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[selectedIndex]}
            alt={`Capture d'écran agrandie — ${title}`}
            className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain border-2 border-panel-border"
          />

          {images.length > 1 && (
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl px-3 py-2 border-2 border-panel-border bg-panel hover:border-accent transition-colors cursor-pointer"
              aria-label="Image suivante"
            >
              →
            </button>
          )}

          {images.length > 1 && (
            <span className="absolute bottom-4 text-sm text-foreground/60">
              {selectedIndex + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}