import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

export default function Solution() {
  return (
    <SectionWrapper bg="green">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 md:order-1 relative h-full min-h-[400px] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-green-accent/10 blur-[80px] rounded-full -z-10"></div>
          
          <div className="relative w-full max-w-[340px] aspect-square">
            
            {/* Background Element: Calendar/Plan */}
            <div className="absolute top-0 right-0 w-3/4 bg-neutral-900 border border-neutral-700 rounded-xl p-4 shadow-2xl rotate-6 transition-transform duration-500 hover:rotate-12 hover:scale-105 opacity-80 hover:opacity-100 z-10">
              <div className="flex justify-between items-center mb-4 border-b border-neutral-800 pb-2">
                <div className="font-headline text-brand-green-accent">JORNADA</div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`h-6 rounded ${i < 6 ? 'bg-brand-green-accent/80' : 'bg-neutral-800'}`}></div>
                ))}
              </div>
            </div>

            {/* Foreground Element: Checklist/Evolution */}
            <div className="absolute bottom-4 left-0 w-3/4 bg-white border border-neutral-200 rounded-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 z-20">
              <div className="w-10 h-1 bg-brand-green-deep rounded mb-4"></div>
              <h4 className="font-headline text-2xl text-brand-black mb-4">ACOMPANHAMENTO</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm bg-brand-green-deep flex items-center justify-center text-white text-xs">✓</div>
                  <div className="flex-1 h-2 bg-neutral-200 rounded"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm bg-brand-green-deep flex items-center justify-center text-white text-xs">✓</div>
                  <div className="flex-1 h-2 bg-neutral-200 rounded"></div>
                  <div className="w-8 h-2 bg-neutral-200 rounded"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm border-2 border-neutral-300"></div>
                  <div className="flex-1 h-2 bg-neutral-100 rounded"></div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <div className="flex items-end gap-2 h-10">
                  <div className="w-1/4 h-full bg-brand-green-deep/20 rounded-t"></div>
                  <div className="w-1/4 h-3/4 bg-brand-green-deep/40 rounded-t"></div>
                  <div className="w-1/4 h-1/2 bg-brand-green-deep/70 rounded-t"></div>
                  <div className="w-1/4 h-1/4 bg-brand-green-deep rounded-t"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="font-headline text-4xl md:text-6xl leading-none">
            VOCÊ NÃO PRECISA DE MAIS FORÇA DE VONTADE.
          </h2>
          <p className="font-body text-lg text-brand-offwhite/90 leading-relaxed font-bold">
            Você precisa reduzir o número de decisões que precisa tomar todos os dias.
          </p>
          <ul className="space-y-3 font-body text-brand-offwhite/80">
            <li><strong className="text-brand-green-accent">O que treinar?</strong> → Já está organizado.</li>
            <li><strong className="text-brand-green-accent">O que comer?</strong> → Você tem opções práticas.</li>
            <li><strong className="text-brand-green-accent">E o fim de semana?</strong> → Existe um protocolo.</li>
            <li><strong className="text-brand-green-accent">Estou evoluindo?</strong> → Acompanhe os indicadores.</li>
          </ul>
          <div className="pt-4">
             <CTAButton 
              id="cta-solution"
              text="QUERO O PROTOCOLO DE 8 SEMANAS"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
