
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { MaterialFeature, MaterialType } from "@/types/material";
import { useState } from "react";

const materials: MaterialType[] = [
  {
    id: "carpet",
    name: "Автоковролин",
    description: "Высококачественный материал с богатой текстурой и отличными звукоизоляционными свойствами",
    image: "https://images.unsplash.com/photo-1532578498858-e21a39e6a177?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      { text: "Стандарт - практичный, износостойкий и доступный вариант" },
      { text: "Комфорт - мягкий, приятный на ощупь с повышенной плотностью" },
      { text: "Премиум - эксклюзивная текстура с максимальной звукоизоляцией" }
    ]
  },
  {
    id: "eva",
    name: "ЭВА материал",
    description: "Инновационный материал с высокой эластичностью, влагостойкостью и легкостью в уходе",
    image: "https://images.unsplash.com/photo-1617465780074-4ac79b6dad59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      { text: "Влагостойкость и непромокаемость - защита от любых жидкостей" },
      { text: "Экологичность - полное отсутствие запаха и вредных веществ" },
      { text: "Устойчивость к истиранию, деформации и выгоранию на солнце" }
    ]
  }
];

const Feature = ({ text }: MaterialFeature) => (
  <li className="flex items-start mb-4">
    <div className="mr-3 pt-1">
      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
        <Icon name="Check" className="w-3 h-3 text-green-600" />
      </div>
    </div>
    <span className="text-gray-700">{text}</span>
  </li>
);

const MaterialCard = ({ name, description, image, features, id }: MaterialType) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="material-card group bg-white rounded-2xl shadow-material overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`object-cover w-full h-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-${isHovered ? '100' : '70'} transition-opacity duration-300`}></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <span className="uppercase tracking-wider text-xs font-semibold bg-primary-500/80 text-white py-1 px-2 rounded-full backdrop-blur-sm">
            {id === 'carpet' ? 'Классический выбор' : 'Инновационный материал'}
          </span>
          <h3 className="text-2xl font-bold mt-2 drop-shadow-md">{name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-5 line-clamp-2">{description}</p>
        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
          <Icon name="ListChecks" className="w-5 h-5 mr-2 text-primary-500" />
          Особенности материала:
        </h4>
        <ul className="mb-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </ul>
        
        <div className="flex gap-3">
          <Button 
            variant="default" 
            className="flex-1 bg-primary-600 hover:bg-primary-700 rounded-xl"
          >
            Заказать
          </Button>
          
          <Button 
            variant="outline" 
            className="flex-1 border-primary-200 text-primary-700 hover:bg-primary-50 rounded-xl"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

const Materials = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="materials">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-accent to-transparent"></div>
      <div className="absolute -top-32 right-10 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-32 w-64 h-64 bg-secondary-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-lg bg-secondary-100 text-secondary-700 font-medium text-sm mb-4">
            Премиум материалы
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Качество, которое видно
          </h2>
          <p className="text-lg text-gray-600">
            Мы используем только лучшие материалы, которые обеспечивают исключительную долговечность и привлекательный внешний вид
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {materials.map((material) => (
            <MaterialCard key={material.id} {...material} />
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl overflow-hidden shadow-intense">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Цветовая гамма на любой вкус
              </h3>
              <p className="text-white/80 mb-6">
                Широкий выбор цветов и оттенков позволяет подобрать коврики под интерьер вашего автомобиля
              </p>
              <Button className="bg-white text-primary-700 hover:bg-gray-100 rounded-xl px-6">
                Смотреть каталог цветов
              </Button>
            </div>
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Каталог цветов" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
