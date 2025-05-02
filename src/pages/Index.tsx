
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import WorkProcess from "@/components/WorkProcess";
import { useEffect, useState } from "react";

/**
 * Главная страница сайта ателье автомобильных ковриков
 */
const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  /**
   * Обработчик нажатия на кнопку заявки
   */
  const handleOrderClick = () => {
    // Логика оформления заказа будет добавлена позже
    console.log("Order button clicked");
  };

  // Отслеживание прогресса прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Индикатор прогресса прокрутки */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Герой-секция */}
      <Hero />

      {/* Преимущества */}
      <Benefits />

      {/* Материалы */}
      <Materials />

      {/* Процесс изготовления */}
      <WorkProcess />

      {/* Форма обратной связи */}
      <CallToAction 
        onButtonClick={handleOrderClick}
      />

      {/* Футер */}
      <Footer />

      {/* Кнопка прокрутки наверх */}
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
