import Image from "next/image";
import { useState, useEffect } from "react";
import ImageMockUp from "../../public/images/image-mockups.png";
import { Bg_intro_deskop, Bg_intro_mobile } from "../Icons";
import Button from "../Ui/Button";
const Header = () => {
  const [width, setWidth] = useState("");
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 767;

  return (
    <>
      <div className="lg:p-6 grid lg:grid-cols-3 lg:max-w-screen-xl mb-32 lg:m-auto">
        <div className="lg:col-span-1 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-5xl text-gray-700 text-center lg:text-left">
            Next generation digital banking
          </h1>
          <p className="text-lg text-gray-500 mt-6 mb-8 text-center lg:text-left p-4 lg:p-0">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button>Request Invite</Button>
        </div>
        <div className="relative order-1 lg:order-2 col-span-2 md:-mt-28 lg:-mt-72">
          <div className="absolute z-0 w-full md:-top-28 lg:top-auto">
            {isMobile ? <Bg_intro_mobile /> : <Bg_intro_deskop />}
          </div>
          <div className="w-full h-full -mt-20 lg:mt-0 lg:translate-y-36 lg:translate-x-72">
            <Image src={ImageMockUp} alt="Img_mockup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
