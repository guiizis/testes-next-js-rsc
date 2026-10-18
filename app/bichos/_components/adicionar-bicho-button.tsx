"use client";

import { useState } from "react";
import { AdicionarBichoModal } from "./adicionar-bicho-modal";

export function AdicionarBichoButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <p role="status" className="text-sm text-emerald-700 dark:text-emerald-400">{message}</p>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => { setMessage(""); setOpen(true); }}
        className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        <span aria-hidden="true" className="text-lg leading-none">+</span>
        Adicionar bicho
      </button>
      {open && (
        <AdicionarBichoModal
          onClose={() => setOpen(false)}
          onSaved={() => { setOpen(false); setMessage("Bicho cadastrado com sucesso!"); }}
        />
      )}
    </div>
  );
}
