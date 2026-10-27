import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Copy, Check, Send, Code, Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:alsatamthamer@gmail.com?subject=${encodeURIComponent(
      subject || 'Kontakt via Portfolio'
    )}&body=${encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl space-y-10 py-4 sm:py-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 cream-pill text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9e5a26]" />
          <span className="text-[#635447]">{t.contactPage.title}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#241e1a]">
          {t.contactPage.title}
        </h1>
        <p className="font-sans text-base text-[#615347] font-normal leading-relaxed">
          {t.contactPage.subtitle}
        </p>
      </div>

      {/* Direct Channels: Unified Calm Card */}
      <div className="cream-card rounded-3xl p-6 sm:p-7 space-y-4">
        {/* Email Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-[#ede4d7]">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#9e5a26] shrink-0" />
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#736356] block">{t.contactPage.emailLabel}</span>
              <a
                href="mailto:alsatamthamer@gmail.com"
                className="font-mono text-xs sm:text-sm font-medium text-[#241e1a] hover:underline"
              >
                alsatamthamer@gmail.com
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy('alsatamthamer@gmail.com', 'email')}
            className="cream-pill px-3 py-1 text-xs font-mono inline-flex items-center gap-1.5 self-start hover:border-[#9e5a26] cursor-pointer"
          >
            {copiedField === 'email' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-[#736356]" />}
            <span>{copiedField === 'email' ? t.contactPage.formCopied : t.contactPage.emailLabel}</span>
          </button>
        </div>

        {/* Phone Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-[#ede4d7]">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#9e5a26] shrink-0" />
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#736356] block">{t.contactPage.phoneLabel}</span>
              <a
                href="tel:15214170410"
                className="font-mono text-xs sm:text-sm font-medium text-[#241e1a] hover:underline"
                dir="ltr"
              >
                +49 152 14170410
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy('+4915214170410', 'phone')}
            className="cream-pill px-3 py-1 text-xs font-mono inline-flex items-center gap-1.5 self-start hover:border-[#9e5a26] cursor-pointer"
          >
            {copiedField === 'phone' ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-[#736356]" />}
            <span>{copiedField === 'phone' ? t.contactPage.formCopied : t.contactPage.phoneLabel}</span>
          </button>
        </div>

        {/* GitHub & Location Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-3">
            <Code className="w-4 h-4 text-[#9e5a26] shrink-0" />
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#736356] block">{t.contactPage.githubLabel}</span>
              <a
                href="https://github.com/thameralsatam"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs sm:text-sm font-medium text-[#241e1a] hover:underline"
                dir="ltr"
              >
                github.com/thameralsatam
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#736356]">
            <MapPin className="w-3.5 h-3.5 text-[#9e5a26]" />
            <span>{t.contactPage.locationValue} (CET)</span>
          </div>
        </div>
      </div>

      {/* Message Composer */}
      <div className="cream-card rounded-3xl p-6 sm:p-7 space-y-5">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#241e1a]">
          {t.contactPage.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-medium text-[#40352d] block">
                {t.contactPage.formName} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#fdfbf7] border border-[#e3d8c8] rounded-xl px-4 py-2.5 text-xs font-mono text-[#241e1a] focus:outline-none focus:border-[#9e5a26]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-medium text-[#40352d] block">
                {t.contactPage.formEmail} *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#fdfbf7] border border-[#e3d8c8] rounded-xl px-4 py-2.5 text-xs font-mono text-[#241e1a] focus:outline-none focus:border-[#9e5a26]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-medium text-[#40352d] block">
              {t.contactPage.formSubject}
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-[#fdfbf7] border border-[#e3d8c8] rounded-xl px-4 py-2.5 text-xs font-mono text-[#241e1a] focus:outline-none focus:border-[#9e5a26]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-medium text-[#40352d] block">
              {t.contactPage.formMessage} *
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#fdfbf7] border border-[#e3d8c8] rounded-xl px-4 py-2.5 text-xs font-mono text-[#241e1a] focus:outline-none focus:border-[#9e5a26] resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
            <button
              type="submit"
              className="cream-pill-primary px-6 py-2.5 text-xs font-mono font-semibold tracking-wide inline-flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.contactPage.formSubmit}</span>
            </button>

            {submitted && (
              <span className="cream-pill px-3.5 py-1.5 text-xs font-mono text-emerald-800 border-emerald-600/30 inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>{t.contactPage.formSuccess}</span>
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
