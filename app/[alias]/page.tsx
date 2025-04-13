"use client"
import { redirect, useParams } from "next/navigation";
import { getDestinationUrl } from "@/lib/urlService";
  
export default async function AliasPage() {
  
  const params = useParams();
  if(params.alias) {
    const destinationUrl = await getDestinationUrl(params.alias as string);
    if (destinationUrl) {
      redirect(destinationUrl);
    } 
  }
  
}