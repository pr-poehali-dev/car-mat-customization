
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
}

/**
 * Универсальный контейнер для секций сайта
 */
const SectionContainer = ({ 
  children, 
  bgColor = "bg-white", 
  className = "" 
}: SectionContainerProps) => {
  return (
    <section className={`py-16 ${bgColor} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
