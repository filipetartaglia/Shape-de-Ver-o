import SectionWrapper from "./SectionWrapper";

export default function Problem() {
  return (
    <SectionWrapper bg="dark">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <h2 className="font-headline text-4xl md:text-6xl tracking-wide leading-tight">
            O problema pode não ser falta de esforço.<br/>
            <span className="text-brand-sand">Pode ser falta de estrutura.</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Você pode até saber quais exercícios fazer, que precisa comer melhor e descansar. Mas saber o que fazer é diferente de ter um processo claro para executar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Confusão */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl flex flex-col items-center opacity-70">
            <h3 className="font-headline text-2xl mb-8 text-neutral-400">O que te trava</h3>
            <div className="flex flex-col gap-4 font-body text-sm font-bold tracking-widest text-neutral-500">
              <div className="p-4 border border-neutral-700 rounded">INFORMAÇÃO SOLTA</div>
              <div className="text-xl">↓</div>
              <div className="p-4 border border-neutral-700 rounded">CONFUSÃO</div>
              <div className="text-xl">↓</div>
              <div className="p-4 border border-red-900/50 bg-red-900/10 text-red-400 rounded">INCONSISTÊNCIA</div>
            </div>
          </div>

          {/* Solução */}
          <div className="bg-brand-green-deep border border-brand-green-accent/30 p-8 rounded-xl flex flex-col items-center relative shadow-[0_0_40px_rgba(24,59,53,0.5)]">
            <div className="absolute -top-4 bg-brand-green-accent text-brand-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest">
              O Caminho
            </div>
            <h3 className="font-headline text-2xl mb-8 text-brand-offwhite">Como funciona</h3>
            <div className="flex flex-col gap-3 font-body text-sm font-bold tracking-widest text-brand-offwhite w-full max-w-[200px]">
              <div className="p-3 bg-brand-black/40 rounded text-center">PLANO</div>
              <div className="text-center text-brand-green-accent text-lg">↓</div>
              <div className="p-3 bg-brand-black/40 rounded text-center">EXECUÇÃO</div>
              <div className="text-center text-brand-green-accent text-lg">↓</div>
              <div className="p-3 bg-brand-black/40 rounded text-center">CONSISTÊNCIA</div>
              <div className="text-center text-brand-green-accent text-lg">↓</div>
              <div className="p-3 bg-brand-black/40 rounded text-center">ACOMPANHAMENTO</div>
              <div className="text-center text-brand-green-accent text-lg">↓</div>
              <div className="p-3 bg-brand-green-accent text-brand-black rounded text-center shadow-lg">EVOLUÇÃO</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
