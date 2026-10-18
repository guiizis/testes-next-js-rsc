import "server-only";
import { getDb } from "@/lib/db/mongodb";
import type { Bicho } from "../_interfaces/bicho";

export async function listarBichos() {
  const db = await getDb();
  return db.collection<Bicho>("bichos").find().toArray();
}

export async function inserirBicho(bicho: Bicho) {
  const db = await getDb();
  await db.collection<Bicho>("bichos").insertOne(bicho);
}
