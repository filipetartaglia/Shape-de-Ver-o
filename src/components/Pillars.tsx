import SectionWrapper from "./SectionWrapper";

export default function Pillars() {
  const pillars = [
    {
      num: "01",
      title: "PLANEJAMENTO",
      desc: "Você começa cada semana sabendo exatamente o que precisa fazer, eliminando a paralisia e a improvisação."
    },
    {
      num: "02",
      title: "TREINO",
      desc: "Estrutura objetiva para saber exatamente os exercícios, séries e cargas ao chegar na academia."
    },
    {
      num: "03",
      title: "ALIMENTAÇÃO",
      desc: "Orientações práticas para o dia a dia sem complicar sua rotina e sem necessidade de dietas restritivas."
    },
    {
      num: "04",
      title: "CONSISTÊNCIA",
      desc: "Estratégias mentais e protocolos para manter o ritmo mesmo nos dias cansativos e após refeições fora."
    },
    {
      num: "05",
      title: "ACOMPANHAMENTO",
      desc: "Indicadores claros para você acompanhar sua evolução, avaliar métricas e ajustar o plano com segurança."
    }
  ];

  return (
    <SectionWrapper bg="light">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl md:text-6xl text-brand-black">Os 5 Pilares do Método</h2>
        <p className="font-body text-neutral-600 mt-4 text-lg max-w-2xl mx-auto">
          Tudo o que você precisa para sair do ciclo de começar e parar reunido em uma estrutura lógica de execução.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {pillars.map((pillar) => (
          <div key={pillar.num} className="bg-white p-8 border border-neutral-200 hover:border-brand-green-deep transition-colors group rounded-xl flex flex-col justify-between">
            <div>
              <div className="font-headline text-brand-sand text-5xl mb-4 group-hover:text-brand-green-accent transition-colors">
                {pillar.num}
              </div>
              <h3 className="font-headline text-3xl text-brand-black mb-3">{pillar.title}</h3>
              <p className="font-body text-neutral-600 leading-relaxed text-sm md:text-base">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
