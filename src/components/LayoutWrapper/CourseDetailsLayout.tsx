// components/LayoutWrapper/CourseDetailsLayout.tsx
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Notes from '../Notes'
import { useAppContext } from '@/context/AppContext' // Make sure this path is correct

const CourseDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const { isExpanded } = useAppContext() // Use the hook here to access context

  console.log('isExpanded', isExpanded)

  return (
    <main className="flex w-full my-5">
      <Sidebar />
      <div className={isExpanded ? 'ml-[100px] w-full' : 'ml-[300px] w-full'}>
        {children}
      </div>
      <Notes />
    </main>
  )
}

export default CourseDetailsLayout
