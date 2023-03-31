import { DollarCircleFilled } from "@ant-design/icons";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import { formatNumber } from "../../../untils/string";
import "../style/index.scss";

interface ListJobsProps {
  dataListJobs: any;
  type: string;
}

export const ListJobs: React.FC<ListJobsProps> = ({ dataListJobs, type }) => {
  const { t } = useTranslation(["jobs-online", "service"]);
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-[80%]">
      {dataListJobs?.data?.map((item: any) => (
        <div
          className="border-t space-y-3 flex flex-col  py-6 px-4 tag-job"
          key={item.id}
        >
          <div className="flex gap-5 items-center content">
            <h2
              onClick={() =>
                navigate(systemRoutes.Detail_Job_ROUTE, {
                  state: { id: item.id, type: type },
                })
              }
              className="text-blue-500 text-xl m-0 p-0 cursor-pointer title"
            >
              {item.attributes.title}
            </h2>
            <div className="uppercase text-white bg-[#9d5ab9] font-bold px-2 rounded-sm text-sm">
              <span>{item?.attributes?.workType}</span>
            </div>
          </div>

          <div className="flex space-x-1 items-center">
            {[1, 2, 3, 4, 5].map((dola, i) => (
              <DollarCircleFilled key={i} className="text-xs " />
            ))}
            <p className="pl-3 m-0 p-0">
              {item?.attributes?.users_permissions_user?.data?.attributes
                ?.username ||
                item?.attributes?.user?.data?.attributes?.username}
            </p>
          </div>
          <div className="flex justify-between rounded-lg p-3 items-center bg-gray-200">
            <div className="flex items-center">
              {(item?.attributes?.addresses?.data[0]?.attributes?.city && (
                <div className="flex items-center">
                  <p className=" m-0 p-0">
                    {item?.attributes?.addresses?.data[0]?.attributes?.city}
                  </p>
                  <span className="px-3">|</span>
                </div>
              )) ||
                item?.attributes?.field?.category}
              {item?.attributes?.category?.data?.attributes?.name && (
                <div className="flex items-center">
                  <p className=" m-0 p-0">
                    {t(item?.attributes?.category?.data?.attributes?.name, {
                      ns: "service",
                    })}
                  </p>
                </div>
              )}
              <span className="px-3">|</span>
              <p className=" m-0 p-0">
                {item?.attributes?.budgetMin &&
                  formatNumber(item?.attributes?.budgetMin) + "đ -"}

                {item?.attributes?.budgetMax &&
                  formatNumber(item?.attributes?.budgetMax) + "đ"}
              </p>
              <span>{formatNumber(item?.attributes?.prize) + "đ"}</span>
            </div>
            <div className="flex ">
              <p className=" m-0 p-0">
                {t("application_deadline")}: {item.attributes.deadline}
              </p>
            </div>
          </div>
          <span className="line-clamp-2">
            {item?.attributes?.description?.des}
          </span>
          <div className="flex space-x-2">
            {item?.attributes?.skills?.data.map((skill: any, index: number) => (
              <div
                className={
                  index === 0
                    ? "bg-[#08c] text-white px-2 cursor-pointer"
                    : "text-[#adadad] bg-[#f7f7f7] px-2 cursor-pointer"
                }
              >
                <span>{skill?.attributes?.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
