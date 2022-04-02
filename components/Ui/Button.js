const Button = (props) => {
  return (
    <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 px-8 rounded-full text-lg font-medium text-white shadow">
      {props.children}
    </button>
  );
};

export default Button;
