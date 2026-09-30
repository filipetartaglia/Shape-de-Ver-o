import SectionWrapper from "./SectionWrapper";
import MockupPlaceholder from "./MockupPlaceholder";

export default function Deliverables() {
  return (
    <SectionWrapper bg="light">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl md:text-6xl text-brand-black">O QUE VOCÊ RECEBE</h2>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        
        {/* Main Item */}
        <div className="bg-brand-black text-brand-offwhite rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-xl">
          <div className="w-full md:w-1/3">
            <MockupPlaceholder title="SHAPE DE VERÃO" aspectRatio="portrait" className="bg-neutral-900 w-full" />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <span className="bg-brand-green-accent text-brand-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Protocolo Principal</span>
            <h3 className="font-headline text-4xl">SHAPE DE VERÃO</h3>
            <p className="font-body text-neutral-300">O protocolo completo de 8 semanas contendo a estrutura exata de treino, estratégias de execução, pilares de consistência e sistema de acompanhamento da sua evolução.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bonus 1 */}
          <div className="bg-white border-2 border-brand-sand rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
            <div className="w-full max-w-[200px] mb-6">
              <MockupPlaceholder title="GUIA DE REFEIÇÕES" aspectRatio="square" className="w-full" />
            </div>
            <span className="text-brand-green-deep font-bold text-sm tracking-widest uppercase mb-2">Bônus Especial</span>
            <h3 className="font-headline text-3xl mb-3 text-brand-black">GUIA DE REFEIÇÕES PRÁTICAS</h3>
            <p className="font-body text-neutral-600 text-sm">Opções práticas para todas as refeições do dia, guia de refeições fora de casa, lista de compras e orientações para preparo rápido.</p>
          </div>

          {/* Bonus 2 */}
          <div className="bg-white border-2 border-brand-sand rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
            <div className="w-full max-w-[200px] mb-6">
              <MockupPlaceholder title="FIM DE SEMANA" aspectRatio="square" className="w-full" />
            </div>
            <span className="text-brand-green-deep font-bold text-sm tracking-widest uppercase mb-2">Bônus Especial</span>
            <h3 className="font-headline text-3xl mb-3 text-brand-black">PROTOCOLO DE FIM DE SEMANA</h3>
            <p className="font-body text-neutral-600 text-sm">Estratégias para manter a consistência de sexta a domingo. Como lidar com churrascos, festas e álcool sem destruir a semana inteira.</p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
