
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}
      />
      
      <div className="container relative mx-auto px-6 py-16 md:py-24 z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Автомобильные коврики на заказ
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Индивидуальный пошив ковриков для вашего автомобиля из высококачественных материалов
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Оформить заказ
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
