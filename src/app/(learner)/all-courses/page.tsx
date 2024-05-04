import React, { useState } from 'react'
import { IoFilterOutline } from 'react-icons/io5'
import NavbarBanner from '@/components/navbar/NavbarBanner'
import CourseSearchSection from '@/components/CourseSearchSection'

import CourseNavigation from '@/components/CourseNavigation'

export default function page() {
  return (
    <div className="">
      <NavbarBanner />
      <CourseSearchSection headerText="All Courses" />
      <CourseNavigation />
    </div>
  )
}
