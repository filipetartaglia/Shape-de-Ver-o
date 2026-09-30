interface MockupPlaceholderProps {
  title: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait";
}

export default function MockupPlaceholder({ title, subtitle, className = "", aspectRatio = "square" }: MockupPlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]"
  };

  return (
    <div className={`bg-neutral-800 border border-neutral-700 rounded-lg flex flex-col items-center justify-center p-6 text-center shadow-xl ${aspectClasses[aspectRatio]} ${className}`}>
      <div className="w-16 h-16 mb-4 rounded-full bg-neutral-700 flex items-center justify-center">
        <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      </div>
      <h3 className="font-headline text-2xl text-brand-offwhite tracking-wider">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-neutral-400 font-body">{subtitle}</p>}
      <span className="mt-4 text-xs font-mono text-brand-green-accent bg-brand-green-accent/10 px-2 py-1 rounded">MOCKUP PLACEHOLDER</span>
    </div>
  );
}
