
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { MaterialFeature, MaterialType } from "@/types/material";
import SectionContainer from "./SectionContainer";

const materials: MaterialType[] = [
  {
    id: "carpet",
    name: "Автоковролин",
    description: "Представлен в трех вариантах:",
    image: "https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    features: [
      { text: "Стандарт - практичный и доступный вариант" },
      { text: "Комфорт - мягкий и приятный на ощупь" },
      { text: "Премиум - износостойкий с улучшенной звукоизоляцией" }
    ]
  },
  {
    id: "eva",
    name: "ЭВА материал",
    description: "Инновационный материал с уникальными свойствами:",
    image: "https://images.unsplash.com/photo-1600689828143-7d34f3942ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    features: [
      { text: "Влагостойкость и непромокаемость" },
      { text: "Экологичность и отсутствие запаха" },
      { text: "Устойчивость к истиранию и деформации" }
    ]
  }
];

const Feature = ({ text }: MaterialFeature) => (
  <li className="flex items-center">
    <Icon name="CheckCircle2" className="w-5 h-5 text-green-500 mr-2" />
    <span>{text}</span>
  </li>
);

const MaterialCard = ({ name, description, image, features }: MaterialType) => (
  <Card className="overflow-hidden hover-scale">
    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
      <img 
        src={image} 
        alt={name} 
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </ul>
      <Button variant="outline" className="w-full">Подробнее</Button>
    </div>
  </Card>
);

const Materials = () => {
  return (
    <SectionContainer bgColor="bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Материалы</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Мы используем только качественные материалы, которые обеспечивают долговечность и привлекательный вид ковриков
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {materials.map((material) => (
          <MaterialCard key={material.id} {...material} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Materials;
