/* eslint-disable @typescript-eslint/no-explicit-any */

const STANDARD_EVENTS = new Set([
  "AddPaymentInfo",
  "AddToCart",
  "AddToWishlist",
  "CompleteRegistration",
  "Contact",
  "CustomizeProduct",
  "Donate",
  "FindLocation",
  "InitiateCheckout",
  "Lead",
  "PageView",
  "Purchase",
  "Schedule",
  "Search",
  "StartTrial",
  "SubmitApplication",
  "Subscribe",
  "ViewContent",
]);

export const pageview = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "PageView");
  }
};

/**
 * Dispatches a standard Meta Pixel event via fbq('track', ...)
 * If a non-standard name is provided, automatically routes to trackCustom.
 */
export const event = (name: string, options = {}) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    if (STANDARD_EVENTS.has(name)) {
      (window as any).fbq("track", name, options);
    } else {
      (window as any).fbq("trackCustom", name, options);
    }
  }
};

/**
 * Dispatches a custom Meta Pixel event explicitly via fbq('trackCustom', ...)
 */
export const customEvent = (name: string, options = {}) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", name, options);
  }
};
