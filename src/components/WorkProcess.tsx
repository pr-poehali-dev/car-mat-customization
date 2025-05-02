
import Icon from "@/components/ui/icon";
import { WorkStep } from "@/types/workProcess";
import { useEffect, useRef, useState } from "react";

const workSteps: WorkStep[] = [
  {
    step: 1,
    title: "Оставьте заявку",
    description: "Оформите заказ на сайте или позвоните нам по телефону",
    icon: "FileEdit"
  },
  {
    step: 2,
    title: "Выбор материала",
    description: "Подберите тип и цвет материала для ваших ковриков",
    icon: "Palette"
  },
  {
    step: 3,
    title: "Производство",
    description: "Мы изготовим коврики точно по лекалам вашего автомобиля",
    icon: "Scissors"
  },
  {
    step: 4,
    title: "Доставка",
    description: "Доставим готовые коврики или вы можете забрать их сами",
    icon: "Truck"
  }
];

interface StepCardProps extends WorkStep {
  isActive: boolean;
}

const StepCard = ({ step, title, description, icon, isActive }: StepCardProps) => {
  return (
    <div className={`process-step relative z-10 ${isActive ? 'scale-105' : 'scale-100'} transition-transform duration-500`}>
      <div className={`
        rounded-2xl p-6 text-center transition-all duration-500 
        ${isActive 
          ? 'bg-gradient-to-b from-primary-500 to-primary-700 shadow-intense text-white' 
          : 'bg-white shadow-material text-gray-800'
        }
      `}>
        <div className={`
          w-16 h-16 mx-auto flex items-center justify-center rounded-full text-2xl font-bold mb-4
          ${isActive 
            ? 'bg-white text-primary-700' 
            : 'bg-primary-50 text-primary-600'
          }
        `}>
          <Icon name={icon} className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={isActive ? 'text-white/80' : 'text-gray-600'}>{description}</p>
        
        <div className={`
          absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45
          ${isActive ? 'bg-primary-700' : 'bg-white'}
          ${step === 4 ? 'hidden' : 'hidden md:block'}
        `}></div>
      </div>
      
      <div className="absolute top-1/2 left-[calc(100%+1rem)] right-0 h-0.5 bg-gray-200 hidden md:block">
        {step < 4 && (
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-bounce-slow">
            <div className="w-4 h-4 rounded-full bg-primary-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden" id="process">
      {/* Декоративные элементы */}
      <div className="absolute -bottom-64 -right-64 w-[500px] h-[500px] rounded-full bg-primary-50 blur-3xl"></div>
      <div className="absolute -top-64 -left-64 w-[300px] h-[300px] rounded-full bg-secondary-50 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-lg bg-gold-100 text-gold-800 font-medium text-sm mb-4">
            Простой процесс
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Как мы работаем
          </h2>
          <p className="text-lg text-gray-600">
            От заявки до доставки готовых ковриков - всего 4 простых шага для идеального результата
          </p>
        </div>
        
        <div className="relative">
          {/* Линия процесса для мобильных устройств */}
          <div className="absolute top-0 bottom-0 left-[32px] w-0.5 bg-gray-200 md:hidden"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {workSteps.map((step) => (
              <StepCard 
                key={step.step} 
                {...step} 
                isActive={activeStep === step.step}
              />
            ))}
          </div>
        </div>
        
        {/* Дополнительная информация */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 shadow-material">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Хотите увидеть примеры наших работ?</h3>
              <p className="text-gray-600 mb-6">
                В нашей галерее вы можете ознакомиться с реальными фотографиями готовых ковриков для различных моделей автомобилей
              </p>
              <div className="flex space-x-3">
                <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-xl transition-colors">
                  Смотреть галерею
                </button>
                <button className="border border-gray-300 hover:border-primary-500 hover:text-primary-700 py-2 px-6 rounded-xl transition-colors">
                  Отзывы клиентов
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Пример 1" className="rounded-lg shadow-sm hover:shadow-md transition-shadow h-40 object-cover w-full" />
              <img src="https://images.unsplash.com/photo-1562101802-36f1e347e06f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Пример 2" className="rounded-lg shadow-sm hover:shadow-md transition-shadow h-40 object-cover w-full" />
              <img src="https://images.unsplash.com/photo-1550355291-bbee04a92d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Пример 3" className="rounded-lg shadow-sm hover:shadow-md transition-shadow h-40 object-cover w-full" />
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Пример 4" className="rounded-lg shadow-sm hover:shadow-md transition-shadow h-40 object-cover w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
