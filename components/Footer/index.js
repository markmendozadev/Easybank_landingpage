import {
  Facebook,
  Instagram,
  Logo,
  Pinterest,
  Twitter,
  Youtube,
} from "../Icons";
import Button from "../Ui/Button";

const Footer = () => {
  return (
    <div className="bg-primary py-8">
      <footer className="max-w-screen-xl mx-auto flex flex-col lg:grid lg:grid-cols-4 lg:p-8">
        <div className="col-span-1 flex flex-col items-center lg:items-start">
          <Logo className="fill-white" />
          <div className="flex gap-4 mt-8 lg:mt-auto">
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
        </div>
        <div className="col-span-1 mt-8 lg:mt-0">
          <ul className="grid text-center lg:text-left lg:grid-rows-3 lg:grid-flow-col gap-3 text-white">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="text-center lg:text-right col-span-2 mt-8 lg:mt-0">
          <Button>Request Invite</Button>
          <p className="mt-5 text-gray-400">© Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
