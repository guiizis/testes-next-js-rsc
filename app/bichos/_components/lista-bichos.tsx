import { connection } from "next/server";
import { listarBichos } from "../_data/bichos-repository";
import { BichosTable } from "./bichos-table";

export async function ListaBichos() {
  await connection();

  const bichos = await listarBichos();

  return <BichosTable bichos={bichos} />;
}
