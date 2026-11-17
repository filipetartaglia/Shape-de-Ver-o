import { CHECKOUT_URL, FALLBACK_UTM_PARAMS } from "./constants";

export const ALLOWED_TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "src",
  "sck",
  "s1",
  "s2",
  "s3",
  "fbclid",
] as const;

export type AllowedTrackingKey = (typeof ALLOWED_TRACKING_KEYS)[number];

/**
 * Builds the Kiwify checkout link with dynamically preserved tracking parameters.
 * - Captures allowed URL query params from current window.location (or optional override).
 * - Prioritizes Kiwify official tracking parameters (utm_*, src, sck, s1, s2, s3) and preserves fbclid.
 * - Applies default fallback UTMs only when the corresponding parameter is not present.
 * - Uses URL and URLSearchParams to prevent malformed or duplicate queries.
 * - Filters out arbitrary parameters or unwanted personal data.
 */
export function buildCheckoutUrl(
  baseUrl: string = CHECKOUT_URL,
  searchOverride?: string
): string {
  try {
    const url = new URL(baseUrl);

    // Apply default fallback params first
    Object.entries(FALLBACK_UTM_PARAMS).forEach(([key, fallbackValue]) => {
      url.searchParams.set(key, fallbackValue);
    });

    // Determine search string: from searchOverride, or window.location.search in browser
    const search =
      searchOverride !== undefined
        ? searchOverride
        : typeof window !== "undefined"
        ? window.location.search
        : "";

    if (search) {
      const currentParams = new URLSearchParams(search);

      ALLOWED_TRACKING_KEYS.forEach((key) => {
        const value = currentParams.get(key);
        if (value !== null && value.trim() !== "") {
          url.searchParams.set(key, value.trim());
        }
      });
    }

    return url.toString();
  } catch {
    return baseUrl;
  }
}
