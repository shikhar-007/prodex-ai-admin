import ChartComponent from "../Chart";
import Card from "./Card";
import DashBoardTable from "./DashBoardTable";

const UserSection = () => {

  const dummyData = [
    {
      id: 1,
      title: "Active Users Today",
      value: "25000",
      icon: "/svg/active_user.svg",
      arrow: "/svg/down_arrow.svg",
    },
    {
      id: 2,
      title: "Total Queries Today",
      value: "1000",
      icon: "/svg/total_queries.svg", // Use a different icon if needed
      graph: "/svg/user-graph.svg", // Use a different graph if needed
    },
    {
      id: 3,
      title: "Avg. Session Duration",
      value: "1000",
      icon: "/svg/clock.svg", // Use a different icon if needed
      graph: "/svg/user-graph.svg", // Use a different graph if needed
    },
  ];

  return (
    <div className=" w-full h-full flex flex-col gap-6 pt-4 ">
      <h1 className=" text-white font-parsi text-[32px] leading-[30px] font-bold">
        User Management
      </h1>

      <div className=" w-full flex gap-4 ">
        {dummyData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
            graph={card.graph}
            arrow={card.arrow}
          />
        ))}
        {/* <ChartComponent /> */}
      </div>

      <div className=" w-full h-[450px] backdrop-blur-[15px] dash-card rounded-xl">
        <h1 className=" text-white font-parsi text-[24px] leading-[22px] font-bold pl-5 pt-2 mb-2">
          List of users
        </h1>
        <DashBoardTable />
      </div>
    </div>
  );
};

export default UserSection;
