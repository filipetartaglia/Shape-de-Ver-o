import SectionWrapper from "./SectionWrapper";

export default function Pillars() {
  const pillars = [
    {
      num: "01",
      title: "TREINO",
      desc: "Estrutura clara para você saber exatamente o que executar quando chegar na academia. Sem improviso."
    },
    {
      num: "02",
      title: "ALIMENTAÇÃO",
      desc: "Orientações e organização prática para a rotina alimentar, sem precisar de marmitas complexas."
    },
    {
      num: "03",
      title: "CONSISTÊNCIA",
      desc: "Estratégias mentais e práticas para continuar executando o plano mesmo quando a motivação natural diminui."
    },
    {
      num: "04",
      title: "ACOMPANHAMENTO",
      desc: "Ferramentas simples para observar a sua evolução e ajustar a execução antes que o projeto trave."
    }
  ];

  return (
    <SectionWrapper bg="light">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl md:text-6xl text-brand-black">Os 4 Pilares da Execução</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.num} className="bg-white p-8 border border-neutral-200 hover:border-brand-green-deep transition-colors group rounded-xl">
            <div className="font-headline text-brand-sand text-5xl mb-4 group-hover:text-brand-green-accent transition-colors">
              {pillar.num}
            </div>
            <h3 className="font-headline text-3xl text-brand-black mb-3">{pillar.title}</h3>
            <p className="font-body text-neutral-600 leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
