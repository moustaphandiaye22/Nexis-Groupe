"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { sectors } from "@/data/sectors";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  if (sent)
    return (
      <div className="form-success">
        <Check size={32} />
        <h3>Demande envoyée.</h3>
        <p>
          Merci de nous avoir contactés. Votre demande a bien été enregistrée
          par nos équipes. Nous vous répondrons dans les plus brefs délais.
        </p>
        <button className="text-link" onClick={() => setSent(false)}>
          Envoyer une autre demande
        </button>
      </div>
    );
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Nom complet
          <input required name="name" placeholder="Votre nom" />
        </label>
        <label>
          Téléphone
          <input required name="phone" placeholder="+221 ..." />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Email
          <input
            required
            type="email"
            name="email"
            placeholder="vous@entreprise.com"
          />
        </label>
        <label>
          Entreprise
          <input name="company" placeholder="Nom de votre entreprise" />
        </label>
      </div>
      <label>
        Pôle concerné
        <select name="sector" defaultValue="">
          <option value="" disabled>
            Sélectionner un pôle
          </option>
          {sectors.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Votre projet
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Parlez-nous de votre besoin, vos objectifs et votre calendrier..."
        />
      </label>
      <button className="button button--dark" type="submit">
        Envoyer la demande <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
