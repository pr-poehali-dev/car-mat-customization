
import Icon from "@/components/ui/icon";
import { BenefitItem } from "@/types/benefit";
import { useEffect, useRef, useState } from "react";

const benefitsList: BenefitItem[] = [
  {
    icon: "Shield",
    title: "Точное соответствие",
    description: "Индивидуальные лекала для каждой модели автомобиля, обеспечивающие идеальную посадку"
  },
  {
    icon: "Clock",
    title: "Быстрое изготовление",
    description: "Срок производства от 1 до 3 дней, быстрая доставка по всей России"
  },
  {
    icon: "Award",
    title: "Премиум материалы",
    description: "Только проверенные материалы высочайшего качества с превосходными характеристиками"
  }
];

interface BenefitCardProps extends BenefitItem {
  index: number;
}

const BenefitCard = ({ icon, title, description, index }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`relative bg-white rounded-2xl p-8 shadow-material hover:shadow-material-lg transition-all duration-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute -top-6 left-8 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-material-lg">
        <Icon name={icon} className="w-6 h-6" />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="absolute top-4 right-4 text-primary-100">
        <span className="text-7xl font-bold opacity-10">0{index + 1}</span>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden" id="benefits">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-primary-100/30 backdrop-blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] rounded-full bg-secondary-100/30 backdrop-blur-3xl"></div>
      
      <div className="container relative mx-auto px-6 z-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-lg bg-primary-100 text-primary-700 font-medium text-sm mb-4">
            Наши преимущества
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Почему выбирают именно нас
          </h2>
          <p className="text-lg text-gray-600">
            Мы создаем не просто коврики, а продукты премиум-класса, которые прослужат вам многие годы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefitsList.map((benefit, index) => (
            <BenefitCard key={index} index={index} {...benefit} />
          ))}
        </div>
        
        <div className="mt-16 p-6 md:p-8 bg-white rounded-2xl shadow-material">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-700">Клиентов рекомендуют нас</div>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-700">Выполненных заказов</div>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-700">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
