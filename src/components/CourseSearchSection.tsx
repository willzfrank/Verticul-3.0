'use client'

import SearchInput from './inputs/SearchInput'

interface CourseSearchSectionProps {
  headerText: string
}

const CourseSearchSection: React.FC<CourseSearchSectionProps> = ({
  headerText,
}) => {
  return (
    <div className="py-5 bg-[#FCFCFD]">
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
  return <p className="text-2xl font-medium">{text}</p>
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
