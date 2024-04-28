"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

interface BackButtonProps {
  className?: string;
  navigateBack?: boolean;
  onClick?: () => void;
}

export default function Back({
  className,
  navigateBack,
  onClick,
  ...props
}: BackButtonProps) {
  const router = useRouter();

  return (
    <div
      className={className}
      onClick={navigateBack ? () => router.back() : onClick}
      {...props}
    >
      <button
        className={`fcc w-[50px] h-[50px] hover:bg-gray-100 bg-gray-50 rounded-full`}
      >
        <BiArrowBack size={20} />
      </button>
    </div>
  );
}
