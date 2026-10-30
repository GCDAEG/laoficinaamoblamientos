"use client";

import { useEffect, useRef, useState } from "react";

const iconClassName = "pointer-events-none absolute size-[1.8rem] transition-[opacity,transform] duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)]";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function closeChat() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <aside
      className="fixed right-[clamp(1rem,3vw,2rem)] bottom-[clamp(1rem,3vw,2rem)] z-20 size-14"
      aria-label="Consulta por WhatsApp"
    >
      <div
        id="chat-preview"
        className={`absolute right-0 bottom-[calc(100%+0.75rem)] flex max-h-[calc(100dvh-6rem)] w-[min(22rem,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden border border-[#e6e6e2] bg-white shadow-[0_12px_36px_rgb(0_0_0_/_16%)] transition-[opacity,transform,visibility] duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)] ${open ? "visible translate-y-0 scale-100 opacity-100 pointer-events-auto" : "invisible translate-y-3 scale-[.94] opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
        inert={!open}
        onKeyDown={(event) => { if (event.key === "Escape") closeChat(); }}
      >
        <div className="flex items-center gap-3 border-b border-[#e8e8e5] px-[1.1rem] py-4">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#111] font-[var(--serif)] text-[1.1rem] leading-none text-white" aria-hidden="true">LO</span>
          <div>
            <strong className="block text-[.83rem] font-semibold">La Oficina</strong>
            <span className="block text-[.7rem] text-[#666]">Vista previa de consulta</span>
          </div>
        </div>
        <div className="min-h-36 overflow-y-auto bg-[#f7f7f5] px-[1.1rem] py-5">
          <p className="m-0 max-w-64 bg-white px-[.85rem] py-[.7rem] text-[.78rem] leading-[1.5] text-[#333]">Contanos qué mueble o espacio tenés en mente.</p>
          {draft.trim() && (
            <p className="mt-4 mb-0 ml-auto max-w-[17rem] whitespace-pre-wrap bg-[#e8e8e5] px-[.85rem] py-[.7rem] text-[.78rem] leading-[1.5] [overflow-wrap:anywhere]">
              <span className="mb-1 block text-[.62rem] font-semibold tracking-[.06em] text-[#555] uppercase">Borrador</span>
              {draft}
            </p>
          )}
        </div>
        <div className="px-[1.1rem] pt-4 pb-[1.1rem]">
          <label className="mb-[.4rem] block text-[.72rem] font-semibold" htmlFor="chat-message">Tu mensaje</label>
          <textarea
            id="chat-message"
            ref={inputRef}
            className="block min-h-[4.5rem] w-full resize-y rounded-none border border-[#c8c8c4] bg-white px-[.7rem] py-[.65rem] text-base! leading-[1.45] text-[#111] sm:text-[.78rem]! focus-visible:outline-offset-2"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Escribí tu consulta…"
            maxLength={500}
            rows={2}
          />
          <p className="mt-[.6rem] mb-0 text-[.66rem] leading-[1.5] text-[#555]">El envío por WhatsApp estará disponible cuando se confirme el número oficial.</p>
        </div>
      </div>
      <button
        ref={toggleRef}
        className="relative z-50 grid size-14 touch-manipulation cursor-pointer place-items-center rounded-full border border-white bg-[#111] text-white shadow-[0_2px_12px_rgb(0_0_0_/_12%)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_7px_20px_rgb(0_0_0_/_18%)]"
        type="button"
        aria-label={open ? "Cerrar vista previa de WhatsApp" : "Abrir vista previa de WhatsApp"}
        aria-expanded={open}
        aria-controls="chat-preview"
        onClick={() => setOpen((previous) => !previous)}
      >

        <svg className={`${iconClassName} ${open ? "rotate-[70deg] scale-[.55] opacity-0" : "rotate-0 scale-100 opacity-100"}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 0 0-8.57 15.14L2 22l5-1.36A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.06-1.1l-.36-.21-2.69.73.75-2.59-.24-.38A8 8 0 1 1 12 20Zm4.38-5.82c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.04.4 1.4.51.59.19 1.13.16 1.56.1.48-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>
        <svg className={`${iconClassName} ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-[70deg] scale-[.55] opacity-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="M5 5 19 19M19 5 5 19" /></svg>
      </button>
    </aside>
  );
}
