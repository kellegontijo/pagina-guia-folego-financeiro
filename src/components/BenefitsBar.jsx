const BenefitsBar = () => {
  const benefits = [
    {
      number: 1,
      text: "Desvende o Jogo: Entenda por que o dinheiro some e como o sistema te prende.",
    },
    {
      number: 2,
      text: "Seu Plano de Ação: Receba o método prático para sair das dívidas e construir sua reserva.",
    },
    {
      number: 3,
      text: "Liberdade Financeira: Conquiste paz, controle e um diagnóstico gratuito com a Kelle.",
    },
  ];

  return (
    <section className="bg-brand-dark-blue py-12 px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {benefits.map((benefit) => (
          <div key={benefit.number} className="flex flex-col items-center">
            <div className="bg-brand-green text-white w-10 h-10 flex items-center justify-center rounded-full font-bold font-montserrat text-xl mb-4 shadow-md">
              {benefit.number}
            </div>
            <p className="font-montserrat text-white text-base md:text-lg">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsBar;
