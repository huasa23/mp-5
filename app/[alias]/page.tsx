"use server"
import { redirect } from 'next/navigation'
import { getDestinationUrl } from '@/lib/urlService'
 
export default async function Profile({
  params,
}: {
  params: Promise<{ alias: string }>
}) {
  const { alias } = await params
  const destinationUrl = await getDestinationUrl(alias)
  
  if (!destinationUrl) {
    redirect('/')
  }
  else {
    redirect(destinationUrl)
  }

}