import { redirect } from 'next/navigation'
import FormDataPage from '@/components/form-data-page'

export default function FormData() {
  // In a real app, you'd check the authentication status here
  // and redirect to login if not authenticated
  return <FormDataPage />
}