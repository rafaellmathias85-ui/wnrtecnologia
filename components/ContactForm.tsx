"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { solutions } from "@/lib/solutions";
import { trackEvent } from "@/components/Analytics";

type Status = "idle" | "loading" | "success" | "error";

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, ddd, first, last) =>
      [ddd && `(${ddd}`, ddd.length === 2 && ") ", first, last && `-${last}`].filter(Boolean).join("")
    );
  }
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export function ContactForm({ defaultSolution }: { defaultSolution?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Erro ao enviar formulário.");
      setStatus("success");
      setMessage("Mensagem enviada com sucesso. Em breve nossa equipe entrará em contato.");
      trackEvent("contact_form_submit", { solution: payload.solution });
      form.reset();
      setPhone("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar. Tente novamente.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-lg p-5 sm:p-7">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <input type="hidden" name="recaptchaToken" value="RECAPTCHA_V3_PLACEHOLDER" />
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" name="name" autoComplete="name" required />
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Telefone
          <input
            name="phone"
            value={phone}
            onChange={(event) => setPhone(maskPhone(event.target.value))}
            required
            inputMode="tel"
            autoComplete="tel"
            className="rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan"
            placeholder="(11) 99999-9999"
          />
        </label>
        <Field label="Empresa" name="company" autoComplete="organization" required />
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Solucao de interesse
        <select
          name="solution"
          defaultValue={defaultSolution || ""}
          required
          className="rounded-lg border border-white/15 bg-[#0b1021] px-4 py-3 text-white focus:border-cyan"
        >
          <option value="" disabled>
            Selecione uma solução
          </option>
          {solutions.map((solution) => (
            <option key={solution.slug} value={solution.slug}>
              {solution.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Mensagem
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          className="resize-y rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan"
          placeholder="Conte rapidamente o que você deseja automatizar ou construir."
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-4 font-bold text-ink shadow-glow transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
      >
        <Send size={18} aria-hidden />
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>
      <AnimatePresence>
        {message ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className={status === "success" ? "text-sm font-semibold text-lime" : "text-sm font-semibold text-orange-300"}
            role="status"
          >
            {message}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-200">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan"
      />
    </label>
  );
}
