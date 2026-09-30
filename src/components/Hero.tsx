import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import MockupPlaceholder from "./MockupPlaceholder";

export default function Hero() {
  return (
    <SectionWrapper bg="dark" className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:max-w-2xl">
          <div className="inline-block bg-brand-green-deep text-brand-green-accent font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-2">
            Edição Verão 2026
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-wide text-brand-offwhite">
            SEU PRÓXIMO <br className="hidden md:block"/>VERÃO <span className="text-brand-green-accent">COMEÇA AGORA.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed">
            Um protocolo prático de 8 semanas para organizar treino, alimentação e execução — e trabalhar na evolução do seu físico antes do verão.
          </p>
          <div className="pt-6 w-full md:w-auto">
            <CTAButton 
              id="cta-hero"
              subtext="Acesso digital • Pagamento único • 7 dias de garantia" 
            />
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-md lg:max-w-none relative">
          {/* Decorative element */}
          <div className="absolute inset-0 bg-brand-green-accent/20 blur-[100px] rounded-full -z-10"></div>
          <MockupPlaceholder 
            title="SHAPE DE VERÃO" 
            subtitle="Protocolo Oficial de 8 Semanas" 
            aspectRatio="portrait"
            className="w-full h-auto shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
