import { motion } from "framer-motion";
import GuiaImg from "../assets/guia-folego-financeiro.png";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const sentence = "GUIA PDF REVELA:".split("");
  const benefits = [
    "O Método: Plano claro para quitar e prosperar.",
    "A Verdade: Desvende as armadilhas do sistema.",
    "Sua Paz: Troque a ansiedade por controle.",
  ];

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="sales-box" className="bg-brand-green flex flex-col lg:flex-row items-center justify-center gap-x-12 min-h-screen px-6 py-12">
      <div className="lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0 order-last lg:order-none mt-6">
        <div className="flex flex-col gap-y-6">
          <motion.h1
            className="text-6xl font-black font-montserrat text-brand-dark-blue-alt leading-snug uppercase lg:text-5xl"
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
          >
            {sentence.map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-xl font-montserrat text-brand-dark-blue-tertiary mt-[-2]">
            Como sair da escravidão financeira, pagar suas dívidas pelo valor justo e conquistar a liberdade que você merece.
          </p>
          
          
          <p className="font-montserrat mb-2 text-4xl text-white">
            <span className="line-through">De R$29,90</span> por <span className="font-extrabold">R$9,90</span>
          </p>

          <div className="self-center lg:self-start">
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <a href="https://pay.kiwify.com.br/683GJan" className="inline-flex items-center gap-x-3 bg-brand-dark-blue-alt text-white font-montserrat font-semibold py-3 px-8 text-lg rounded-lg hover:bg-brand-guide-blue transition-colors duration-300 shadow-lg md:py-7 md:px-14 md:text-2xl lg:py-6 lg:px-12 lg:text-xl">
                <span>Garanta Seu Guia + Diagnóstico</span>
                <FaArrowRight />
              </a>
            </motion.div>
            <p className="mt-2 text-brand-gray text-center text-base">
              <span className="line-through">De R$29,90</span> por apenas <span>R$9,90</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-auto flex justify-center order-first lg:order-none">
        <motion.div
          animate={{ y: [0, -5, 0] }} // Subtle vertical float
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <img src={GuiaImg} alt="Capa do Guia Fôlego Financeiro" width="300" height="400" className="w-[300px] h-[400px] rounded-lg" fetchpriority="high" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;