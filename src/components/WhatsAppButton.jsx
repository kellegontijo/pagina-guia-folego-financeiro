import { FaWhatsapp } from "react-icons/fa";
// import { useState } from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+553173177751";
  const message = "Quero saber mais sobre o Guia da Kelle!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // const [showBubble, setShowBubble] = useState(false);

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col-reverse items-end"
      // onMouseEnter={() => setShowBubble(true)}
      // onMouseLeave={() => setShowBubble(false)}
    >
      {/* {showBubble && (
        <div className="whatsapp-message-bubble visible mb-2 text-sm">
          Precisa de ajuda? Fale com nossa equipe agora!
        </div>
      )} */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-brand-green-hover transition-transform duration-300 transform hover:scale-110 whatsapp-button"
        aria-label="Tire Dúvidas no WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
