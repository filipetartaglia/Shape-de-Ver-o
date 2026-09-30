import SectionWrapper from "./SectionWrapper";
import MockupPlaceholder from "./MockupPlaceholder";

export default function Deliverables() {
  return (
    <SectionWrapper bg="light">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl md:text-6xl text-brand-black">O QUE ENTRA HOJE</h2>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        
        {/* Item 1 */}
        <div className="bg-brand-black text-brand-offwhite rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-xl">
          <div className="w-full md:w-1/4">
            <MockupPlaceholder title="SHAPE DE VERÃO" type="book" aspectRatio="portrait" className="bg-neutral-900 w-full" />
          </div>
          <div className="w-full md:w-3/4 space-y-3">
            <span className="text-brand-green-accent font-headline text-2xl">①</span>
            <h3 className="font-headline text-3xl">Protocolo Shape de Verão</h3>
            <p className="font-body text-neutral-300">A jornada principal de 8 semanas contendo a estrutura exata de treino e organização de rotina.</p>
          </div>
        </div>

        {/* Grid for other items */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Item 2 */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col">
            <span className="text-brand-green-deep font-headline text-2xl mb-2">②</span>
            <h3 className="font-headline text-2xl mb-2 text-brand-black">Guia de Refeições Práticas</h3>
            <p className="font-body text-neutral-600 text-sm">Para reduzir a improvisação alimentar. Opções práticas para todas as refeições.</p>
          </div>

          {/* Item 3 */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col">
            <span className="text-brand-green-deep font-headline text-2xl mb-2">③</span>
            <h3 className="font-headline text-2xl mb-2 text-brand-black">Protocolo de Fim de Semana</h3>
            <p className="font-body text-neutral-600 text-sm">Para lidar com churrascos, festas e refeições fora, sem que isso destrua a sua semana.</p>
          </div>

          {/* Item 4 */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col">
            <span className="text-brand-green-deep font-headline text-2xl mb-2">④</span>
            <h3 className="font-headline text-2xl mb-2 text-brand-black">Sistema de Acompanhamento</h3>
            <p className="font-body text-neutral-600 text-sm">Checklist, planilhas de métricas e guia de fotos/medidas para ter controle visual do progresso.</p>
          </div>

          {/* Item 5 */}
          <div className="bg-white border-2 border-brand-sand rounded-xl p-6 flex flex-col shadow-sm">
            <span className="text-brand-green-accent font-headline text-2xl mb-2">⑤</span>
            <h3 className="font-headline text-2xl mb-2 text-brand-black">Guia &quot;Sair da Rotina. E Agora?&quot;</h3>
            <p className="font-body text-neutral-600 text-sm font-medium">Um mini material para retomada imediata depois de uma semana ruim. Falhou? Retoma. Sem desespero.</p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
