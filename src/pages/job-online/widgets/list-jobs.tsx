import { DollarCircleFilled } from "@ant-design/icons";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../untils/string";
import configsListJobs from "../json/list-jobs.json";

interface ListJobsProps {}

export const ListJobs: React.FC<ListJobsProps> = () => {
  return (
    <div className="flex-1">
      {configsListJobs.map((item) => (
        <div
          className="border-t space-y-3 flex flex-col  py-6 px-4"
          key={item.id}
        >
          <Link to={"/"} className="">
            <h2 className="text-blue-500 m-0 p-0">{item.jobname}</h2>
          </Link>
          <div className="flex space-x-1 items-center">
            {[1, 2, 3, 4, 5].map((dola, i) => (
              <DollarCircleFilled key={i} className="text-xs " />
            ))}
            <div className="pl-3 m-0 ">{item.name}</div>
          </div>
          <div className="flex rounded-lg p-3 items-center bg-gray-200">
            <p className=" m-0 p-0">{item.address}</p>
            <Divider type="vertical" className="bg-black" />
            <p className=" m-0 p-0">
              {formatNumber(item.pricefrom)}đ - {formatNumber(item.priceto)}đ
            </p>
          </div>
          <span className="line-clamp-2">{item.describe}</span>
        </div>
      ))}
    </div>
  );
};
