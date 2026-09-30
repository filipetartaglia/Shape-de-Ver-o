import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

export default function OfferStack() {
  return (
    <SectionWrapper bg="dark" id="oferta">
      <div className="w-full max-w-4xl mx-auto bg-neutral-900 border-2 border-brand-green-deep rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(24,59,53,0.3)] relative overflow-hidden">
        
        <div className="absolute top-0 right-0 bg-brand-green-accent text-brand-black font-headline text-xl px-8 py-2 rounded-bl-xl shadow-lg z-10">
          EDIÇÃO VERÃO 2026
        </div>

        <div className="text-center space-y-4 mb-8 pt-4 md:pt-0 relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl text-brand-offwhite">
            RESUMO DO PROJETO
          </h2>
        </div>

        <div className="bg-brand-black rounded-xl p-6 mb-8 border border-neutral-800 relative z-10">
          <ul className="space-y-4 font-body text-base md:text-lg">
            <li className="flex justify-between items-center pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="text-brand-green-accent font-bold">✓</span>
                <span className="text-brand-offwhite">Protocolo Shape de Verão — Manual Principal</span>
              </div>
            </li>
            <li className="flex justify-between items-center pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="text-brand-green-accent font-bold">✓</span>
                <span className="text-brand-offwhite">Plano de Execução: Treino & Alimentação (8 Semanas)</span>
              </div>
            </li>
            <li className="flex justify-between items-center pb-3 border-b border-neutral-800 opacity-80">
              <div className="flex items-center gap-3">
                <span className="text-brand-green-deep font-bold">🎁</span>
                <span className="text-brand-offwhite">Bônus: Guia de Refeições Práticas</span>
              </div>
            </li>
            <li className="flex justify-between items-center opacity-80">
              <div className="flex items-center gap-3">
                <span className="text-brand-green-deep font-bold">🎁</span>
                <span className="text-brand-offwhite">Bônus: Protocolo de Fim de Semana</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center space-y-4 relative z-10 bg-neutral-900/80 p-4 rounded-xl">
          
          <div className="space-y-2">
            <div className="font-headline text-3xl text-neutral-500 line-through opacity-70">
              De R$ 97
            </div>
            <div className="font-headline text-7xl md:text-8xl text-brand-green-accent leading-none">
              <span className="text-4xl align-top">POR R$</span>47
            </div>
            <p className="font-body text-neutral-500 text-sm tracking-widest uppercase">PAGAMENTO ÚNICO</p>
          </div>
          
          <div className="pt-6 flex justify-center w-full">
            <CTAButton 
              id="cta-offer"
              text="QUERO COMEÇAR MEU SHAPE"
              subtext="Acesso digital imediato • 7 dias de garantia"
              className="w-full md:w-auto md:min-w-[320px]"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
