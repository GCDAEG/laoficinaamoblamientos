import { site } from "@/config/site";

type SocialButtonsProps = { className?: string };

export function SocialButtons({ className = "" }: SocialButtonsProps) {
  return <div className={`social-buttons ${className}`} aria-label="Redes sociales">
    <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram de La Oficina Amoblamientos">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
    </a>
    <button type="button" disabled aria-label="Facebook, enlace pendiente" title="Facebook pendiente de configurar">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M13.7 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5H17V3.3c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.6V13h2.8v8h3.3Z" /></svg>
    </button>
  </div>;
}
