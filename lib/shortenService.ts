"use server"

import { connectToDatabase } from "./MongoClient";

export async function shortenUrl(destinationUrl: string, alias: string) {
    const { db } = await connectToDatabase();
    const collection = db.collection('url_mapping');
    
    const cursor1 = await collection.find({destinationUrl: destinationUrl});
    const array1 = await cursor1.toArray();
    
    const cursor2 = await collection.find({alias: alias});
    const array2 = await cursor2.toArray();

    if(array1.length == 0 && array2.length == 0) {
        const result = await collection.insertOne({
            destinationUrl: destinationUrl,
            alias: alias,
            createdAt: new Date()
        });
        if(result.acknowledged) {
            return true;
        }
    }
    return false;
}