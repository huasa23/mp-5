"use server"
import { MongoClient } from 'mongodb';



export async function connectToDatabase() {
  const uri = process.env.MONGODB_URL;
  const dbName = process.env.MONGODB_DB;
  console.log("uri", uri);
  console.log("dbName", dbName);
  const client = new MongoClient(uri as string);
  await client.connect();
  
  const db = client.db(dbName);
  
  return { client, db };
}