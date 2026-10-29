import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectShot } from '../../data/gallery';

interface ProjectGalleryProps {
  shots: ProjectShot[];
  projectTitle: string;
}

/** معرض لقطات: إطار متصفح للحاسوب وإطار هاتف للجوال، مع عرض مكبّر. */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ shots, projectTitle }) => {
  const { t, language, dir } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const laptops = shots.map((s, i) => ({ s, i })).filter((x) => x.s.device === 'laptop');
  const phones = shots.map((s, i) => ({ s, i })).filter((x) => x.s.device === 'phone');

  const open = (index: number, el: HTMLElement) => {
    lastTrigger.current = el;
    setOpenIndex(index);
  };

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + shots.length) % shots.length;
      });
    },
    [shots.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      // السهم الأيسر يعني "التالي" في الاتجاه من اليمين إلى اليسار، والعكس في الآخر.
      if (e.key === 'ArrowLeft') step(dir === 'rtl' ? 1 : -1);
      if (e.key === 'ArrowRight') step(dir === 'rtl' ? -1 : 1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step, dir]);

  const active = openIndex !== null ? shots[openIndex] : null;
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft;
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  const renderShot = (shot: ProjectShot, index: number) => (
    <figure key={shot.src} className={shot.device === 'laptop' ? 'shot shot-laptop' : 'shot shot-phone'}>
      <button
        type="button"
        className="shot-button"
        onClick={(e) => open(index, e.currentTarget)}
        aria-label={`${t.common.openImage}: ${shot.caption[language]}`}
      >
        <span className={shot.device === 'laptop' ? 'frame-laptop' : 'frame-phone'}>
          {shot.device === 'laptop' && (
            <span className="frame-bar" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          )}
          <img
            src={shot.src}
            width={shot.width}
            height={shot.height}
            alt={`${projectTitle}: ${shot.caption[language]}`}
            loading="lazy"
            decoding="async"
          />
          <span className="shot-zoom" aria-hidden="true">
            <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </span>
      </button>
      <figcaption>{shot.caption[language]}</figcaption>
    </figure>
  );

  return (
    <>
      {laptops.length > 0 && (
        <div className={laptops.length > 1 ? 'gallery-row gallery-laptops' : 'gallery-row'}>
          {laptops.map(({ s, i }) => renderShot(s, i))}
        </div>
      )}
      {phones.length > 0 && (
        <div className="gallery-row gallery-phones">{phones.map(({ s, i }) => renderShot(s, i))}</div>
      )}

      {active && openIndex !== null && createPortal(
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption[language]}
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox-btn lightbox-close"
            onClick={close}
            aria-label={t.common.closeImage}
          >
            <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>

          {shots.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-btn lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label={t.common.prevImage}
              >
                <PrevIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="lightbox-btn lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label={t.common.nextImage}
              >
                <NextIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </>
          )}

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img
              key={active.src}
              src={active.src}
              width={active.width}
              height={active.height}
              alt={`${projectTitle}: ${active.caption[language]}`}
            />
            <figcaption>{active.caption[language]}</figcaption>
          </figure>
        </div>,
        document.body
      )}
    </>
  );
};
