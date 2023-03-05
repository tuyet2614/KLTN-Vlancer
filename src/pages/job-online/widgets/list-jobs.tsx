import { DollarCircleFilled } from "@ant-design/icons";
import { Divider, Image } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../untils/string";
import configsListJobs from "../json/list-jobs.json";

interface ListJobsProps {
  dataListJobs: any;
}

export const ListJobs: React.FC<ListJobsProps> = ({ dataListJobs }) => {
  console.log("ss", dataListJobs.data);
  const { t } = useTranslation("jobs-online");
  return (
    <div className="flex-1">
      {dataListJobs.data.map((item: any) => (
        <div
          className="border-t space-y-3 flex flex-col  py-6 px-4"
          key={item.id}
        >
          <Link to={"/"} className="">
            <h2 className="text-blue-500 m-0 p-0">{item.attributes.title}</h2>
          </Link>
          <div className="flex space-x-1 items-center">
            {[1, 2, 3, 4, 5].map((dola, i) => (
              <DollarCircleFilled key={i} className="text-xs " />
            ))}
            <div className="pl-3 m-0 ">{item.name}</div>
          </div>
          <div className="flex justify-between rounded-lg p-3 items-center bg-gray-200">
            <div className="flex">
              <p className=" m-0 p-0">{item.address}</p>
              <Divider type="vertical" className="bg-black" />
              <p className=" m-0 p-0">
                {formatNumber(item.pricefrom)}đ - {formatNumber(item.priceto)}đ
              </p>
            </div>
            <div className="flex ">
              <p className=" m-0 p-0">
                {t("application_deadline")}: {item.attributes.deadline}
              </p>
            </div>
          </div>
          <span className="line-clamp-2">{item.attributes.description}</span>
          {/* <div className="flex space-x-2">
            {item.image.map((img, i) => (
              <Image src={img} key={i} width={80} height={80} />
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
};
