import React from 'react';
import { product } from '../data/product.js';
import { Container } from './primitives.jsx';

/**
 * Compliance / usage caveat strip. Renders only when product.caveat is set
 * (Complia = "not advice", FirmFlow = "drafts for review"). Required disclaimer.
 */
export default function Caveat() {
  if (!product.caveat) return null;
  return (
    <div className="border-b border-line bg-bg-alt">
      <Container className="flex items-start gap-3 py-3.5">
        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent-line text-accent">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 8v5M12 17h.01" />
          </svg>
        </span>
        <p className="text-[12.5px] leading-[1.6] text-ink-muted">{product.caveat}</p>
      </Container>
    </div>
  );
}
