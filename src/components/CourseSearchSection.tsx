'use client'

import SearchInput from './inputs/SearchInput'

interface CourseSearchSectionProps {
  headerText: string
}

const CourseSearchSection: React.FC<CourseSearchSectionProps> = ({
  headerText,
}) => {
  return (
    <div className="py-5 bg-white">
      <div className="wrapper fbc">
        <Heading text={headerText} /> <SearchBox />
      </div>
    </div>
  )
}

interface HeadingProps {
  text: string
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className="text-gray-900 text-4xl font-medium font-space-grotesk">
      {text}
    </h2>
  )
}

const SearchBox = () => {
  return (
    <div className="w-[300px]">
      <SearchInput
        placeholder="Search for courses... "
        value=""
        onChange={(e) => {
          console.log(e.target.value)
        }}
      />
    </div>
  )
}

export default CourseSearchSection
