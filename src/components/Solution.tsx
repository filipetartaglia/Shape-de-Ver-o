import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import MockupPlaceholder from "./MockupPlaceholder";

export default function Solution() {
  return (
    <SectionWrapper bg="green">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative">
          <MockupPlaceholder 
            title="SISTEMA SHAPE DE VERÃO" 
            subtitle="Tudo organizado em um só lugar"
            aspectRatio="square"
            className="bg-brand-black border-brand-green-deep shadow-2xl shadow-black/50"
          />
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="font-headline text-5xl md:text-7xl leading-none">
            FOI PARA ISSO QUE O<br/>
            <span className="text-brand-green-accent">SHAPE DE VERÃO</span><br/>
            FOI CRIADO.
          </h2>
          <p className="font-body text-lg text-brand-offwhite/90 leading-relaxed">
            Nós pegamos a informação dispersa e transformamos em uma jornada prática de 8 semanas. Um processo estruturado para quem não tem tempo a perder e quer chegar ao verão na sua melhor versão.
          </p>
          <div className="pt-4">
             <CTAButton 
              id="cta-solution"
              text="QUERO ESSE PLANO"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
