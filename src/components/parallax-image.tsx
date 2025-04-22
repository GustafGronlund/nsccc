import { useRef, useEffect } from 'react';
import { useLenis } from 'lenis/react';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const lerp = (start: number, end: number, factor: number): number =>
  start + (end - start) * factor;

export const ParallaxImage = ({ src, alt, className }: ParallaxImageProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const bounds = useRef<{ top: number; bottom: number } | null>(null);
  const currentTranslateY = useRef<number>(0);
  const targetTranslateY = useRef<number>(0);
  const refId = useRef<number | null>(null);

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);

    const animate = () => {
      if (imageRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );
        if (
          Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01
        ) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
        }
      }

      refId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateBounds);
      if (refId.current) {
        cancelAnimationFrame(refId.current);
      }
    };
  }, []);

  useLenis(({ scroll }: { scroll: number }) => {
    if (!bounds.current) return;
    const relativeScroll = scroll - bounds.current.top;
    targetTranslateY.current = relativeScroll * 0.2;
  });

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        willChange: 'transform',
        transform: 'translateY(0) scale(1.25)',
      }}
    />
  );
};
