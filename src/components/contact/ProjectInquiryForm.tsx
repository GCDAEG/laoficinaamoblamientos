"use client";

import { useState, type FormEvent } from "react";
import { hasWhatsAppContact, projectInquiryMessage, whatsappHref } from "@/lib/whatsapp";

const projectTypes = [
  "Amoblamiento a medida",
  "Equipamiento de oficinas",
  "Proyecto de interiorismo",
  "Consulta general",
];

export function ProjectInquiryForm() {
  const [error, setError] = useState("");
  const [preparedMessage, setPreparedMessage] = useState("");
  const canOpenWhatsApp = hasWhatsAppContact();

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("nombre") ?? "").trim();
    const locality = String(form.get("localidad") ?? "").trim();
    const projectType = String(form.get("tipoConsulta") ?? "").trim();
    const comments = String(form.get("comentarios") ?? "").trim();

    if (!name || !locality || !projectTypes.includes(projectType)) {
      setError("Completá tu nombre, localidad y tipo de consulta para continuar.");
      setPreparedMessage("");
      return;
    }

    setError("");
    const message = projectInquiryMessage({ name, locality, projectType, comments });
    const href = whatsappHref(message);
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    setPreparedMessage(message);
  }

  return <form className="inquiry-form" onSubmit={submitInquiry} onChange={() => { setError(""); setPreparedMessage(""); }} noValidate>
    <div className="form-row">
      <label>Nombre<input name="nombre" autoComplete="name" placeholder="Tu nombre" required /></label>
      <label>Localidad<input name="localidad" autoComplete="address-level2" placeholder="Tu localidad" required /></label>
    </div>
    <label>Tipo de consulta o proyecto
      <select name="tipoConsulta" defaultValue="" required>
        <option value="" disabled>Seleccioná una opción</option>
        {projectTypes.map((type) => <option value={type} key={type}>{type}</option>)}
      </select>
    </label>
    <label>Contanos sobre tu espacio (opcional)<textarea name="comentarios" rows={3} placeholder="Medidas, necesidades o una idea inicial" /></label>
    <button className="button--form" type="submit">{canOpenWhatsApp ? "Continuar por WhatsApp" : "Preparar consulta"} <span aria-hidden="true">↗</span></button>
    {canOpenWhatsApp
      ? <p className="form-privacy">El mensaje se abrirá en WhatsApp para que puedas revisarlo y enviarlo.</p>
      : <p className="contact-pending">WhatsApp oficial pendiente de confirmación. Podés preparar el texto, pero esta página todavía no puede enviarlo.</p>}
    {error && <p className="form-error" role="alert">{error}</p>}
    {preparedMessage && <div className="inquiry-preview" role="status">
      <p>Mensaje preparado. No se envió. Podés copiarlo para conservarlo:</p>
      <textarea aria-label="Borrador de consulta" readOnly value={preparedMessage} rows={6} onFocus={(event) => event.currentTarget.select()} />
    </div>}
  </form>;
}
