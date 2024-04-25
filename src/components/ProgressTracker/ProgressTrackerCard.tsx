import Image from "next/image";

type ProgressTrackerCardProps = {
  progress: string;
  title: string;
  image: string;
  onClick: () => void;
};
const ProgressTrackerCard: React.FC<ProgressTrackerCardProps> = ({
  progress,
  title,
  image,
  onClick,
}) => {
  let bgGradient;
  let borderColor;

  if (title === "Completed Courses") {
    bgGradient = "from-indigo-200 to-indigo-50";
    borderColor = "border-violet-100";
  } else if (title === "Uncompleted Courses") {
    bgGradient = "from-yellow-100 to-amber-50";
    borderColor = "border-amber-50";
  } else if (title === "Certificate Acquired") {
    bgGradient = "from-emerald-100 to-white";
    borderColor = "border-green-50";
  }

  return (
    <div
      className="w-[250px] h-[117px] px-4 py-2 bg-white rounded-lg shadow flex-col justify-center items-start gap-1 inline-flex cursor-pointer"
      onClick={onClick}
    >
      <div className="justify-start items-start gap-4 inline-flex">
        <div className="w-[48.50px] h-[48.50px]">
          <div
            className={`w-[48.50px] h-[48.50px] flex items-center justify-center bg-gradient-to-b ${bgGradient} rounded-full shadow border-4 ${borderColor}`}
          >
            <Image src={image} alt={title} width={50} height={50} />
          </div>
        </div>

        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
          <h2 className="text-slate-700 text-4xl font-medium font-['Inter'] leading-[44px]">
            {progress}{" "}
          </h2>
          <p className="text-gray-500 w-max text-sm font-normal font-['Inter'] leading-tight">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackerCard;
