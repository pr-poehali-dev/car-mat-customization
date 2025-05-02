
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import WorkProcess from "@/components/WorkProcess";

/**
 * Главная страница сайта ателье автомобильных ковриков
 */
const Index = () => {
  /**
   * Обработчик нажатия на кнопку заявки
   */
  const handleOrderClick = () => {
    // Логика оформления заказа будет добавлена позже
    console.log("Order button clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
        title="Готовы сделать заказ?"
        description="Оставьте свои контактные данные, и мы свяжемся с вами для уточнения деталей"
        buttonText="Оставить заявку"
        onButtonClick={handleOrderClick}
      />

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;
