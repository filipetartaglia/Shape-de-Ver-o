import SectionWrapper from "./SectionWrapper";

export default function Guarantee() {
  return (
    <SectionWrapper bg="green" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        <div className="w-32 h-32 shrink-0 bg-brand-offwhite rounded-full flex items-center justify-center border-4 border-brand-green-accent shadow-2xl">
          <span className="font-headline text-5xl text-brand-black">7<span className="text-3xl">d</span></span>
        </div>
        <div className="space-y-5">
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">Garantia de 7 Dias</h2>
          <p className="font-body text-brand-offwhite/90 text-lg leading-relaxed">
            Você tem 7 dias para acessar o material, conhecer o protocolo e decidir se ele faz sentido para você. Se não fizer, basta solicitar o reembolso dentro do prazo da garantia diretamente na plataforma.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
