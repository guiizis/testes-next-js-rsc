"use client";

import { useId } from "react";
import type { BichoFormState } from "../_interfaces/bicho-form-state";

type BichoFormProps = {
  state: BichoFormState;
  formAction: (formData: FormData) => void;
  pending: boolean;
  onCancel: () => void;
};

const inputClassName = "mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 aria-invalid:border-red-500 dark:border-zinc-700 dark:bg-zinc-950";

export function BichoForm({ state, formAction, pending, onCancel }: BichoFormProps) {
  const id = useId();

  return (
    <form action={formAction} aria-busy={pending}>
      <fieldset disabled={pending} className="space-y-5 disabled:opacity-60">
        <legend className="sr-only">Informações do bicho</legend>
        {([
          { name: "nome", label: "Nome", placeholder: "Ex.: McIntosh", maxLength: 100 },
          { name: "especie", label: "Espécie", placeholder: "Ex.: Cachorro", maxLength: 60 },
        ] as const).map((field) => (
          <div key={field.name}>
            <label htmlFor={`${id}-${field.name}`} className="text-sm font-medium">{field.label}</label>
            <input
              id={`${id}-${field.name}`}
              name={field.name}
              defaultValue={state.values[field.name]}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              required
              aria-invalid={!!state.errors?.[field.name]}
              aria-describedby={state.errors?.[field.name] ? `${id}-${field.name}-error` : undefined}
              className={inputClassName}
            />
            {state.errors?.[field.name] && <p id={`${id}-${field.name}-error`} className="mt-2 text-sm text-red-600 dark:text-red-400">{state.errors[field.name]}</p>}
          </div>
        ))}
        <div>
          <label htmlFor={`${id}-idade`} className="text-sm font-medium">Idade em anos</label>
          <input id={`${id}-idade`} name="idade" type="number" min="0" step="1" max={Number.MAX_SAFE_INTEGER} required defaultValue={state.values.idade} placeholder="Ex.: 2" aria-invalid={!!state.errors?.idade} aria-describedby={`${id}-idade-help${state.errors?.idade ? ` ${id}-idade-error` : ""}`} className={inputClassName} />
          <p id={`${id}-idade-help`} className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Para menos de um ano, informe 0.</p>
          {state.errors?.idade && <p id={`${id}-idade-error`} className="mt-2 text-sm text-red-600 dark:text-red-400">{state.errors.idade}</p>}
        </div>
      </fieldset>
      {state.status === "error" && <p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">{state.message}</p>}
      <div className="mt-7 flex justify-end gap-3">
        <button type="button" onClick={onCancel} disabled={pending} className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-700 dark:hover:bg-zinc-800">Cancelar</button>
        <button type="submit" disabled={pending} className="rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-wait disabled:opacity-60">
          {pending ? "Salvando..." : "Salvar bicho"}
        </button>
      </div>
      <p role="status" className="sr-only">{pending ? "Salvando bicho. Aguarde." : ""}</p>
    </form>
  );
}
