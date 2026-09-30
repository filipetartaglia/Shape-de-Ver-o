import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

export default function SocialProof() {
  return (
    <SectionWrapper bg="dark">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-brand-offwhite leading-tight mb-4">
            QUEM JÁ ESTÁ EXECUTANDO O <span className="text-brand-green-accent">SISTEMA</span>
          </h2>
          <p className="font-body text-neutral-400 text-lg">
            Resultados de quem parou de buscar dicas soltas e começou a executar o plano.
          </p>
          <div className="inline-block mt-4 bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold">
            Placeholder Interno - Substituir por reais
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-brand-green-accent">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="font-body text-neutral-300 italic text-sm leading-relaxed">
                &quot;Eu já tinha tentado de tudo, mas sempre parava na terceira semana. Ter a estrutura de 8 semanas e o guia de refeições práticas mudou completamente meu jogo. Pela primeira vez não furei o projeto no fim de semana.&quot;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-800 shrink-0">
                <Image src="/images/testimonial-1.jpg" alt="João Silva" fill className="object-cover" />
              </div>
              <div>
                <p className="font-body font-bold text-brand-offwhite text-sm">João Silva</p>
                <p className="font-body text-xs text-neutral-500">Semana 4 Concluída</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-brand-green-accent">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="font-body text-neutral-300 italic text-sm leading-relaxed">
                &quot;O que mais gostei foi a clareza. Você não precisa pensar no que fazer quando chega na academia, está tudo no manual. As estratégias para lidar com os dias de preguiça valem o investimento sozinhas.&quot;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-800 shrink-0">
                <Image src="/images/testimonial-2.jpg" alt="Lucas M." fill className="object-cover" />
              </div>
              <div>
                <p className="font-body font-bold text-brand-offwhite text-sm">Lucas M.</p>
                <p className="font-body text-xs text-neutral-500">Semana 6 Concluída</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-brand-green-accent">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="font-body text-neutral-300 italic text-sm leading-relaxed">
                &quot;Eu achava que ia ser mais um PDF genérico. Me surpreendi. É realmente um sistema. As últimas 3 semanas de treino intenso deram um pump que eu não via há anos no meu corpo. Funciona.&quot;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-800 shrink-0">
                <Image src="/images/testimonial-3.jpg" alt="Pedro Henrique" fill className="object-cover" />
              </div>
              <div>
                <p className="font-body font-bold text-brand-offwhite text-sm">Pedro Henrique</p>
                <p className="font-body text-xs text-neutral-500">Semana 8 Concluída</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
