
import { LucideIcon, LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense, lazy } from "react";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports | string;
  fallback?: keyof typeof dynamicIconImports;
}

/**
 * Lazy-loaded icon component that dynamically imports Lucide icons
 */
const Icon: React.FC<IconProps> = ({ name, fallback = "CircleAlert", ...props }) => {
  let iconName = name as keyof typeof dynamicIconImports;
  
  // Check if the icon name exists in dynamicIconImports
  const isValidIcon = Object.keys(dynamicIconImports).includes(iconName);
  
  // Use fallback if the requested icon doesn't exist
  if (!isValidIcon) {
    console.warn(`Icon "${name}" not found, using "${fallback}" as fallback`);
    iconName = fallback;
  }
  
  const LazyIcon = lazy(async () => {
    const module = await dynamicIconImports[iconName]();
    // Type assertion to cast the imported module
    return { default: module.default as LucideIcon };
  });

  return (
    <Suspense fallback={<div className="w-5 h-5 animate-pulse bg-gray-200 rounded" />}>
      <LazyIcon {...props} />
    </Suspense>
  );
};

export default Icon;
