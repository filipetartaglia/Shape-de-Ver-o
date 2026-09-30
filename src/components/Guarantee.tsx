import SectionWrapper from "./SectionWrapper";

export default function Guarantee() {
  return (
    <SectionWrapper bg="green" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        <div className="w-32 h-32 shrink-0 bg-brand-offwhite rounded-full flex items-center justify-center border-4 border-brand-green-accent shadow-2xl">
          <span className="font-headline text-5xl text-brand-black">7<span className="text-3xl">d</span></span>
        </div>
        <div className="space-y-5">
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">Você não precisa decidir no escuro. Inversão de risco total.</h2>
          <p className="font-body text-brand-offwhite/90 text-lg leading-relaxed">
            Você tem 7 dias para conhecer o material, aplicar a estrutura e decidir se o Shape de Verão faz sentido para você. <strong>Se o método não funcionar, eu mesmo devolvo todo o seu dinheiro investido.</strong> Sem letras miúdas, sem enrolação.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
