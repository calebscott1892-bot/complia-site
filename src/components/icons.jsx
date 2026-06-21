import React from 'react';

/**
 * Shared line-icon registry. Features (and elsewhere) reference an icon by name
 * via <Icon name="inbox" />, so per-product icon choices live in data/product.js.
 * All icons are 24×24 stroke paths in currentColor.
 */
const PATHS = {
  // ReviewLoop
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  link: (
    <>
      <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 4.8L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.7z" />
      <path d="M19 14l.7 1.8L21.5 16.5l-1.8.7L19 19l-.7-1.8L16.5 16.5l1.8-.7z" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
  // ReturnDesk
  inbox: (
    <>
      <path d="M3 12h5l2 3h4l2-3h5" />
      <path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    </>
  ),
  gauge: (
    <>
      <path d="M12 13l4-4" />
      <path d="M4 19a8 8 0 1 1 16 0" />
      <circle cx="12" cy="13" r="1" />
    </>
  ),
  reply: (
    <>
      <path d="M9 7l-5 5 5 5" />
      <path d="M4 12h11a5 5 0 0 1 5 5v1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  // Complia
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
      <path d="M8.5 14l2 2 3.5-4" />
    </>
  ),
  checklist: (
    <>
      <path d="M4 7h2l1 1 2-2" />
      <path d="M4 13h2l1 1 2-2" />
      <path d="M12 7h8M12 13h8M4 19h16" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 5h11l-2 3 2 3H5" />
    </>
  ),
  // FirmFlow
  document: (
    <>
      <path d="M7 3h7l5 5v13a0 0 0 0 1 0 0H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  wand: (
    <>
      <path d="M15 4V2M15 10V8M11 6H9M21 6h-2" />
      <path d="M5 19l9-9 1.5 1.5-9 9z" />
      <path d="M14 7l3 3" />
    </>
  ),
  feather: (
    <>
      <path d="M20 4C12 4 6 10 6 18l-2 2" />
      <path d="M16 8l-8 8M18 12H9" />
    </>
  ),
  voice: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
    </>
  ),
};

export function Icon({ name, size = 22, className = '' }) {
  const path = PATHS[name] || PATHS.sparkle;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
