import React from 'react';
import { ProjectStatusKey } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface StatusBadgeProps {
  statusKey: ProjectStatusKey;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ statusKey, className = '' }) => {
  const { t } = useLanguage();
  const statusText = t.status[statusKey];

  return (
    <span
      className={`cream-pill px-3 py-1 text-[11px] font-mono font-medium inline-flex items-center gap-1.5 ${className}`}
      role="status"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#9e5a26]" aria-hidden="true" />
      <span className="leading-snug">{statusText}</span>
    </span>
  );
};
