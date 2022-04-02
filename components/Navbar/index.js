import { useState } from "react";
import { Hambuger, Logo } from "../Icons";
import Button from "../Ui/Button";
const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="bg-white shadow-md relative z-10">
      {isShowing && (
        <div
          className="fixed  inset-0 p-8 text-center bg-gray-800 opacity-60 z-10"
          onClick={() => setIsShowing(false)}
        ></div>
      )}
      <nav
        className={`fixed z-20 md:h-16 lg:h-auto bg-white w-full lg:relative lg:flex lg:justify-between lg:items-center max-w-screen-xl m-auto p-6`}
      >
        <div className="flex justify-between items-center">
          <div>
            <Logo className="fill-primary" />
          </div>
          <div
            className="block lg:hidden"
            onClick={() => setIsShowing((prevState) => !prevState)}
          >
            {!isShowing ? <Hambuger /> : <div className="h-5">X</div>}
          </div>
        </div>

        <ul
          className={` lg:flex gap-10 md:relative ${
            isShowing
              ? "block fixed rounded-lg  inset-x-6 top-20 md:inset-x-0 md:top-10 p-8 text-center bg-white"
              : "hidden"
          } `}
        >
          <li className={`${isShowing ? "my-4 font-medium text-xl" : ""}`}>
            Home
          </li>
          <li className={`${isShowing ? "my-4 font-medium text-xl" : ""}`}>
            About
          </li>
          <li className={`${isShowing ? "my-4 font-medium text-xl" : ""}`}>
            Contact
          </li>
          <li className={`${isShowing ? "my-4 font-medium text-xl" : ""}`}>
            Blog
          </li>
          <li className={`${isShowing ? "my-4 font-medium text-xl" : ""}`}>
            Careers
          </li>
        </ul>
        <div className="hidden lg:block">
          <Button>Request Invite</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
