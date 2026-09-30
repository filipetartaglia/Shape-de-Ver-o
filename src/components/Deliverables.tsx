import SectionWrapper from "./SectionWrapper";
import MockupProduct from "./MockupProduct";

export default function Deliverables() {
  return (
    <SectionWrapper bg="light">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl md:text-6xl text-brand-black">O QUE ENTRA HOJE</h2>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        
        {/* Item 1 */}
        <div className="bg-brand-black text-brand-offwhite rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 lg:gap-10 items-center shadow-xl">
          <div className="w-3/4 max-w-[240px] md:w-1/3 shrink-0">
            <MockupProduct title="SHAPE DE VERÃO" type="book" color="dark" className="w-full" />
          </div>
          <div className="w-full md:w-2/3 space-y-3">
            <span className="text-brand-green-accent font-headline text-2xl">①</span>
            <h3 className="font-headline text-3xl">Protocolo Shape de Verão</h3>
            <p className="font-body text-neutral-300">A jornada principal de 8 semanas contendo a estrutura exata de treino e organização de rotina. Para você saber o que fazer em cada semana.</p>
            <p className="font-body text-brand-green-accent/80 text-sm uppercase tracking-widest font-bold mt-2">Valor Percebido: R$ 67</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Item 2 */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col">
            <span className="text-brand-green-deep font-headline text-2xl mb-2">②</span>
            <h3 className="font-headline text-2xl mb-2 text-brand-black">Guia de Refeições Práticas</h3>
            <p className="font-body text-neutral-600 text-sm mb-4">&quot;Porque eu não tenho tempo para fazer dieta&quot;. Opções práticas para todas as refeições e redução de improviso alimentar.</p>
            <p className="font-body text-brand-green-deep text-xs uppercase tracking-widest font-bold mt-auto pt-4 border-t border-neutral-100">Valor Percebido: R$ 37</p>
          </div>

          {/* Item 3 */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col">
            <span className="text-brand-green-deep font-headline text-2xl mb-2">③</span>
            <h3 className="font-headline text-2xl mb-2 text-brand-black">Protocolo de Fim de Semana</h3>
            <p className="font-body text-neutral-600 text-sm mb-4">&quot;Porque não consigo manter a dieta quando saio&quot;. Como lidar com churrascos, festas e refeições fora sem destruir a semana inteira.</p>
            <p className="font-body text-brand-green-deep text-xs uppercase tracking-widest font-bold mt-auto pt-4 border-t border-neutral-100">Valor Percebido: R$ 27</p>
          </div>

          {/* Item 4 */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col">
            <span className="text-brand-green-deep font-headline text-2xl mb-2">④</span>
            <h3 className="font-headline text-2xl mb-2 text-brand-black">Tracker Shape de Verão</h3>
            <p className="font-body text-neutral-600 text-sm mb-4">&quot;Porque eu começo e não sei se estou evoluindo&quot;. Planilha e checklist para medir aderência, treinos, peso e acompanhamento fotográfico.</p>
            <p className="font-body text-brand-green-deep text-xs uppercase tracking-widest font-bold mt-auto pt-4 border-t border-neutral-100">Valor Percebido: R$ 27</p>
          </div>

          {/* Item 5 */}
          <div className="bg-white border-2 border-brand-sand rounded-xl p-6 flex flex-col shadow-sm">
            <span className="text-brand-green-accent font-headline text-2xl mb-2">⑤</span>
            <h3 className="font-headline text-2xl mb-2 text-brand-black">Guia &quot;Retomada Rápida&quot;</h3>
            <p className="font-body text-neutral-600 text-sm font-medium mb-4">Voltou a sair da rotina e exagerou? Um mini material para retomada imediata. Falhou? Retoma. Sem desespero e sem jogar a toalha.</p>
            <p className="font-body text-brand-green-deep text-xs uppercase tracking-widest font-bold mt-auto pt-4 border-t border-brand-sand/30">Valor Percebido: R$ 17</p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
