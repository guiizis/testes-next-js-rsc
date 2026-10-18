"use client";

import { useActionState } from "react";
import { Modal } from "@/components/modal";
import { adicionarBicho } from "../_actions/adicionar-bicho";
import type { BichoFormState } from "../_interfaces/bicho-form-state";
import { BichoForm } from "./bicho-form";

const initialState: BichoFormState = {
  status: "idle",
  values: { nome: "", especie: "", idade: "" },
};

export function AdicionarBichoModal({ onClose, onSaved }: { onClose: () => void; onSaved: () => void }) {
  const [state, formAction, pending] = useActionState(
    async (_previous: BichoFormState, formData: FormData): Promise<BichoFormState> => {
      let result: BichoFormState;
      try {
        result = await adicionarBicho(formData);
      } catch {
        return {
          status: "error",
          message: "Não foi possível confirmar o salvamento. Confira sua conexão e a listagem antes de tentar novamente.",
          values: {
            nome: String(formData.get("nome") ?? ""),
            especie: String(formData.get("especie") ?? ""),
            idade: String(formData.get("idade") ?? ""),
          },
        };
      }
      if (result.status === "success") onSaved();
      return result;
    },
    initialState,
  );

  return (
    <Modal title="Adicionar bicho" description="Preencha os dados do novo companheiro." onClose={onClose} busy={pending}>
      <BichoForm state={state} formAction={formAction} pending={pending} onCancel={onClose} />
    </Modal>
  );
}
