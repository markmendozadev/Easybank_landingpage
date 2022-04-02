import Card from "./Card";
import currency from "../../public/images/image-currency.jpg";

import confetti from "../../public/images/image-confetti.jpg";
import plane from "../../public/images/image-plane.jpg";
import restaurant from "../../public/images/image-restaurant.jpg";
const articleData = [
  {
    id: 1,
    title: "Receive money in any currency with no fees",
    author: "Claire Robinson",
    desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    img: currency,
  },
  {
    id: 2,
    title: "Treat yourself without worrying about money",
    author: "Wilson Hutton",
    desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    img: restaurant,
  },
  {
    id: 3,
    title: "Take your Easybank card wherever you go",
    author: "Wilson Hutton",
    desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    img: plane,
  },
  {
    id: 4,
    title: "Our invite-only Beta accounts are now live!",
    author: "Claire Robinson",
    desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    img: confetti,
  },
];
const Articles = () => {
  return (
    <div className="bg-slate-50">
      <div className=" py-28  max-w-screen-xl m-auto">
        <h2 className="text-4xl text-gray-700 text-center xl:text-left">
          Latest Articles
        </h2>
        <div className="xl:mt-16 grid md:grid-cols-2 xl:grid-cols-none xl:grid-flow-col gap-10 p-12 xl:p-0">
          {articleData.map((data) => (
            <Card
              key={data.id}
              author={data.author}
              desc={data.desc}
              title={data.title}
              image={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
