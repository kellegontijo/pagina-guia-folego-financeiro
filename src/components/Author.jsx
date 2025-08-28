import AuthorImg from "../assets/kelle-gontijo.webp";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Author = ({ scrollToSection }) => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-x-4 pl-12 pr-4">
        <div className="md:w-1/2 flex justify-center mb-8">
          <img src={AuthorImg} alt="Kelle Gontijo" width="316" height="398" className="w-full h-full object-cover max-w-xs md:max-w-sm lg:max-w-md shadow-xl border-2 border-brand-green" />
        </div>
        <div className="md:w-1/2 text-left">
          <h2 className="font-serif text-4xl font-bold text-brand-black mb-4">
            Quem é Kelle Gontijo?
          </h2>
          <p className="font-montserrat text-lg text-brand-gray mb-6">
            Mentora Financeira. Ex-Endividada. Sua Guia para a Liberdade.
          </p>
          <p className="font-montserrat text-base text-brand-gray mb-4">
            De R$200 mil em dívidas à liberdade, Kelle Gontijo transformou sua experiência em um método que já ajudou centenas.
          </p>
          <p className="font-montserrat text-base text-brand-gray mb-4">
            Ela prova que a riqueza está no <span className="font-bold">método</span> e na <span className="font-bold">atitude</span>, e compartilha o caminho para sua vida próspera.
          </p>
          <p className="font-montserrat text-lg text-brand-black italic mt-6">
            "A riqueza não tem nada a ver com dinheiro. Ela está na sua mente, nos seus comportamentos."
          </p>
          <motion.div
            className="self-start mt-8" // Adjusted for left alignment
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
        </div>
      </div>
    </section>
  );
};

export default Author;
