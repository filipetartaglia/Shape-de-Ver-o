import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import MockupProduct from "./MockupProduct";

export default function Hero() {
  return (
    <SectionWrapper bg="dark" className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:max-w-2xl">
          <div className="inline-block bg-brand-green-deep text-brand-green-accent font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-2">
            Edição Verão 2026
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-wide text-brand-offwhite">
            PARE DE COMEÇAR E PARAR. <br className="hidden md:block"/>
            <span className="text-brand-green-accent">ORGANIZE SEU TREINO E ALIMENTAÇÃO</span> PARA EVOLUIR NAS PRÓXIMAS 8 SEMANAS.
          </h1>
          <p className="font-body text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed">
            Um protocolo prático para homens que querem melhorar o físico, manter a consistência e chegar ao verão com uma rotina que realmente conseguem executar.
          </p>
          <div className="bg-brand-black/50 border border-brand-green-accent/20 p-4 rounded-lg inline-block">
            <p className="font-body text-sm text-brand-offwhite font-medium">
              <span className="text-brand-green-accent">O relógio está correndo:</span> Cada semana que você adia é uma semana a menos de evolução antes do verão.
            </p>
          </div>
          <div className="pt-4 w-full md:w-auto">
            <CTAButton 
              id="cta-hero"
              text="QUERO COMEÇAR MINHAS 8 SEMANAS"
              subtext="Acesso digital • Pagamento único • 7 dias de garantia" 
            />
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-md lg:max-w-sm mx-auto relative">
          <div className="absolute inset-0 bg-brand-green-accent/20 blur-[100px] rounded-full -z-10"></div>
          <MockupProduct 
            title="SHAPE DE VERÃO" 
            type="book"
            color="green"
            imageUrl="/images/shape-de-verao-capa.jpg"
            className="w-full rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
