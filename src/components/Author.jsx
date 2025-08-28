import AuthorImg from "../assets/kelle-gontijo.jpg";
import { motion } from "framer-motion"; // Added import
import { FaArrowRight } from "react-icons/fa"; // Added import

const Author = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-20 px-6 md:px-12 gap-x-8 gap-y-8">
      <div className="w-auto flex justify-center mb-8">
        <img src={AuthorImg} alt="Kelle Gontijo" className="max-w-xs md:max-w-md shadow-xl border-2 border-brand-green" />
      </div>
      <div className="w-full md:w-2/3 text-center max-w-xl mx-auto">
        <h2 className="font-montserrat text-3xl font-bold text-brand-black mb-2">
          Quem é Kelle Gontijo?
        </h2>
        <p className="font-montserrat text-lg text-brand-gray mb-4">
          Mentora Financeira. Ex-Endividada. Sua Guia para a Liberdade.
        </p>
        <p className="font-montserrat text-base text-brand-gray mb-4">
          De uma vida confortável a R$200 mil em dívidas, perdendo o básico mesmo morando em uma 'casa de milhões'. Essa foi a jornada de Kelle Gontijo. Ela não só superou o caos financeiro, mas transformou sua experiência em um método que já ajudou centenas a reconquistar a dignidade e a liberdade.
        </p>
        <p className="font-montserrat text-base text-brand-gray mb-4">
          Kelle é a prova viva de que a riqueza não está no salário, mas no **método** e na **atitude**. Hoje, ela compartilha o caminho que a salvou, para que você também possa construir uma vida financeira próspera e com propósito.
        </p>
        <p className="font-montserrat text-lg text-brand-black italic mt-6">
          "A riqueza não tem nada a ver com dinheiro. Ela está na sua mente, nos seus comportamentos."
        </p>
        <motion.div
          className="self-center mt-8" // Added mt-8 for spacing
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <a href="#sales-box" onClick={() => scrollToSection('sales-box')} className="inline-flex items-center gap-x-3 bg-brand-dark-blue-alt text-white font-montserrat font-semibold py-3 px-8 text-lg rounded-lg hover:bg-brand-guide-blue transition-colors duration-300 shadow-lg md:py-7 md:px-14 md:text-2xl lg:py-6 lg:px-12 lg:text-xl">
            <span>Garanta Seu Guia + Diagnóstico</span>
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Author;
