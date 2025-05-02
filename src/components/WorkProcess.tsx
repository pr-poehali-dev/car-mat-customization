
import { WorkStep } from "@/types/workProcess";
import SectionContainer from "./SectionContainer";

const workSteps: WorkStep[] = [
  {
    step: 1,
    title: "Заявка",
    description: "Оставьте заявку или позвоните нам"
  },
  {
    step: 2,
    title: "Выбор материала",
    description: "Выберите тип и цвет материала"
  },
  {
    step: 3,
    title: "Изготовление",
    description: "Мы изготовим коврики по лекалам вашего авто"
  },
  {
    step: 4,
    title: "Доставка",
    description: "Доставим готовые коврики или вы можете забрать их сами"
  }
];

const StepCard = ({ step, title, description }: WorkStep) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WorkProcess = () => {
  return (
    <SectionContainer bgColor="bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {workSteps.map((step) => (
          <StepCard key={step.step} {...step} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default WorkProcess;
