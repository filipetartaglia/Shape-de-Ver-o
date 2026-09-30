import SectionWrapper from "./SectionWrapper";

export default function Audience() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-neutral-200 rounded-2xl shadow-sm">
        <h2 className="font-headline text-4xl text-brand-black mb-8">
          O SHAPE DE VERÃO É <span className="text-brand-green-deep">PARA VOCÊ</span> SE:
        </h2>
        <ul className="space-y-4 font-body text-lg text-neutral-800">
          <li className="flex items-start gap-3">
            <span className="text-brand-green-accent font-bold mt-1">✓</span>
            Quer melhorar seu físico e chegar ao verão melhor preparado.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-green-accent font-bold mt-1">✓</span>
            Já treinou ou está treinando, mas sente que falta organização.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-green-accent font-bold mt-1">✓</span>
            Gosta de praticidade e não quer passar horas na cozinha.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-green-accent font-bold mt-1">✓</span>
            Quer uma estrutura clara e progressiva para seguir.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-green-accent font-bold mt-1">✓</span>
            Está disposto a executar o plano.
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}
