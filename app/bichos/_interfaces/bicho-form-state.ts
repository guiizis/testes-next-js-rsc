export type BichoFormValues = { nome: string; especie: string; idade: string };
export type BichoFieldErrors = Partial<Record<keyof BichoFormValues, string>>;

export type BichoFormState = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: BichoFieldErrors;
  values: BichoFormValues;
};
