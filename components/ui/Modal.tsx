"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  images,
  technologies,
}: ModalProps) {
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (fullscreenImage !== null) {
          setFullscreenImage(null);
        } else {
          onClose();
        }
      }
    };

    const handleArrowKeys = (event: KeyboardEvent) => {
      if (fullscreenImage !== null) {
        if (event.key === "ArrowLeft") {
          setFullscreenImage((prev) =>
            prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : null
          );
        } else if (event.key === "ArrowRight") {
          setFullscreenImage((prev) =>
            prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : null
          );
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleArrowKeys);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrowKeys);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, fullscreenImage, images.length]);

  if (!isOpen) return null;

  // Fullscreen Image Viewer
  if (fullscreenImage !== null) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        {/* Close button */}
        <button
          onClick={() => setFullscreenImage(null)}
          className="absolute top-4 right-4 h-12 w-12 p-0 bg-black/70 hover:bg-black/90 text-white z-10 border border-white/20 hover:border-white/40 transition-all duration-200 rounded-md flex items-center justify-center"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={() =>
                setFullscreenImage(
                  fullscreenImage > 0 ? fullscreenImage - 1 : images.length - 1
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-12 w-12 p-0 bg-black/70 hover:bg-black/90 text-white z-10 border border-white/20 hover:border-white/40 transition-all duration-200 rounded-md flex items-center justify-center"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() =>
                setFullscreenImage(
                  fullscreenImage < images.length - 1 ? fullscreenImage + 1 : 0
                )
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-12 w-12 p-0 bg-black/70 hover:bg-black/90 text-white z-10 border border-white/20 hover:border-white/40 transition-all duration-200 rounded-md flex items-center justify-center"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </>
        )}

        {/* Image counter */}
        <div className="absolute top-4 left-4 text-white bg-black/70 px-3 py-1 rounded z-10 border border-white/20">
          {fullscreenImage + 1} / {images.length}
        </div>

        {/* Fullscreen image */}
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <Image
            src={images[fullscreenImage]}
            alt={`${title} - Image ${fullscreenImage + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Images */}
          {images.length > 0 && (
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video cursor-pointer group"
                    onClick={() => setFullscreenImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white bg-black/50 px-3 py-1 rounded">
                        Click to view fullscreen
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Description
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
