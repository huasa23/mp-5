"use server"
import { redirect } from "next/navigation";
import { getDestinationUrl } from "@/lib/UrlService";

interface PageProps {
    params: {
      alias: string;
    }
  }
  
export default async function DynamicParamPage({ params }: PageProps) {
  const resolvedParams = await params;
  if(resolvedParams.alias) {
    const destinationUrl = await getDestinationUrl(resolvedParams.alias);
    if (destinationUrl) {
      redirect(destinationUrl);
    } 
  }
  
}