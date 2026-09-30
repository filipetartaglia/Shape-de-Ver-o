import SectionWrapper from "./SectionWrapper";

export default function Identification() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-3xl mx-auto flex flex-col space-y-12">
        <div className="text-center space-y-6">
          <h2 className="font-headline text-4xl md:text-6xl tracking-wide text-brand-black">
            Você não precisa de mais uma dica de treino.
          </h2>
          <p className="font-body text-lg md:text-xl text-neutral-700 leading-relaxed">
            Você provavelmente já viu dezenas. O problema é que informação solta não cria uma rotina.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl border border-neutral-200 shadow-sm">
          <p className="font-body font-bold mb-6 text-brand-green-deep uppercase tracking-wider text-sm">O ciclo que você já conhece:</p>
          <ul className="space-y-4 font-body text-neutral-800 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-brand-green-accent">●</span> Segunda começa motivado
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-green-accent">●</span> Terça vai bem
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-green-accent">●</span> Quarta perde o ritmo
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500">●</span> Sexta sai da rotina
            </li>
            <li className="flex items-center gap-3 font-bold">
              <span className="text-red-500">●</span> Fim de semana exagera
            </li>
            <li className="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <span className="text-neutral-400">↺</span> Segunda começa tudo novamente...
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
