import SectionWrapper from "./SectionWrapper";
import MockupProduct from "./MockupProduct";

export default function Deliverables() {
  return (
    <SectionWrapper bg="light">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl md:text-6xl text-brand-black">O QUE VOCÊ LEVA HOJE</h2>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        
        {/* Core Item 1 */}
        <div className="bg-brand-black text-brand-offwhite rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 lg:gap-10 items-center shadow-xl">
          <div className="w-3/4 max-w-[240px] md:w-1/3 shrink-0">
            <MockupProduct title="SHAPE DE VERÃO" type="book" color="dark" className="w-full" />
          </div>
          <div className="w-full md:w-2/3 space-y-3">
            <span className="text-brand-green-accent font-headline text-2xl uppercase tracking-widest">Manual Principal</span>
            <h3 className="font-headline text-3xl">Protocolo Shape de Verão</h3>
            <p className="font-body text-neutral-300">A base teórica e estratégica completa. Tudo o que você precisa entender sobre como o processo funciona e como organizar sua rotina, direto ao ponto.</p>
          </div>
        </div>

        {/* Core Item 2 */}
        <div className="bg-brand-green-deep text-brand-offwhite rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 lg:gap-10 items-center shadow-xl">
          <div className="w-3/4 max-w-[240px] md:w-1/3 shrink-0 order-2 md:order-1">
            <MockupProduct title="PLANO DE EXECUÇÃO" type="checklist" className="w-full text-brand-black" />
          </div>
          <div className="w-full md:w-2/3 space-y-3 order-1 md:order-2">
            <span className="text-brand-offwhite/70 font-headline text-2xl uppercase tracking-widest">Ferramenta Prática</span>
            <h3 className="font-headline text-3xl text-brand-green-accent">Plano de Execução (8 Semanas)</h3>
            <p className="font-body text-brand-offwhite/90">A aplicação prática do sistema. O roteiro exato contendo a estrutura de treino e alimentação para as suas próximas 8 semanas.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          {/* Bonus 1 */}
          <div className="bg-white border-2 border-brand-sand rounded-xl p-6 flex flex-col shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-sand text-brand-black font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-lg">Bônus Especial</div>
            <h3 className="font-headline text-2xl mb-2 text-brand-black mt-2">Guia de Refeições Práticas</h3>
            <p className="font-body text-neutral-600 text-sm mb-4">Opções práticas para todas as refeições e redução de improviso alimentar. Comer bem sem precisar virar chefe de cozinha.</p>
          </div>

          {/* Bonus 2 */}
          <div className="bg-white border-2 border-brand-sand rounded-xl p-6 flex flex-col shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-sand text-brand-black font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-lg">Bônus Especial</div>
            <h3 className="font-headline text-2xl mb-2 text-brand-black mt-2">Protocolo de Fim de Semana</h3>
            <p className="font-body text-neutral-600 text-sm mb-4">Como lidar com churrascos, festas e refeições fora, garantindo que a sexta-feira não destrua os resultados da semana inteira.</p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
