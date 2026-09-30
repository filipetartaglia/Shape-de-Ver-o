import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

export default function OfferStack() {
  return (
    <SectionWrapper bg="dark" id="oferta">
      <div className="w-full max-w-4xl mx-auto bg-neutral-900 border-2 border-brand-green-deep rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(24,59,53,0.3)] relative overflow-hidden">
        
        {/* Badge */}
        <div className="absolute top-0 right-0 bg-brand-green-accent text-brand-black font-headline text-xl px-8 py-2 rounded-bl-xl shadow-lg">
          EDIÇÃO VERÃO 2026
        </div>

        <div className="text-center space-y-4 mb-10 pt-4 md:pt-0">
          <h2 className="font-headline text-4xl md:text-5xl text-brand-offwhite">
            TUDO O QUE VOCÊ PRECISA PARA COMEÇAR O PROJETO
          </h2>
        </div>

        <div className="bg-brand-black rounded-xl p-6 mb-8 border border-neutral-800">
          <ul className="space-y-4 font-body text-lg">
            <li className="flex justify-between items-center pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="text-brand-green-accent font-bold">✓</span>
                <span className="text-brand-offwhite">Protocolo Shape de Verão (8 Semanas)</span>
              </div>
            </li>
            <li className="flex justify-between items-center pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="text-brand-green-accent font-bold">✓</span>
                <span className="text-brand-offwhite">Bônus: Guia de Refeições Práticas</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-brand-green-accent font-bold">✓</span>
                <span className="text-brand-offwhite">Bônus: Protocolo de Fim de Semana</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center space-y-4">
          <div className="space-y-2">
            <p className="font-body text-neutral-400 uppercase tracking-widest text-sm">PAGAMENTO ÚNICO</p>
            <div className="font-headline text-3xl text-neutral-500 line-through opacity-70">
              De R$ 97
            </div>
            <div className="font-headline text-7xl md:text-8xl text-brand-green-accent leading-none">
              <span className="text-4xl align-top">por R$</span>47
            </div>
          </div>
          
          <div className="pt-6 flex justify-center w-full">
            <CTAButton 
              id="cta-offer"
              subtext="Acesso digital imediato • 7 dias de garantia incondicional"
              className="w-full md:w-auto md:min-w-[320px]"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
