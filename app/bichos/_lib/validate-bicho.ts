import type { Bicho } from "../_interfaces/bicho";
import type { BichoFieldErrors, BichoFormValues } from "../_interfaces/bicho-form-state";

type ValidationResult =
  | { success: true; data: Bicho; values: BichoFormValues }
  | { success: false; errors: BichoFieldErrors; values: BichoFormValues };

export function validateBicho(formData: FormData): ValidationResult {
  const read = (name: string) => {
    const value = formData.get(name);
    return typeof value === "string" ? value.trim() : "";
  };
  const values = { nome: read("nome"), especie: read("especie"), idade: read("idade") };
  const errors: BichoFieldErrors = {};

  if (!values.nome || values.nome.length > 100) {
    errors.nome = "Informe um nome com até 100 caracteres.";
  }
  if (!values.especie || values.especie.length > 60) {
    errors.especie = "Informe uma espécie com até 60 caracteres.";
  }

  const idade = Number(values.idade);
  if (!/^\d+$/.test(values.idade) || !Number.isSafeInteger(idade)) {
    errors.idade = "Informe uma idade inteira, igual ou maior que zero.";
  }

  if (Object.keys(errors).length) return { success: false, errors, values };

  return { success: true, data: { nome: values.nome, especie: values.especie, idade }, values };
}
