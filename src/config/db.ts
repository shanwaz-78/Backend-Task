import { connect, Mongoose } from "mongoose";

export async function createDBConnection(MONGO_URI: string): Promise<Mongoose> {
  if (!MONGO_URI) {
    throw new Error(`Invalid Mongo URI. Please provide a correct Mongo URI.`);
  }

  try {
    const db = await connect(MONGO_URI);
    console.log(` MongoDB Connection Established Successfully.`);
    return db;
  } catch (error) {
    console.error(`[Error]: while creating DB connection`, error);
    throw error;
  }
}
