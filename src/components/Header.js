import { Link } from "react-router-dom";
import { PhotographIcon } from "@heroicons/react/outline";
import { NavBarMenu } from "./NavBarMenu";
export const Header = () => {
  return (
    <div className=" h-20 flex justify-between items-center border-solid border-gray-200 border-b-2 relative">
      <h1 className="text-3xl leading-8 tracking-tight font-extrabold text-blue-500 ">
        <PhotographIcon className="w-14" />
      </h1>
      <NavBarMenu />
      <div className="flex gap-8 items-center ">
        <span className="text-gray-500 text-base leading-6 font-medium">
          <Link>Sign in</Link>
        </span>
        <button className="py-2 px-4  text-base leading-6 font-medium bg-blue-500 text-white rounded-md">
          <Link>Sign up</Link>
        </button>
      </div>
    </div>
  );
};
