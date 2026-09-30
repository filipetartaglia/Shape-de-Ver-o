import SectionWrapper from "./SectionWrapper";

export default function FAQ() {
  const faqs = [
    { q: "O que é o Shape de Verão?", a: "É um protocolo prático de 8 semanas projetado para organizar seu treino, alimentação e consistência em uma jornada estruturada." },
    { q: "Como recebo o material?", a: "O acesso é digital e imediato. Logo após a confirmação do pagamento, você receberá um email com os dados de acesso à plataforma." },
    { q: "É físico ou digital?", a: "100% digital. Você terá acesso aos materiais através do seu celular, tablet ou computador." },
    { q: "Posso acessar pelo celular?", a: "Sim, a plataforma e os materiais são totalmente otimizados para leitura e acompanhamento via smartphone." },
    { q: "Preciso de academia?", a: "O protocolo foi desenhado considerando o ambiente de academia para melhor estruturação dos treinos de hipertrofia." },
    { q: "É para iniciantes?", a: "Serve tanto para quem está voltando agora quanto para quem já treina mas não consegue manter a consistência e organização." },
    { q: "Preciso seguir tudo perfeitamente?", a: "Não. O foco do protocolo é consistência, não perfeição. O bônus de Fim de Semana foi criado justamente para lidar com desvios na rotina." },
    { q: "Quanto tempo dura?", a: "O protocolo é estruturado para uma jornada inicial de 8 semanas de execução." },
    { q: "O resultado é garantido?", a: "Não. O produto fornece estrutura, orientação e ferramentas para execução, mas resultados físicos variam de pessoa para pessoa conforme diversos fatores e, principalmente, a sua execução." },
    { q: "Posso começar imediatamente?", a: "Sim, após a confirmação do pagamento e liberação do acesso você já pode iniciar a Fase de Organização." },
    { q: "Como funciona a garantia?", a: "Você tem 7 dias a partir da data da compra para avaliar o material. Se não gostar, pode solicitar o reembolso integral diretamente na plataforma." }
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
