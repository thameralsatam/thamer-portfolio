import React from 'react';

interface DemoFrameProps {
  icon: React.ReactNode;
  title: string;
  note: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

/** إطار موحد لكل التجارب التفاعلية. */
export const DemoFrame: React.FC<DemoFrameProps> = ({ icon, title, note, children, footer }) => (
  <div className="surface overflow-hidden">
    <div className="flex items-start gap-4 px-6 pb-5 pt-6">
      <span className="mt-1.5 text-clay-700">{icon}</span>
      <div>
        <h3 className="font-display text-lg text-ink-900">{title}</h3>
        <p className="text-sm leading-7 text-ink-500">{note}</p>
      </div>
    </div>
    <div className="border-t border-line">{children}</div>
    {footer && <div className="border-t border-line bg-paper-100/60 px-6 py-4 text-sm text-ink-500">{footer}</div>}
  </div>
);
