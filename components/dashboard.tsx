"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LayoutDashboard, FileText, Map } from 'lucide-react'

export default function Dashboard() {
  const router = useRouter()

  const handleSignOut = () => {
    // In a real app, you'd implement sign out logic here
    router.push('/login')
  }

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
              <Button onClick={handleSignOut} variant="ghost">
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/form-data" passHref>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Form Data</CardTitle>
                  <CardDescription>Submit and manage form data</CardDescription>
                </CardHeader>
                <CardContent>
                  <FileText className="h-12 w-12 text-blue-500" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/map" passHref>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Map</CardTitle>
                  <CardDescription>View and interact with map data</CardDescription>
                </CardHeader>
                <CardContent>
                  <Map className="h-12 w-12 text-blue-500" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}