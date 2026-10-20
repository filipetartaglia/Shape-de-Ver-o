import SectionWrapper from "./SectionWrapper";

export default function NotFor() {
  return (
    <SectionWrapper bg="dark">
      <div className="max-w-3xl mx-auto border border-neutral-800 p-8 md:p-12 rounded-2xl bg-brand-black">
        <h2 className="font-headline text-3xl text-neutral-400 mb-8 opacity-80">
          O SHAPE DE VERÃO <span className="text-red-500">NÃO É</span> PARA VOCÊ SE:
        </h2>
        <ul className="space-y-4 font-body text-neutral-500">
          <li className="flex items-start gap-3">
            <span className="text-red-900 font-bold mt-1">✕</span>
            Procura uma transformação mágica sem esforço.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-900 font-bold mt-1">✕</span>
            Quer acompanhamento individualizado ou mentoria 1 a 1.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-900 font-bold mt-1">✕</span>
            Espera que prometamos &quot;perder 10kg em 3 dias&quot;.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-900 font-bold mt-1">✕</span>
            Vai apenas ler o material e não pretende executar.
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}
