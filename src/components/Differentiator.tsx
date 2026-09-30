import SectionWrapper from "./SectionWrapper";

export default function Differentiator() {
  return (
    <SectionWrapper bg="dark">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl text-brand-offwhite leading-tight">
          NÃO É SOBRE SABER MAIS.<br/>
          <span className="text-brand-green-accent">É SOBRE CONSEGUIR EXECUTAR.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl opacity-80">
          <h3 className="font-headline text-2xl text-neutral-400 mb-6 flex items-center gap-2">
            <span className="text-red-500">✕</span> A Rota Comum
          </h3>
          <ul className="space-y-4 font-body text-neutral-400">
            <li>• Informação espalhada pela internet</li>
            <li>• Treino sem direção ou progressão</li>
            <li>• Alimentação improvisada a cada refeição</li>
            <li>• Finais de semana desorganizados</li>
            <li>• Começa motivado e para na primeira semana</li>
            <li>• Não acompanha a própria evolução</li>
          </ul>
        </div>

        <div className="bg-brand-green-deep border border-brand-green-accent/30 p-8 rounded-xl shadow-lg">
          <h3 className="font-headline text-2xl text-brand-offwhite mb-6 flex items-center gap-2">
            <span className="text-brand-green-accent">✓</span> Com o Shape de Verão
          </h3>
          <ul className="space-y-4 font-body text-brand-offwhite">
            <li>• Plano estruturado em um só lugar</li>
            <li>• Estrutura de treino clara e definida</li>
            <li>• Rotina alimentar previsível e prática</li>
            <li>• Protocolo para minimizar danos no fim de semana</li>
            <li>• Foco em consistência acima de motivação</li>
            <li>• Acompanhamento claro dos resultados</li>
          </ul>
        </div>

      </div>
    </SectionWrapper>
  );
}
