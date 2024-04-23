interface ProgressBarProps {
  percentage: number
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const renderBars = () => {
    const numBars = 15
    const bars = Array.from({ length: numBars }, (_, index) => (
      <div
        key={index}
        className="w-[1.8px] h-[9px] mx-[0.5px] bg-gray-300 rounded-sm"
      />
    ))
    return bars
  }

  const remainingPercentage = 100 - percentage

  return (
    <div className="w-[172px] h-[18px] justify-start items-center gap-2 inline-flex">
      <div className="text-slate-700 text-xs font-medium font-['Inter'] leading-[18px]">
        {percentage}%
      </div>
      <div className="w-[138px] h-[9px] flex items-center bg-gray-100 rounded-sm">
        <div
          className="h-[9px] bg-gray-900 rounded-sm"
          style={{ width: `${percentage}%` }}
        />
        <div
          className="h-[9px] justify-between items-end flex"
          style={{ width: `${remainingPercentage}%` }}
        >
          {renderBars()}
        </div>
      </div>
    </div>
  )
}
