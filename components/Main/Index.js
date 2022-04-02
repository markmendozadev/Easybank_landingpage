import Content from "./Content";
import { OnlineBanking, Budgeting, Onboarding, ApiLogo } from "../Icons";

const contentData = [
  {
    id: 1,
    name: "Online banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: () => <OnlineBanking />,
  },
  {
    id: 2,
    name: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    icon: () => <Budgeting />,
  },
  {
    id: 3,
    name: "Fast Onboarding",
    desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: () => <Onboarding />,
  },
  {
    id: 4,
    name: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: () => <ApiLogo />,
  },
];
const Main = () => {
  return (
    <div className="bg-gray-100 lg:-mt-4 lg:p-4 xl:p-0">
      <div className="py-28  max-w-screen-xl m-auto">
        <h2 className="text-4xl text-gray-700 text-center xl:text-left">
          Why choose Easybank?
        </h2>
        <p className="text-lg text-gray-500 mt-6 xl:mb-8 p-4 lg:p-0 xl:w-3/6 text-center xl:text-left">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row justify-center xl:justify-between items-center xl:items-start xl:mt-24">
          {contentData.map((data) => (
            <Content
              key={data.id}
              title={data.name}
              icon={data.icon()}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
