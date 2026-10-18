"use server";

import { revalidatePath } from "next/cache";
import { inserirBicho } from "../_data/bichos-repository";
import type { BichoFormState } from "../_interfaces/bicho-form-state";
import { validateBicho } from "../_lib/validate-bicho";

export async function adicionarBicho(formData: FormData): Promise<BichoFormState> {
  const result = validateBicho(formData);

  if (!result.success) {
    return { status: "error", message: "Confira os campos indicados.", errors: result.errors, values: result.values };
  }

  try {
    await inserirBicho(result.data);
  } catch (error) {
    console.error("Falha ao adicionar bicho:", error);
    return { status: "error", message: "Não foi possível salvar. Tente novamente.", values: result.values };
  }

  revalidatePath("/bichos");
  return { status: "success", values: { nome: "", especie: "", idade: "" } };
}
