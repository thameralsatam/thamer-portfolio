import React from 'react';
import { Dumbbell, Landmark, PenTool, SquareCode, Type, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  fontat: Type,
  'umayyad-mosque': Landmark,
  trainingsplan: Dumbbell,
  'studio-lab': SquareCode,
  'arabic-font-tool': PenTool,
};

/** أيقونة المشروع، وهي نفس أيقونة تجربته التفاعلية. */
export const ProjectIcon: React.FC<{ id: string }> = ({ id }) => {
  const Icon = ICONS[id] ?? Type;
  return <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />;
};
