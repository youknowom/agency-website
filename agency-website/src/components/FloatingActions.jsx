import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";

function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition-all duration-300 pointer-events-auto hover:bg-orange-600 hover:-translate-y-0.5 ${
          showScrollTop 
            ? "translate-y-0 opacity-100 scale-100" 
            : "translate-y-10 opacity-0 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="stroke-[3]" />
      </button>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/91123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}

export default FloatingActions;
