import { redirect } from 'next/navigation'
import LoginPage from '@/components/login-page'

export default function Home() {
  // For simplicity, we're just redirecting to the login page
  // In a real app, you'd check the authentication status here
  redirect('/login')
}