import { redirect } from 'next/navigation'
import MapPage from '@/components/map-page'

export default function Map() {
  // In a real app, you'd check the authentication status here
  // and redirect to login if not authenticated
  return <MapPage />
}