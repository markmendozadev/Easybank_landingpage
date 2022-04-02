const Content = (props) => {
  return (
    <div className="flex flex-col text-center justify-center xl:text-left xl:justify-start mt-12 xl:mt-0 xl:p-0 md:p-4">
      <div className="m-auto xl:m-0">{props.icon}</div>
      <h2 className="mt-10 text-2xl font-medium text-gray-700">
        {props.title}
      </h2>
      <p className="mt-4 text-xl text-gray-500 w-72 md:w-full xl:w-72">
        {props.desc}
      </p>
    </div>
  );
};

export default Content;
