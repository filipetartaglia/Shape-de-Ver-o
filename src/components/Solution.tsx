import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import Image from "next/image";

export default function Solution() {
  return (
    <SectionWrapper bg="green" className="py-0 md:py-0 px-0 md:px-0">
      <div className="w-full max-w-[1400px] mx-auto relative group">
        <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] relative bg-brand-black">
           <Image 
             src="/images/sistema-shape-de-verao.jpg" 
             alt="Sistema Shape de Verão" 
             fill 
             className="object-cover object-center md:object-contain"
             priority
           />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12 md:left-12 md:translate-x-0 z-10 hidden md:block">
           <CTAButton 
            id="cta-solution"
            text="QUERO O PROTOCOLO DE 8 SEMANAS"
            variant="secondary"
          />
        </div>
        
        {/* Mobile CTA */}
        <div className="bg-brand-black p-6 flex justify-center md:hidden">
          <CTAButton 
            id="cta-solution-mobile"
            text="QUERO O PROTOCOLO DE 8 SEMANAS"
            variant="secondary"
            className="w-full"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
