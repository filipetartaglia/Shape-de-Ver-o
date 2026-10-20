import SectionWrapper from "./SectionWrapper";

export default function Journey() {
  const weeks = [
    { week: 1, title: "Organizar" },
    { week: 2, title: "Entrar no ritmo" },
    { week: 3, title: "Consolidar" },
    { week: 4, title: "Ajustar" },
    { week: 5, title: "Manter" },
    { week: 6, title: "Evoluir" },
    { week: 7, title: "Refinar" },
    { week: 8, title: "Avaliar" },
  ];

  return (
    <SectionWrapper bg="dark">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl md:text-6xl text-brand-offwhite">A JORNADA DE 8 SEMANAS</h2>
        <p className="font-body text-neutral-400 mt-4 text-lg">Um processo progressivo, desenhado para construir consistência.</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-1/2"></div>
        
        <div className="space-y-8 relative">
          {weeks.map((item, index) => (
            <div key={item.week} className={`flex items-center gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <h3 className="font-headline text-3xl text-brand-offwhite">{item.title}</h3>
                <span className="font-body text-sm font-bold text-brand-green-accent uppercase tracking-widest">Semana {item.week}</span>
              </div>

              <div className="relative z-10 w-14 h-14 bg-brand-black border-2 border-brand-green-accent rounded-full flex items-center justify-center font-headline text-2xl text-brand-offwhite shrink-0">
                {item.week}
              </div>

              <div className={`md:hidden flex-1`}>
                <span className="font-body text-xs font-bold text-brand-green-accent uppercase tracking-widest block mb-1">Semana {item.week}</span>
                <h3 className="font-headline text-2xl text-brand-offwhite leading-none">{item.title}</h3>
              </div>

              <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                {/* Empty space for alternating layout on desktop */}
              </div>

            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
