import { redirect } from 'next/navigation'
import Dashboard from '@/components/dashboard'

export default function DashboardPage() {
  // In a real app, you'd check the authentication status here
  // and redirect to login if not authenticated
  return <Dashboard />
}