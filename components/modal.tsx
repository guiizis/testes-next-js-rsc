"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

type ModalProps = {
  title: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;
  busy?: boolean;
  wide?: boolean;
};

export function Modal({ title, description, children, onClose, busy = false, wide = false }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    dialog?.showModal();
    return () => {
      dialog?.close();
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget && !busy) onClose();
      }}
      className={`modal-scrollbar fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] ${wide ? "max-w-3xl" : "max-w-lg"} overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-0 font-sans text-zinc-900 shadow-2xl backdrop:bg-zinc-950/60 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-zinc-200 p-6 dark:border-zinc-800">
        <div>
          <h2 id={titleId} className="text-xl font-semibold tracking-tight">{title}</h2>
          {description && <p id={descriptionId} className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>}
        </div>
        <button type="button" onClick={onClose} disabled={busy} aria-label="Fechar modal" className="rounded-lg px-3 py-1 text-xl text-zinc-500 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-emerald-600 disabled:opacity-50 dark:hover:bg-zinc-800">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="p-6">{children}</div>
    </dialog>
  );
}
