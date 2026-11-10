/**
 * Password gate settings, shared by the gate page and the page layout.
 *
 * The site is static HTML on GitHub Pages, so the gate runs in the browser:
 * pages that load without the unlock flag send the visitor to /enter/.
 * This keeps casual visitors out. It is NOT access control: the page files
 * are still public to anyone who requests them directly.
 *
 * The password itself is never in the repository or the built site. The build
 * reads it from the SITE_PASSWORD environment variable and publishes only a
 * PBKDF2 hash of it.
 */
import { pbkdf2Sync } from 'node:crypto';

/** localStorage key set to '1' once the right password has been entered. */
export const GATE_STORAGE_KEY = 'stempathways:unlocked';

/** Must match what the browser uses in enter.astro (Web Crypto PBKDF2). */
export const GATE_SALT = 'stem-pathways-gate-v1';
export const GATE_ITERATIONS = 210_000;

export function gatePasswordHash(): string {
  const password = process.env.SITE_PASSWORD ?? import.meta.env.SITE_PASSWORD;
  if (!password) {
    throw new Error(
      'SITE_PASSWORD is not set. Set it in the environment (or in a local .env file) ' +
        'before building: the password gate needs it.',
    );
  }
  return pbkdf2Sync(password, GATE_SALT, GATE_ITERATIONS, 32, 'sha256').toString('hex');
}
