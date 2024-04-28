import { AiOutlineSearch } from "react-icons/ai";
import { InputHTMLAttributes } from "react";

type SearchProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput = ({
  onChange,
  placeholder,
  value,
  ...props
}: SearchProps) => {
  return (
    <div className="relative rounded-lg cursor-pointer  flex items-center text-[#919191] focus-within:border focus-within:border-u-purple-300 w-full ">
      <AiOutlineSearch
        className="absolute left-0 ml-2 pointer-events-none"
        size={20}
      />

      <input
        className="outline-0  w-full pl-10 py-2 truncate text-black text-sm bg-[#F7F7F7] rounded-lg"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
