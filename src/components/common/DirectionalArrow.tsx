import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DirectionalArrowProps {
  direction: 'forward' | 'back';
  className?: string;
}

/** سهم يتبع اتجاه اللغة: للأمام يشير لليسار في العربية. */
export const DirectionalArrow: React.FC<DirectionalArrowProps> = ({ direction, className }) => {
  const { dir } = useLanguage();
  const pointsLeft = (dir === 'rtl') === (direction === 'forward');
  const Icon = pointsLeft ? ArrowLeft : ArrowRight;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
};
