
const ESCAPE_MAP: Record<string, string> = {
  '"': '&quot;',
  '&': '&amp;',
  "'": '&#39;',
  '<': '&lt;',
  '>': '&gt;',
};

/**
 * Escape special characters in a string for safe insertion into HTML.
 *
 * Converts:
 * - `&` → `&amp;`
 * - `<` → `&lt;`
 * - `>` → `&gt;`
 * - `"` → `&quot;`
 * - `'` → `&#39;`
 *
 * Example:
 * ```ts
 * escapeHtml('<div class="test">Hello & Goodbye</div>');
 * // Returns: '&lt;div class=&quot;test&quot;&gt;Hello &amp; Goodbye&lt;/div&gt;'
 * ```
 *
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string safe for HTML.
 */
export default function escapeHtml(str: string): string {
  return str.replace(/["'&<>]/g, char => ESCAPE_MAP[char]);
}
