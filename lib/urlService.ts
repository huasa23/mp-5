"use server"

import { connectToDatabase } from "./mongoclient";

export async function getDestinationUrl(alias: string) {
    const { client,db } = await connectToDatabase();
    const collection = db.collection('url_mapping');
    
    const cursor = await collection.find({alias: alias});
    const array = await cursor.toArray();
    if(array.length == 0) {
        return null;
    } else {
        return array[0].destinationUrl;
    }
}