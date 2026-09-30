import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import Image from "next/image";

export default function Solution() {
  return (
    <SectionWrapper bg="green">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative aspect-square md:aspect-auto md:h-[600px] rounded-xl overflow-hidden shadow-2xl border border-brand-green-accent/20">
          <Image 
            src="/images/sistema-shape-de-verao.jpg"
            alt="Sistema Shape de Verão"
            fill
            className="object-cover"
          />
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
