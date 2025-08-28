import Hero from "../components/Hero";
import BenefitsBar from "../components/BenefitsBar";
import About from "../components/About";
import SalesBox from "../components/SalesBox";
import Author from "../components/Author";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ProgressBar from "../components/ProgressBar"; // Added import

const VendaGuia = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const startPosition = window.pageYOffset;
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 2500; // milliseconds, adjust for desired speed

      let startTime = null;

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div className="font-montserrat bg-white">
      <ProgressBar /> {/* Added ProgressBar */}
      <Hero scrollToSection={scrollToSection} />
      <BenefitsBar />
      <About scrollToSection={scrollToSection} />
      <SalesBox />
      <Author scrollToSection={scrollToSection} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default VendaGuia;
