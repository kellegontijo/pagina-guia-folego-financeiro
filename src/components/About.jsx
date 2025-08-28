import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="container mx-auto py-20 px-4 md:px-6 text-center">
      <h3 className="font-montserrat text-2xl text-brand-gray mb-2">
        Por Que o Guia da Kelle é Diferente?
      </h3>
      <h2 className="font-montserrat text-4xl font-bold text-brand-black mb-6">
        Uma Metodologia Testada para Pessoas Reais
      </h2>
      <p className="max-w-3xl mx-auto font-montserrat text-lg text-brand-gray mb-4">
        Você se sente preso em um ciclo de dívidas, onde o dinheiro nunca é suficiente e a ansiedade toma conta? Milhões de brasileiros vivem a "escravidão financeira moderna", uma prisão invisível de boletos e juros que consomem sua renda antes mesmo de você aproveitá-la.
      </p>
      <p className="max-w-3xl mx-auto font-montserrat text-lg text-brand-gray mb-4">
        Essa não é apenas uma questão de "falta de dinheiro", mas de um sistema desenhado para te manter dependente. Seu salário escorre pelos dedos, imprevistos viram tragédias e a sensação de impotência cresce. Você está cansado de perder noites de sono e de sentir a culpa e a vergonha?
      </p>
      <p className="max-w-3xl mx-auto font-montserrat text-lg text-brand-gray mb-4">
        Existe uma saída. O Guia Fôlego Financeiro da Kelle Gontijo não é mais uma fórmula mágica, mas um método comprovado que te dá clareza, estratégia e ação. Aprenda a identificar as armadilhas, construir sua reserva e negociar suas dívidas com inteligência, recuperando seu fôlego financeiro e sua paz.
      </p>
      <p className="max-w-3xl mx-auto font-montserrat text-lg text-brand-gray mb-8">
        Este é o seu ponto de virada. Com o conhecimento certo, você rompe o ciclo, assume o controle e conquista a liberdade financeira que você merece.
      </p>
      <motion.div
        className="self-center" // Removed lg:self-start to keep it centered
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <a href="#sales-box" className="inline-flex items-center gap-x-3 bg-brand-green text-white font-montserrat font-semibold py-3 px-8 text-lg rounded-lg hover:bg-brand-guide-blue transition-colors duration-300 shadow-lg md:py-7 md:px-14 md:text-2xl lg:py-6 lg:px-12 lg:text-xl">
          <span>Garanta Seu Guia + Diagnóstico</span>
          <FaArrowRight />
        </a>
      </motion.div>
    </section>
  );
};

export default About;
