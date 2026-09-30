import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import MockupProduct from "./MockupProduct";

export default function Solution() {
  return (
    <SectionWrapper bg="green">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 md:order-1 relative h-full min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-brand-green-accent/10 blur-[80px] rounded-full -z-10"></div>
          
          <div className="relative w-full max-w-[320px] mx-auto">
            {/* Back Mockup (Checklist) */}
            <div className="absolute top-4 -right-8 w-4/5 -rotate-6 opacity-80 transition-transform duration-500 hover:rotate-0 hover:z-20 hover:opacity-100">
              <MockupProduct title="PLANO DE EXECUÇÃO" type="checklist" className="w-full text-brand-black shadow-2xl" />
            </div>
            
            {/* Front Mockup (Book) */}
            <div className="relative z-10 rotate-3 transition-transform duration-500 hover:rotate-0">
              <MockupProduct 
                title="SHAPE DE VERÃO" 
                type="book" 
                color="dark" 
                imageUrl="/images/shape-de-verao-capa.jpg"
                className="w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="font-headline text-4xl md:text-6xl leading-none">
            VOCÊ NÃO PRECISA DE MAIS FORÇA DE VONTADE.
          </h2>
          <p className="font-body text-lg text-brand-offwhite/90 leading-relaxed font-bold">
            Você precisa reduzir o número de decisões que precisa tomar todos os dias.
          </p>
          <ul className="space-y-3 font-body text-brand-offwhite/80">
            <li><strong className="text-brand-green-accent">O que treinar?</strong> → Já está organizado.</li>
            <li><strong className="text-brand-green-accent">O que comer?</strong> → Você tem opções práticas.</li>
            <li><strong className="text-brand-green-accent">E o fim de semana?</strong> → Existe um protocolo.</li>
            <li><strong className="text-brand-green-accent">Estou evoluindo?</strong> → Acompanhe os indicadores.</li>
          </ul>
          <div className="pt-4">
             <CTAButton 
              id="cta-solution"
              text="QUERO O PROTOCOLO DE 8 SEMANAS"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
