"use client";

import { useState, useEffect } from "react";
import { CHECKOUT_URL } from "@/lib/constants";
import { buildCheckoutUrl } from "@/lib/utm";
import { customEvent } from "@/lib/pixel";

interface CTAButtonProps {
  text?: string;
  subtext?: string;
  id?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

// Module-level timestamp to prevent rapid double-clicks across CTAs
let lastClickTimestamp = 0;
const CLICK_COOLDOWN_MS = 1500;

export default function CTAButton({ 
  text = "COMEÇAR MEU SHAPE", 
  subtext,
  id = "cta-button",
  className = "",
  variant = "primary"
}: CTAButtonProps) {
  const [checkoutHref, setCheckoutHref] = useState<string>(() => buildCheckoutUrl(CHECKOUT_URL));

  useEffect(() => {
    // Synchronize href on mount on client side with actual URL parameters
    setCheckoutHref(buildCheckoutUrl(CHECKOUT_URL));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const now = Date.now();
    // Protection against rapid multiple clicks (debouncing clicks under 1.5s)
    if (lastClickTimestamp > 0 && now - lastClickTimestamp < CLICK_COOLDOWN_MS) {
      e.preventDefault();
      return;
    }
    lastClickTimestamp = now;

    // Refresh href on click to ensure it's completely up-to-date
    const finalUrl = buildCheckoutUrl(CHECKOUT_URL);
    setCheckoutHref(finalUrl);
    e.currentTarget.href = finalUrl;

    // Custom event via fbq('trackCustom') to measure button clicks without conflicting with Kiwify's official InitiateCheckout
    customEvent("ClickCheckout", {
      button_id: id,
      button_text: text,
      content_name: "Shape de Verão - Edição Verão 2026",
      value: 47.0,
      currency: "BRL",
    });
  };

  const baseClasses = "flex flex-col items-center justify-center font-headline uppercase text-2xl md:text-3xl tracking-wide py-4 px-8 rounded-md transition-all duration-300 w-full md:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1";
  
  const variantClasses = {
    primary: "bg-brand-green-accent text-brand-black hover:bg-brand-sand",
    secondary: "bg-brand-black text-brand-offwhite border-2 border-brand-green-accent hover:bg-brand-green-accent hover:text-brand-black"
  };

  return (
    <div className={`flex flex-col items-center w-full md:w-auto ${className}`}>
      <a 
        href={checkoutHref}
        id={id}
        onClick={handleClick}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {text}
      </a>
      {subtext && (
        <span className="mt-3 text-sm font-body font-medium opacity-80 text-center">
          {subtext}
        </span>
      )}
    </div>
  );
}
