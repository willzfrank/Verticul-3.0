import { AppProvider } from '@/context/AppContext'
import CourseDetailsLayout from '@/components/LayoutWrapper/CourseDetailsLayout'
import Sidebar from '@/components/Sidebar/Sidebar'
import Notes from '@/components/Notes'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full my-5">
      <Sidebar />

      {children}
      <Notes />
    </main>
  )
}
