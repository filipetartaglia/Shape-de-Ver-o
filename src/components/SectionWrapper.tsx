interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "light" | "dark" | "green";
}

export default function SectionWrapper({ children, className = "", id, bg = "light" }: SectionWrapperProps) {
  const bgClasses = {
    light: "bg-brand-offwhite text-brand-black",
    dark: "bg-brand-black text-brand-offwhite",
    green: "bg-brand-green-deep text-brand-offwhite",
  };

  return (
    <section id={id} className={`w-full py-16 md:py-24 px-4 md:px-8 flex flex-col items-center justify-center ${bgClasses[bg]} ${className}`}>
      <div className="w-full max-w-5xl">
        {children}
      </div>
    </section>
  );
}
