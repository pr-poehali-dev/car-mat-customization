
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CallToAction = ({
  title = "Готовы заказать идеальные коврики?",
  description = "Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время",
  buttonText = "Оставить заявку",
  onButtonClick = () => {},
}: CallToActionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-700 z-0"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full border-[20px] border-white/20"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full border-[15px] border-white/20"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619253970082-dda18ce1a7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-xl text-white/80 mb-6 md:mb-0">{description}</p>
                
                <div className="hidden md:flex items-center mt-8 space-x-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Icon name="Clock" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Время изготовления</p>
                      <p className="font-semibold">от 1 до 3 дней</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Icon name="CreditCard" className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Удобная оплата</p>
                      <p className="font-semibold">Наличные / Карта</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Оставить заявку</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" 
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" 
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${
                      isHovered ? 'translate-y-[-2px]' : ''
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={onButtonClick}
                  >
                    {buttonText}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
