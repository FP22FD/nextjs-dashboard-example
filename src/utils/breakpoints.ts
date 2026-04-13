/**
 * Breakpoints aligned with tailwind.config.js `theme.extend.screens`.
 * This dashboard primarily targets tablet, desktop, and wide monitors.
 * `sm` is kept as a compatibility fallback so existing responsive logic does not break.
 *
 * Tailwind prefix → JS usage
 *  sm:  → BREAKPOINTS.sm   (480px)  — compatibility fallback
 *  md:  → BREAKPOINTS.md   (768px)  — tablet
 *  lg:  → BREAKPOINTS.lg   (1024px) — small desktop / landscape tablet
 *  xl:  → BREAKPOINTS.xl   (1280px) — desktop
 *  xxl: → BREAKPOINTS.xxl  (1536px) — wide monitor
 */

export const BREAKPOINTS = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Returns a min-width media query string for the given breakpoint key.
 * @example mediaQuery('md') → '(min-width: 768px)'
 */
export function mediaQuery(key: BreakpointKey): string {
    return `(min-width: ${BREAKPOINTS[key]}px)`;
}

/**
 * Returns true if the current viewport width is at or above the given breakpoint.
 * Safe to call only in browser contexts (returns false during SSR).
 * @example isAtLeast('lg') → true when window.innerWidth >= 1024
 */
export function isAtLeast(key: BreakpointKey): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= BREAKPOINTS[key];
}
