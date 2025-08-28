import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react"; // Added imports

const WhatsAppButton = () => {
  const phoneNumber = "+5511999999999";
  const message = "Quero saber mais sobre o Guia da Kelle!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [showScrollMessage, setShowScrollMessage] = useState(false);
  const [showButton, setShowButton] = useState(true); // Added state

  useEffect(() => {
    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / totalHeight) * 100;
        setScrollProgress(progress);

        if (progress > 50) { // Show message after 50% scroll
          setShowScrollMessage(true);
        } else {
          setShowScrollMessage(false);
        }

        if (progress > 90) { // Hide button after 90% scroll
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && ( // Conditionally render the entire button div
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end hidden lg:block">
        {showScrollMessage && (
          <div className="bg-white text-brand-gray text-sm px-4 py-2 rounded-lg mb-2 shadow-md animate-fade-in">
            Tire Dúvidas no WhatsApp
          </div>
        )}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-brand-green-hover transition-transform duration-300 transform hover:scale-110" // Changed shadow-lg to shadow-xl
          aria-label="Tire Dúvidas no WhatsApp"
        >
          <FaWhatsapp size={32} />
        </a>
      </div>
    )
  );
};

export default WhatsAppButton;
