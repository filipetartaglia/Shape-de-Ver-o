import SectionWrapper from "./SectionWrapper";

export default function FAQ() {
  const faqs = [
    { q: "O que é o Shape de Verão?", a: "É um sistema de execução prática de 8 semanas projetado para organizar seu treino, alimentação e consistência em uma jornada única." },
    { q: "Como recebo o material?", a: "O acesso é digital e imediato. Logo após a confirmação do pagamento, você receberá um email com os dados de acesso à plataforma." },
    { q: "Preciso ter uma dieta perfeita?", a: "Não. O objetivo do Shape de Verão é justamente transformar alimentação e treino em algo mais previsível e executável dentro da sua rotina, sem perfeccionismo." },
    { q: "Preciso comprar suplementos?", a: "Não é obrigatório. Suplementos podem ser úteis para praticidade, mas o protocolo foca na base do que realmente funciona: organização, consistência alimentar e treino bem feito." },
    { q: "Preciso fazer uma dieta específica?", a: "Não impomos restrições malucas. O Guia de Refeições Práticas fornece uma estrutura para você comer bem e de forma alinhada ao objetivo, usando alimentos que já existem na sua casa." },
    { q: "Posso adaptar os treinos?", a: "Sim. A estrutura de treinos é versátil. Se a sua academia não tiver alguma máquina específica, você entenderá o princípio para substituir o exercício facilmente." },
    { q: "O protocolo serve para quem está voltando depois de parar?", a: "Com certeza. Esse é o melhor cenário. O protocolo tira você da inércia com clareza total, evitando que você comece e pare de novo na primeira semana." },
    { q: "E se eu perder alguns dias ou furar a rotina?", a: "Você não precisa recomeçar do zero. O protocolo foi pensado para priorizar consistência e retomada, não perfeição." },
    { q: "É físico ou digital?", a: "100% digital. Você terá acesso aos materiais através do seu celular, tablet ou computador." },
    { q: "Preciso de academia?", a: "O protocolo foi desenhado considerando o ambiente de academia para melhor estruturação dos treinos de hipertrofia e definição." },
    { q: "Quanto tempo dura?", a: "O sistema organiza suas próximas 8 semanas de execução contínua." },
    { q: "O resultado é garantido?", a: "Não. O produto fornece a estrutura perfeita, orientação e ferramentas de controle. Mas o resultado físico depende de diversos fatores e, principalmente, da sua capacidade de executar o plano." },
    { q: "Posso começar imediatamente?", a: "Sim. Após a confirmação do pagamento você já recebe o acesso e pode iniciar a Fase 1: Planejar." }
  ];

  return (
    <SectionWrapper bg="light">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline text-5xl text-brand-black text-center mb-12">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white border border-neutral-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="font-body text-lg font-bold text-neutral-800 p-6 cursor-pointer flex justify-between items-center outline-none">
                {faq.q}
                <span className="text-brand-green-deep text-2xl group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-6 pb-6 pt-0 font-body text-neutral-600">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
