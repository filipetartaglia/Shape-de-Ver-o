interface MockupProductProps {
  title: string;
  type: "book" | "checklist" | "phone";
  className?: string;
  color?: "green" | "dark" | "light";
}

export default function MockupProduct({ title, type, className = "", color = "dark" }: MockupProductProps) {
  const bgColors = {
    green: "bg-brand-green-deep",
    dark: "bg-neutral-900",
    light: "bg-brand-offwhite text-brand-black"
  };

  const borderColors = {
    green: "border-brand-green-accent/30",
    dark: "border-neutral-700",
    light: "border-neutral-300"
  };

  if (type === "book") {
    return (
      <div className={`relative flex flex-col justify-between p-6 md:p-8 rounded-r-xl border-y border-r shadow-2xl overflow-hidden aspect-[3/4] ${bgColors[color]} ${borderColors[color]} ${className}`}>
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/40 border-r border-white/10 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.5)]"></div>
        <div className="relative z-10 pl-6 flex flex-col h-full justify-between">
          <div>
            <div className="w-12 h-1 bg-brand-green-accent mb-6"></div>
            <h3 className={`font-headline text-3xl md:text-4xl leading-tight uppercase ${color === 'light' ? 'text-brand-black' : 'text-brand-offwhite'}`}>{title}</h3>
          </div>
          <div className="space-y-2">
            <div className="h-1 w-full bg-brand-green-accent/20"></div>
            <div className="h-1 w-2/3 bg-brand-green-accent/20"></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "checklist") {
    return (
      <div className={`relative flex flex-col p-6 rounded-lg border shadow-xl aspect-[3/4] bg-white border-neutral-200 ${className}`}>
        <div className="w-full flex justify-center mb-6">
          <div className="w-1/2 h-4 bg-neutral-200 rounded-b-md -mt-6"></div>
        </div>
        <h3 className="font-headline text-2xl text-brand-black text-center mb-6">{title}</h3>
        <div className="space-y-4 flex-1">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border-2 border-brand-green-deep"></div>
              <div className="flex-1 h-2 bg-neutral-100 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
