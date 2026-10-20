import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <SectionWrapper bg="dark" className="border-t border-neutral-800">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-headline text-5xl md:text-7xl leading-none text-brand-offwhite">
          O MELHOR MOMENTO PARA ORGANIZAR SEU PROJETO É <span className="text-brand-green-accent">ANTES DE CONTINUAR ADIANDO.</span>
        </h2>
        <p className="font-body text-xl md:text-2xl text-neutral-400">
          Comece com um plano. Execute por 8 semanas. Acompanhe sua evolução.
        </p>
        <div className="pt-8 flex justify-center w-full">
          <CTAButton 
            id="cta-final"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
