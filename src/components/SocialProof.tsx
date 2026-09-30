import SectionWrapper from "./SectionWrapper";

export default function SocialProof() {
  return (
    <SectionWrapper bg="dark">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="font-headline text-4xl md:text-5xl text-brand-offwhite leading-tight">
          ESTAMOS CONSTRUINDO OS <span className="text-brand-green-accent">PRIMEIROS RESULTADOS DOCUMENTADOS</span> DO MÉTODO.
        </h2>
        
        <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-xl">
          <p className="font-body text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Não acreditamos em fotos falsas ou depoimentos genéricos comprados na internet. Os primeiros testadores da Edição Verão 2026 já estão executando a jornada de 8 semanas, e os relatos reais da comunidade serão exibidos aqui assim que a primeira turma concluir o ciclo.
          </p>
          <div className="mt-8 flex justify-center gap-4 opacity-50">
            <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 animate-pulse"></div>
            <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 animate-pulse"></div>
            <div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 animate-pulse"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
