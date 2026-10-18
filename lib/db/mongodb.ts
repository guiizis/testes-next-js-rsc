import "server-only";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("A variável MONGODB_URI não foi configurada.");
}

const globalMongo = globalThis as typeof globalThis & {
  mongoClient?: MongoClient;
};

const client = globalMongo.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalMongo.mongoClient = client;
}

export async function getDb() {
  await client.connect();
  return client.db("rsc_test");
}