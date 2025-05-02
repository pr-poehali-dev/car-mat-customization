
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Фоновый градиент и изображение */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-secondary-900/90 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600418370130-2d65fe7dadfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          filter: "blur(0.5px)"
        }}
      />
      
      {/* Декоративный элемент */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] rounded-full border-[50px] border-white/10"></div>
        <div className="absolute top-[30%] -left-[200px] w-[500px] h-[500px] rounded-full border-[30px] border-white/10"></div>
      </div>
      
      {/* Контент */}
      <div className="container relative mx-auto px-6 py-20 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-2 animate-fade-in">
              <span className="text-white/90 font-medium flex items-center">
                <Icon name="Award" className="w-4 h-4 mr-2" /> Премиум качество
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-delay-1">
              Идеальные <span className="text-gold-300">автомобильные коврики</span> для вашего автомобиля
            </h1>
            
            <p className="text-xl text-white/80 max-w-lg animate-fade-in-delay-2">
              Индивидуальный пошив ковриков точно по лекалам вашего автомобиля из материалов высочайшего качества
            </p>
            
            <div className="flex flex-wrap gap-5 animate-fade-in-delay-3">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-medium rounded-full px-8 shadow-gold border-none">
                Оформить заказ
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-full px-8 backdrop-blur-sm">
                <Icon name="Play" className="w-4 h-4 mr-2" /> Смотреть видео
              </Button>
            </div>
            
            <div className="flex items-center gap-5 text-white/70 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-300 flex items-center justify-center border-2 border-primary-900">
                  <Icon name="ThumbsUp" className="w-5 h-5 text-primary-900" />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-300 flex items-center justify-center border-2 border-primary-900">
                  <Icon name="Star" className="w-5 h-5 text-primary-900" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gold-300 flex items-center justify-center border-2 border-primary-900">
                  <Icon name="Heart" className="w-5 h-5 text-primary-900" />
                </div>
              </div>
              <span className="text-sm">Более 2,000+ довольных клиентов</span>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent z-10 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1573862809581-77908aa3ead3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Автомобильные коврики премиум класса" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-intense"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-material-lg z-20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center text-white">
                  <Icon name="ShieldCheck" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Гарантия качества</h3>
                  <p className="text-sm text-gray-600">2 года на все изделия</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Волна внизу */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100C0,79.91,101.77,51.11,219.51,34.74,316.41,21.08,384.5,63.82,451.17,81.36,509.33,96.75,563.75,92.44,621.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
