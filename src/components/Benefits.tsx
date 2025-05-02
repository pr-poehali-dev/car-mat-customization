
import Icon from "@/components/ui/icon";
import { BenefitItem } from "@/types/benefit";
import SectionContainer from "./SectionContainer";

const benefitsList: BenefitItem[] = [
  {
    icon: "CheckCircle",
    title: "Точное соответствие",
    description: "Индивидуальные лекала для каждой модели автомобиля"
  },
  {
    icon: "Timer",
    title: "Быстрое изготовление",
    description: "Срок производства от 1 до 3 дней"
  },
  {
    icon: "Star",
    title: "Качественные материалы",
    description: "Только проверенные материалы премиум класса"
  }
];

const BenefitCard = ({ icon, title, description }: BenefitItem) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
      <Icon name={icon} className="w-8 h-8 text-indigo-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits = () => {
  return (
    <SectionContainer bgColor="bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefitsList.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Benefits;
