import Sidebar from '@/components/Sidebar/Sidebar'
import Notes from '@/components/Notes'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex relative w-full my-5">
      <div className="hidden lg:block fixed h-[calc(100vh-100px)] border-r w-[300px] bg-white overflow-y-scroll no-scrollbar">
        <Sidebar />
      </div>

      <div className="ml-[300px] w-full ">{children}</div>

      <Notes />
    </main>
  )
}
