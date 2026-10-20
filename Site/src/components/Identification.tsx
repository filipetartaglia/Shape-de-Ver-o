import SectionWrapper from "./SectionWrapper";

export default function Identification() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-3xl mx-auto flex flex-col space-y-12">
        <div className="text-center space-y-6">
          <h2 className="font-headline text-4xl md:text-6xl tracking-wide text-brand-black">
            Por que você continua começando e parando?
          </h2>
          <p className="font-body text-lg md:text-xl text-neutral-700 leading-relaxed">
            Você não precisa de mais uma dica solta de treino. O problema é que informação sem organização não cria uma rotina sustentável.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl border border-neutral-200 shadow-sm relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-black text-brand-offwhite font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest">
            O ciclo da frustração
          </div>
          <div className="flex flex-col gap-4 font-body text-neutral-800 text-lg font-medium text-center">
            <div>Você começa animado.</div>
            <div className="text-brand-green-deep">↓</div>
            <div>Não sabe exatamente como organizar tudo.</div>
            <div className="text-brand-green-deep">↓</div>
            <div>Começa a improvisar.</div>
            <div className="text-brand-green-deep">↓</div>
            <div className="text-red-500">Perde a consistência e sai da rotina.</div>
            <div className="text-brand-green-deep">↓</div>
            <div>Acha que precisa recomeçar do zero.</div>
            <div className="text-brand-green-deep">↓</div>
            <div className="font-bold border-t border-neutral-100 pt-4 mt-2">Segunda-feira: tudo outra vez.</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
