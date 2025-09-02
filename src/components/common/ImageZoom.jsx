// MagnifierOptimized.jsx
import React, { useEffect, useRef } from "react";

/**
 * MagnifierOptimized
 * Highly-performant magnifier / lens wrapper.
 *
 * Props:
 *  - src: string (image src) required
 *  - alt: string
 *  - zoom: number (magnification), default 2
 *  - size: number (lens diameter in px), default 160
 *  - className: string for wrapper
 *  - imgProps: forwarded to <img>
 *
 * Usage:
 *  <MagnifierOptimized src="/img.jpg" zoom={2.2} size={180} className="h-96" />
 */
export default function ImageZoom({
  src,
  alt = "",
  zoom = 2,
  size = 160,
  className = "",
  imgProps = {},
}) {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const lensRef = useRef(null);

  // refs used to avoid re-renders
  const rectRef = useRef({ left: 0, top: 0, width: 0, height: 0 }); // image rect
  const pointerRef = useRef({ x: 0, y: 0, inside: false });
  const rafRef = useRef(null);

  // One-time setup: lens element styles that won't change per-frame
  useEffect(() => {
    const lens = lensRef.current;
    if (!lens) return;
    lens.style.position = "absolute";
    lens.style.borderRadius = "50%";
    lens.style.overflow = "hidden";
    lens.style.pointerEvents = "none";
    lens.style.border = "3px solid rgba(255,255,255,0.95)";
    lens.style.boxShadow = "0 6px 18px rgba(0,0,0,0.45)";
    lens.style.width = `${size}px`;
    lens.style.height = `${size}px`;
    lens.style.opacity = "0";
    lens.style.transform = "scale(0.95)";
    lens.style.transition = "opacity 120ms ease, transform 120ms ease";
    lens.style.willChange = "transform, left, top, background-position";
    lens.style.backgroundRepeat = "no-repeat";
    // set backgroundImage once
    lens.style.backgroundImage = `url(${src})`;
  }, [src, size]);

  // Update image rect when wrapper resizes (or on first mount)
  useEffect(() => {
    const img = imgRef.current;
    const wrapper = wrapperRef.current;
    if (!img || !wrapper) return;

    function updateRect() {
      const rect = img.getBoundingClientRect();
      rectRef.current = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      };
    }

    // initial
    updateRect();

    // ResizeObserver if available (keeps rect accurate on layout changes)
    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(updateRect);
      ro.observe(img);
      // also observe wrapper just in case
      ro.observe(wrapper);
    } else {
      // fallback: update on window resize
      window.addEventListener("resize", updateRect);
    }

    // also update when images load (in case of late load)
    function onLoad() {
      updateRect();
    }
    img.addEventListener("load", onLoad);

    return () => {
      if (ro) {
        ro.disconnect();
      } else {
        window.removeEventListener("resize", updateRect);
      }
      img.removeEventListener("load", onLoad);
    };
  }, []);

  // rAF loop that updates lens position & background with latest pointer coords
  useEffect(() => {
    const lens = lensRef.current;
    if (!lens) return;

    function frame() {
      const { x, y, inside } = pointerRef.current;
      const r = rectRef.current;

      if (inside) {
        // x,y are page coordinates (client + scroll accounted for)
        const localX = x - r.left;
        const localY = y - r.top;

        // keep cursor inside bounds
        if (localX < 0 || localY < 0 || localX > r.width || localY > r.height) {
          // outside; hide lens
          lens.style.opacity = "0";
          pointerRef.current.inside = false;
        } else {
          // show lens
          lens.style.opacity = "1";
          lens.style.transform = "scale(1)";

          // position lens so cursor is centered
          const left = localX - size / 2;
          const top = localY - size / 2;
          lens.style.left = `${left}px`;
          lens.style.top = `${top}px`;

          // background-size = displayed image size * zoom
          const bgW = r.width * zoom;
          const bgH = r.height * zoom;
          lens.style.backgroundSize = `${bgW}px ${bgH}px`;

          // background position so that the point under cursor is centered in lens
          const bgX = localX * zoom - size / 2;
          const bgY = localY * zoom - size / 2;
          lens.style.backgroundPosition = `${-bgX}px ${-bgY}px`;
        }
      } else {
        lens.style.opacity = "0";
        lens.style.transform = "scale(0.95)";
      }

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [zoom, size]);

  // pointer event handlers attached to wrapper (direct DOM listeners are fine,
  // but React synthetic handlers are used here for clarity)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    function toPageCoords(e) {
      // pointer event gives client coords; convert to page coordinates (account scroll)
      return {
        pageX: e.clientX + window.scrollX,
        pageY: e.clientY + window.scrollY,
      };
    }

    function onPointerEnter(e) {
      // ensure rect is up-to-date on enter (in case of recent layout change)
      const rect = img.getBoundingClientRect();
      rectRef.current = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      };
      const p = toPageCoords(e);
      pointerRef.current.x = p.pageX;
      pointerRef.current.y = p.pageY;
      pointerRef.current.inside = true;
    }

    function onPointerMove(e) {
      const p = toPageCoords(e);
      pointerRef.current.x = p.pageX;
      pointerRef.current.y = p.pageY;
      // don't set .inside here; rAF will determine if inside using rect
    }

    function onPointerLeave() {
      pointerRef.current.inside = false;
    }

    // pointer events handle mouse + touch
    wrapper.addEventListener("pointerenter", onPointerEnter);
    wrapper.addEventListener("pointermove", onPointerMove);
    wrapper.addEventListener("pointerleave", onPointerLeave);
    // also hide on scroll to avoid wrong positioning when layout changes quickly
    window.addEventListener(
      "scroll",
      () => (pointerRef.current.inside = false),
      { passive: true }
    );

    return () => {
      wrapper.removeEventListener("pointerenter", onPointerEnter);
      wrapper.removeEventListener("pointermove", onPointerMove);
      wrapper.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener(
        "scroll",
        () => (pointerRef.current.inside = false)
      );
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden ${className}`}
      aria-label={alt || "image with magnifier"}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className='w-full h-full object-cover block'
        draggable={false}
        {...imgProps}
      />
      <div
        ref={lensRef}
        aria-hidden
      />
    </div>
  );
}
