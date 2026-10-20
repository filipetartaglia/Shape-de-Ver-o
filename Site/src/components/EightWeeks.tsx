import SectionWrapper from "./SectionWrapper";

export default function EightWeeks() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="font-headline text-4xl md:text-5xl text-brand-black leading-tight">
          A VERDADEIRA TRANSFORMAÇÃO EM 8 SEMANAS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {/* Emotional */}
          <div className="bg-brand-black text-brand-offwhite border border-brand-green-deep p-8 rounded-xl md:col-span-2 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="font-headline text-9xl">8</span>
            </div>
            <h4 className="font-headline text-3xl text-brand-green-accent mb-4 relative z-10">O ESPELHO NÃO MENTE</h4>
            <p className="font-body text-lg text-neutral-300 relative z-10">
              O objetivo principal não é apenas marcar checkboxes. É <strong>olhar no espelho e gostar mais do que você está vendo</strong>. É chegar no verão melhor. É poder tirar a camisa sem ficar pensando ou tentando esconder o próprio físico, graças à consistência que você construiu.
            </p>
          </div>

          <div className="bg-white border border-brand-sand/50 p-6 rounded-xl shadow-sm hover:border-brand-green-accent transition-colors">
            <h4 className="font-headline text-2xl text-brand-green-deep mb-2">ROTINA & CLAREZA</h4>
            <p className="font-body text-sm text-neutral-600">Uma rotina que você consegue seguir sem negociar, e saber exatamente o que comer sem cálculos complexos toda hora.</p>
          </div>

          <div className="bg-white border border-brand-sand/50 p-6 rounded-xl shadow-sm hover:border-brand-green-accent transition-colors">
            <h4 className="font-headline text-2xl text-brand-green-deep mb-2">CONTROLE ABSOLUTO</h4>
            <p className="font-body text-sm text-neutral-600">Ter seus próprios números para avaliar a evolução e não deixar o fim de semana destruir todo o progresso dos dias úteis.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
