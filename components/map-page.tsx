"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LayoutDashboard, MapPin } from 'lucide-react'

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface Location {
  id: number
  name: string
  lat: number
  lng: number
}

export default function MapPage() {
  const [locations, setLocations] = useState<Location[]>([])
  const router = useRouter()

  useEffect(() => {
    // Simulating fetching data from a JSON file
    const fetchLocations = async () => {
      // In a real application, you would fetch this data from an API or JSON file
      const mockLocations: Location[] = [
        { id: 1, name: 'Location 1', lat: 51.505, lng: -0.09 },
        { id: 2, name: 'Location 2', lat: 51.51, lng: -0.1 },
        { id: 3, name: 'Location 3', lat: 51.515, lng: -0.09 },
      ]
      setLocations(mockLocations)
    }

    fetchLocations()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <LayoutDashboard className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-semibold">Acme Inc</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button onClick={() => router.push('/dashboard')} variant="ghost">
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Map</h1>
          <Card>
            <CardHeader>
              <CardTitle>Location Map</CardTitle>
              <CardDescription>View important locations on the map</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ height: '500px', width: '100%' }}>
                {typeof window !== 'undefined' && (
                  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {locations.map((location) => (
                      <Marker key={location.id} position={[location.lat, location.lng]}>
                        <Popup>
                          <div>
                            <h3 className="font-bold">{location.name}</h3>
                            <p>Latitude: {location.lat}</p>
                            <p>Longitude: {location.lng}</p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}