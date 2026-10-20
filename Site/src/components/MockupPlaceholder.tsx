interface MockupPlaceholderProps {
  title: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
  type?: "book" | "box" | "device";
}

export default function MockupPlaceholder({ title, subtitle, className = "", aspectRatio = "square", type = "box" }: MockupPlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]"
  };

  return (
    <div className={`relative bg-neutral-900 border border-neutral-700 rounded-lg flex flex-col items-center justify-center p-6 text-center overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
      
      {type === "book" && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-neutral-800 border-r border-neutral-700/50 skew-y-12 origin-left"></div>
      )}
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 mb-6 rounded bg-brand-green-accent/10 text-brand-green-accent flex items-center justify-center border border-brand-green-accent/30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        </div>
        <h3 className="font-headline text-2xl md:text-3xl text-brand-offwhite tracking-wider leading-tight">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-neutral-400 font-body max-w-[200px]">{subtitle}</p>}
        
        <div className="mt-8 border-t border-neutral-700 pt-4 w-full text-brand-green-deep">
          <span className="text-xs font-mono bg-brand-green-accent px-2 py-1 rounded font-bold tracking-widest uppercase">MOCKUP DA CAPA</span>
        </div>
      </div>
    </div>
  );
}
