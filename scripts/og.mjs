/**
 * Generates public/og.png (1200×630) — the social preview card.
 * Run with:  npm run og
 *
 * Edit the SVG below to change the card, then re-run.
 */
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const NAME = 'Achyuthan Raghavan';
const ROLE = 'Electronics & Robotics Engineer';
const LINE = 'Embedded systems · Robotics · UAV · PCB design';

/** SVG is XML — bare `&`, `<` and `>` in the strings above would break the parse. */
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#08090b"/>

  <g stroke="#ffffff" stroke-opacity="0.05">
    ${Array.from({ length: 14 }, (_, i) => `<line x1="${i * 96}" y1="0" x2="${i * 96}" y2="630"/>`).join('')}
    ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 96}" x2="1200" y2="${i * 96}"/>`).join('')}
  </g>

  <rect x="80" y="112" width="56" height="1.5" fill="#37c8d8"/>
  <text x="152" y="119" font-family="monospace" font-size="19" letter-spacing="3.4" fill="#8b939c">
    ${esc(ROLE.toUpperCase())}
  </text>

  <text x="80" y="330" font-family="Inter Tight, Helvetica, Arial, sans-serif"
        font-size="104" font-weight="600" letter-spacing="-3.4" fill="#f0f2f4">
    ${esc(NAME)}
  </text>

  <text x="80" y="400" font-family="Inter, Helvetica, Arial, sans-serif"
        font-size="31" fill="#9aa2ab">
    ${esc(LINE)}
  </text>

  <rect x="80" y="500" width="1040" height="1" fill="#ffffff" fill-opacity="0.1"/>
  <text x="80" y="548" font-family="monospace" font-size="21" letter-spacing="2" fill="#666e77">
    achyuthanraghavan.com
  </text>
</svg>`;

mkdirSync(resolve(root, 'public'), { recursive: true });
const out = resolve(root, 'public/og.png');

await sharp(Buffer.from(svg)).png().toFile(out);
writeFileSync(resolve(root, 'public/og.svg'), svg);

console.log('✓ wrote public/og.png (1200×630)');
