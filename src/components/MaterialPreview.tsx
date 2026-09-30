import SectionWrapper from "./SectionWrapper";

export default function MaterialPreview() {
  return (
    <SectionWrapper bg="dark">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl text-brand-offwhite">
          VEJA EXATAMENTE O QUE TEM <span className="text-brand-green-accent">POR DENTRO</span>
        </h2>
        <p className="font-body text-neutral-400 mt-4 max-w-2xl mx-auto">
          Um sistema completo projetado para tirar as dúvidas da sua cabeça e colocar um plano claro nas suas mãos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group">
          <div className="h-48 bg-neutral-800 flex items-center justify-center p-4 relative overflow-hidden">
             <div className="w-2/3 aspect-[3/4] bg-white shadow-2xl rounded-sm flex flex-col p-3 group-hover:scale-105 transition-transform duration-500 rotate-3">
               <div className="h-3 w-1/2 bg-brand-green-deep mb-4"></div>
               <div className="space-y-3">
                 <div className="flex gap-2"><div className="w-4 h-4 bg-neutral-200"></div><div className="flex-1 h-4 bg-neutral-100"></div></div>
                 <div className="flex gap-2"><div className="w-4 h-4 bg-neutral-200"></div><div className="flex-1 h-4 bg-neutral-100"></div></div>
                 <div className="flex gap-2"><div className="w-4 h-4 bg-brand-green-accent"></div><div className="flex-1 h-4 bg-neutral-100"></div></div>
               </div>
             </div>
          </div>
          <div className="p-6">
            <h3 className="font-headline text-2xl text-brand-offwhite mb-2">Plano de Execução</h3>
            <p className="font-body text-sm text-neutral-400">Páginas desenhadas para você visualizar as 8 semanas de treino e alimentação de forma direta e sem firulas.</p>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group">
          <div className="h-48 bg-neutral-800 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="w-2/3 aspect-[3/4] bg-brand-black border border-brand-green-accent/30 shadow-2xl rounded flex flex-col p-3 group-hover:-rotate-3 transition-transform duration-500">
               <h4 className="font-headline text-lg text-brand-green-accent mb-2 border-b border-brand-green-accent/20 pb-1">ESTRUTURA A</h4>
               <div className="space-y-2">
                 <div className="h-1.5 w-full bg-neutral-700"></div>
                 <div className="h-1.5 w-5/6 bg-neutral-700"></div>
                 <div className="h-1.5 w-full bg-neutral-700"></div>
                 <div className="h-1.5 w-4/6 bg-neutral-700"></div>
               </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-headline text-2xl text-brand-offwhite mb-2">Protocolos de Treino</h3>
            <p className="font-body text-sm text-neutral-400">Documentação completa dos métodos. Você saberá exatamente qual exercício fazer e por que está fazendo.</p>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group">
          <div className="h-48 bg-neutral-800 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] opacity-20"></div>
            <div className="w-3/4 aspect-[16/9] bg-brand-black border border-neutral-700 shadow-2xl rounded-t-lg flex flex-col group-hover:-translate-y-2 transition-transform duration-500">
              <div className="h-4 bg-neutral-800 border-b border-neutral-700 flex items-center px-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 p-3 space-y-2">
                <div className="h-2 w-1/3 bg-brand-green-accent rounded"></div>
                <div className="h-2 w-full bg-neutral-700 rounded"></div>
                <div className="h-2 w-full bg-neutral-700 rounded"></div>
                <div className="h-2 w-2/3 bg-neutral-700 rounded"></div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-headline text-2xl text-brand-offwhite mb-2">Acesso Plataforma</h3>
            <p className="font-body text-sm text-neutral-400">Todos os manuais e bônus organizados em uma plataforma fácil de acessar pelo computador ou celular.</p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
