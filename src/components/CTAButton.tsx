"use client";

import { CHECKOUT_URL, UTM_PARAMS } from "@/lib/constants";
import { event } from "@/lib/pixel";

interface CTAButtonProps {
  text?: string;
  subtext?: string;
  id?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function CTAButton({ 
  text = "COMEÇAR MEU SHAPE", 
  subtext,
  id = "cta-button",
  className = "",
  variant = "primary"
}: CTAButtonProps) {
  
  const handleClick = () => {
    event("InitiateCheckout", {
      content_name: "Shape de Verão - Edição Verão 2026",
      content_category: "Protocolo Digital",
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
        href={`${CHECKOUT_URL}${UTM_PARAMS}`}
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
