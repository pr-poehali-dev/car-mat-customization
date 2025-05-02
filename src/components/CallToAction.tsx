
import { Button } from "@/components/ui/button";
import SectionContainer from "./SectionContainer";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CallToAction = ({
  title = "Готовы сделать заказ?",
  description = "Оставьте свои контактные данные, и мы свяжемся с вами для уточнения деталей",
  buttonText = "Оставить заявку",
  onButtonClick = () => {},
}: CallToActionProps) => {
  return (
    <section className="py-16 bg-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-8">{description}</p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-900 hover:bg-gray-100"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
