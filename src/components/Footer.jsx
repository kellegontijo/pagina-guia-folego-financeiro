import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brand-light-gray py-8">
      <div className="container mx-auto text-center text-brand-gray font-montserrat px-6">
        <h3 className="text-2xl font-bold text-brand-green mb-4">Kelle Gontijo</h3>
        
        <div className="text-sm flex justify-center mb-4">
          <a href="https://kellegontijo.com/sobre" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black border-l border-brand-gray px-2 first:border-l-0 leading-tight">Sobre</a>
          <a href="https://kellegontijo.com/politicas-de-privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black border-l border-brand-gray px-2 first:border-l-0 leading-tight">Privacidade</a>
          <a href="https://kellegontijo.com/termos-de-uso" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black border-l border-brand-gray px-2 first:border-l-0 leading-tight">Termos</a>
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Kelle Gontijo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
