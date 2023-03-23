import { DollarCircleFilled } from "@ant-design/icons";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import { formatNumber } from "../../../untils/string";

interface ListJobsProps {
  dataListJobs: any;
}

export const ListJobs: React.FC<ListJobsProps> = ({ dataListJobs }) => {
  const { t } = useTranslation("jobs-online");
  const navigate = useNavigate();
  return (
    <div className="flex-1">
      {dataListJobs?.data.map((item: any) => (
        <div
          className="border-t space-y-3 flex flex-col  py-6 px-4"
          key={item.id}
        >
          <h2
            onClick={() => navigate(systemRoutes.CONTEST_DETAIL_ROUTE(item.id))}
            className="text-blue-500 m-0 p-0 cursor-pointer"
          >
            {item.attributes.title}
          </h2>

          <div className="flex space-x-1 items-center">
            {[1, 2, 3, 4, 5].map((dola, i) => (
              <DollarCircleFilled key={i} className="text-xs " />
            ))}
            <p className="pl-3 m-0 p-0">
              {
                item?.attributes?.users_permissions_user?.data?.attributes
                  ?.username
              }
            </p>
          </div>
          <div className="flex justify-between rounded-lg p-3 items-center bg-gray-200">
            <div className="flex items-center">
              <p className=" m-0 p-0">
                {item?.attributes?.project?.data?.attributes?.place}
              </p>
              <Divider type="vertical" className="bg-black" />
              <p className=" m-0 p-0">
                {formatNumber(
                  item?.attributes?.project?.data?.attributes?.budgetMin
                )}
                đ -{" "}
                {formatNumber(
                  item?.attributes?.project?.data?.attributes?.budgetMax
                )}
                đ
              </p>
            </div>
            <div className="flex ">
              <p className=" m-0 p-0">
                {t("application_deadline")}: {item.attributes.deadline}
              </p>
            </div>
          </div>
          {/* <span className="line-clamp-2">{item.attributes.description}</span> */}
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
