import Image from "next/image";

const Card = (props) => {
  return (
    <div className="bg-white rounded overflow-hidden shadow-md relative ">
      <div className="h-52 lg:h-80 xl:h-52 w-full">
        <Image
          src={props.image}
          alt={props.title}
          height="72rem"
          width="100%"
          layout="responsive"
        />
      </div>
      <div className="p-5 mt-6 lg:mt-auto">
        <span className="text-sm text-gray-400">By {props.author}</span>
        <h2 className="text-xl my-2 font-medium text-gray-700">
          {props.title}
        </h2>
        <p className="text-md text-gray-400">{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
