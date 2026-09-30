import SectionWrapper from "./SectionWrapper";

export default function Problem() {
  return (
    <SectionWrapper bg="dark">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <h2 className="font-headline text-4xl md:text-6xl tracking-wide leading-tight text-brand-offwhite">
            O problema não é falta de informação.<br/>
            <span className="text-brand-green-accent">É falta de um sistema de execução.</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Por que o Shape de Verão funciona melhor do que continuar tentando sozinho? Porque ele organiza treino, alimentação e fim de semana em um único processo estruturado.
          </p>
        </div>

        <div className="bg-brand-green-deep border border-brand-green-accent/30 p-8 md:p-12 rounded-xl shadow-[0_0_40px_rgba(24,59,53,0.5)]">
          <h3 className="font-headline text-3xl mb-10 text-brand-offwhite">O SISTEMA SHAPE DE VERÃO</h3>
          
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 shrink-0 bg-brand-green-accent text-brand-black rounded-full flex items-center justify-center font-bold font-headline text-xl mt-1">1</div>
              <div>
                <h4 className="font-headline text-2xl text-brand-offwhite">ORGANIZAR</h4>
                <p className="font-body text-neutral-300">Você sabe exatamente o que precisa fazer. Sem adivinhação.</p>
              </div>
            </div>
            <div className="w-0.5 h-6 bg-brand-green-accent/30 ml-4"></div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 shrink-0 bg-brand-green-accent text-brand-black rounded-full flex items-center justify-center font-bold font-headline text-xl mt-1">2</div>
              <div>
                <h4 className="font-headline text-2xl text-brand-offwhite">EXECUTAR</h4>
                <p className="font-body text-neutral-300">Você transforma o plano em rotina diária.</p>
              </div>
            </div>
            <div className="w-0.5 h-6 bg-brand-green-accent/30 ml-4"></div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 shrink-0 bg-brand-green-accent text-brand-black rounded-full flex items-center justify-center font-bold font-headline text-xl mt-1">3</div>
              <div>
                <h4 className="font-headline text-2xl text-brand-offwhite">MANTER</h4>
                <p className="font-body text-neutral-300">Você aprende a lidar com os dias em que a motivação cai.</p>
              </div>
            </div>
            <div className="w-0.5 h-6 bg-brand-green-accent/30 ml-4"></div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 shrink-0 bg-brand-green-accent text-brand-black rounded-full flex items-center justify-center font-bold font-headline text-xl mt-1">4</div>
              <div>
                <h4 className="font-headline text-2xl text-brand-offwhite">ACOMPANHAR</h4>
                <p className="font-body text-neutral-300">Você mede o que está acontecendo com o seu físico.</p>
              </div>
            </div>
            <div className="w-0.5 h-6 bg-brand-green-accent/30 ml-4"></div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 shrink-0 bg-brand-green-accent text-brand-black rounded-full flex items-center justify-center font-bold font-headline text-xl mt-1">5</div>
              <div>
                <h4 className="font-headline text-2xl text-brand-offwhite">AJUSTAR</h4>
                <p className="font-body text-neutral-300">Você não precisa abandonar o projeto porque uma semana saiu do planejado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
