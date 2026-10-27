import React from 'react';
import { ProjectStatusKey } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface StatusBadgeProps {
  statusKey: ProjectStatusKey;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ statusKey, className = '' }) => {
  const { t } = useLanguage();
  return (
    <span className={`status ${className}`}>
      <span className="dot" aria-hidden="true" />
      <span>{t.status[statusKey]}</span>
    </span>
  );
};
