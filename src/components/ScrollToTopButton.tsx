
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Показывать кнопку только при прокрутке вниз
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Функция прокрутки наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary-600 
        text-white shadow-lg flex items-center justify-center 
        transition-all duration-300 hover:bg-primary-700 hover:transform hover:scale-110
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Прокрутить наверх"
    >
      <Icon name="ArrowUp" className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
