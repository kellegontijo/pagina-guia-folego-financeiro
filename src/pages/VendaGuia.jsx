import Hero from "../components/Hero";
import BenefitsBar from "../components/BenefitsBar";
import About from "../components/About";
import SalesBox from "../components/SalesBox";
import Author from "../components/Author";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ProgressBar from "../components/ProgressBar"; // Added import

const VendaGuia = () => {
  return (
    <div className="font-montserrat bg-white">
      <ProgressBar /> {/* Added ProgressBar */}
      <Hero />
      <BenefitsBar />
      <About />
      <SalesBox />
      <Author />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default VendaGuia;
