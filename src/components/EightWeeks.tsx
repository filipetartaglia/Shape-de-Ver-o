import SectionWrapper from "./SectionWrapper";

export default function EightWeeks() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="font-headline text-4xl md:text-5xl text-brand-black leading-tight">
          A TRANSFORMAÇÃO CONCRETA NAS SUAS PRÓXIMAS 8 SEMANAS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {/* Card 1: Treino */}
          <div className="bg-white border border-neutral-200 p-8 rounded-xl shadow-sm hover:border-brand-green-deep transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-green-deep/10 text-brand-green-deep flex items-center justify-center font-headline text-2xl mb-4">
                01
              </div>
              <h4 className="font-headline text-2xl text-brand-black mb-3">SABER EXATAMENTE O QUE TREINAR</h4>
              <p className="font-body text-neutral-600 leading-relaxed">
                Você chega na academia sabendo qual exercício fazer, o número de séries e a intensidade certa para cada sessão. Sem hesitação, sem perder tempo e sem inventar treino na hora.
              </p>
            </div>
          </div>

          {/* Card 2: Alimentação */}
          <div className="bg-white border border-neutral-200 p-8 rounded-xl shadow-sm hover:border-brand-green-deep transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-green-deep/10 text-brand-green-deep flex items-center justify-center font-headline text-2xl mb-4">
                02
              </div>
              <h4 className="font-headline text-2xl text-brand-black mb-3">ALIMENTAÇÃO PRÁTICA E PREVISÍVEL</h4>
              <p className="font-body text-neutral-600 leading-relaxed">
                Orientações práticas para organizar suas refeições com alimentos comuns e acessíveis, reduzindo o improviso diário sem exigir dietas extremas ou cálculos intermináveis.
              </p>
            </div>
          </div>

          {/* Card 3: Fim de semana */}
          <div className="bg-white border border-neutral-200 p-8 rounded-xl shadow-sm hover:border-brand-green-deep transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-green-deep/10 text-brand-green-deep flex items-center justify-center font-headline text-2xl mb-4">
                03
              </div>
              <h4 className="font-headline text-2xl text-brand-black mb-3">CONTROLE DE REFEIÇÕES FORA DA ROTINA</h4>
              <p className="font-body text-neutral-600 leading-relaxed">
                Saber exatamente como se comportar em churrascos, jantares e finais de semana para que uma refeição livre não comprometa o esforço construído ao longo dos dias úteis.
              </p>
            </div>
          </div>

          {/* Card 4: Indicadores */}
          <div className="bg-white border border-neutral-200 p-8 rounded-xl shadow-sm hover:border-brand-green-deep transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-green-deep/10 text-brand-green-deep flex items-center justify-center font-headline text-2xl mb-4">
                04
              </div>
              <h4 className="font-headline text-2xl text-brand-black mb-3">ACOMPANHAMENTO VISÍVEL DA EVOLUÇÃO</h4>
              <p className="font-body text-neutral-600 leading-relaxed">
                Registrar métricas simples e fotos semanais para enxergar seu progresso com clareza, saber se a estratégia está funcionando e ajustar o plano antes de desanimar.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight box */}
        <div className="bg-brand-black text-brand-offwhite border border-brand-green-deep p-8 md:p-10 rounded-2xl shadow-xl text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="font-headline text-9xl">8</span>
          </div>
          <h4 className="font-headline text-3xl text-brand-green-accent mb-3 relative z-10">O RESULTADO NO ESPELHO</h4>
          <p className="font-body text-base md:text-lg text-neutral-300 relative z-10 max-w-2xl leading-relaxed">
            O objetivo não é apenas cumprir checklists, é <strong>olhar no espelho e gostar do que você está vendo</strong>. Tirar a camisa sem insegurança e chegar ao verão com a certeza de que construiu uma rotina sólida e executável.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
