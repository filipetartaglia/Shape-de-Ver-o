import SectionWrapper from "./SectionWrapper";

export default function EightWeeks() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="font-headline text-4xl md:text-5xl text-brand-black leading-tight">
          O QUE VOCÊ PODE CONSTRUIR EM 8 SEMANAS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
          <div className="bg-brand-offwhite border border-brand-sand/50 p-6 rounded-xl">
            <h4 className="font-headline text-2xl text-brand-green-deep mb-2">ROTINA</h4>
            <p className="font-body text-sm text-neutral-600">Uma rotina de treinos que você finalmente consegue seguir sem negociar.</p>
          </div>
          <div className="bg-brand-offwhite border border-brand-sand/50 p-6 rounded-xl">
            <h4 className="font-headline text-2xl text-brand-green-deep mb-2">CLAREZA</h4>
            <p className="font-body text-sm text-neutral-600">Saber exatamente o que comer sem precisar fazer cálculos complexos toda hora.</p>
          </div>
          <div className="bg-brand-offwhite border border-brand-sand/50 p-6 rounded-xl">
            <h4 className="font-headline text-2xl text-brand-green-deep mb-2">DADOS</h4>
            <p className="font-body text-sm text-neutral-600">Ter os próprios números e medidas para avaliar a evolução de forma objetiva.</p>
          </div>
          <div className="bg-brand-offwhite border border-brand-sand/50 p-6 rounded-xl">
            <h4 className="font-headline text-2xl text-brand-green-deep mb-2">CONTROLE</h4>
            <p className="font-body text-sm text-neutral-600">Não deixar o fim de semana destruir todo o progresso feito nos dias úteis.</p>
          </div>
          <div className="bg-brand-offwhite border border-brand-sand/50 p-6 rounded-xl md:col-span-2">
            <h4 className="font-headline text-2xl text-brand-green-deep mb-2">EVOLUÇÃO VISUAL</h4>
            <p className="font-body text-sm text-neutral-600">A possibilidade real de melhora estética, ganho de definição e mais confiança para tirar a camisa no verão, como consequência direta de 8 semanas de execução bem feita.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
