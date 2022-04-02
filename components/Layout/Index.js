import Navbar from "../Navbar";

const Layout = (props) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
