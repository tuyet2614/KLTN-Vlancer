import { Button, Divider } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import { formatNumber } from "../../../untils/string";
import { getBasicTimeFromTimeStamp } from "../../../untils/time";

interface DetailCmtPageProps {}

const DetailCmtPage: React.FC<DetailCmtPageProps> = ({}) => {
  const location = useLocation();
  const { t } = useTranslation("jobs-online");
  const { id } = location?.state;
  console.log("iddddd: ", id);
  const navigate = useNavigate();
  const [detailCmt, setDetailCmt] = useState<any>();
  useEffect(() => {
    axios
      .get(`/recommends/${id}?populate=*`)
      .then((res) => setDetailCmt(res.data.data));
  }, []);

  const handleChoose = () => {
    const dataUpdate = {
      ...detailCmt?.attributes?.post?.data?.attributes,
      status: "pendind",
      idRecommendRecieved: id,
    };
    const post_id = detailCmt?.attributes?.post?.data?.id;

    const updateComment = {
      ...detailCmt?.attributes,
      status: "chosen",
    };

    axios
      .put(`/posts/${post_id}`, { data: dataUpdate })
      .then((resss: any) => {
        axios.put(`/recommends/${id}`, { data: updateComment });
        navigate(systemRoutes.Detail_Job_ROUTE, {
          state: { id: post_id, type: "post" },
        });
      })
      .catch((err: any) => console.log(err));
  };

  const configsInfoCmt = [
    {
      name: t("Cmt.Cmt_ID"),
      info: detailCmt?.id,
    },
    {
      name: t("Cmt.user_name"),
      info:
        detailCmt?.attributes?.users_permissions_user?.data?.attributes
          ?.username,
    },
    {
      name: t("Cmt.createdAt"),
      info: getBasicTimeFromTimeStamp(detailCmt?.attributes?.createdAt),
    },
    {
      name: t("Cmt.dead_line"),
      info: getBasicTimeFromTimeStamp(detailCmt?.attributes?.deadline),
    },
    {
      name: t("Cmt.price"),
      info: `${formatNumber(detailCmt?.attributes?.price)}đ`,
    },

    {
      name: t("Cmt.description"),
      info: detailCmt?.attributes?.description,
    },
    // {
    //   name: t("Cmt.Cmt_ID"),
    //   info: detailCmt?.attributes?.project?.data?.attributes?.payType,
    // },
  ];

  return (
    <div className=" p-7 bg-white rounded-lg shadow-lg w-[900px] mx-auto my-20">
      <h1 className="p-0 m-0 font-bold text-lg uppercase">
        {t("Cmt.infoCmt")}{" "}
        {
          detailCmt?.attributes?.users_permissions_user?.data?.attributes
            ?.username
        }{" "}
        {t("Cmt.infoCmt1")}{" "}
        <span className="text-blue-400">
          {detailCmt?.attributes?.post?.data?.attributes?.title}
        </span>
      </h1>
      <Divider />
      <div>
        {configsInfoCmt.map((item) => (
          <div>
            <p className="inline-block w-60 text-gray-400">{item.name}</p>
            <span>{item.info}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <Button
          className="!bg-green-500 !text-white "
          onClick={handleChoose}
          hidden={
            detailCmt?.attributes?.post?.data?.attributes
              ?.idRecommendRecieved !== null
          }
        >
          {t("Cmt.button")}
        </Button>
      </div>
    </div>
  );
};

export default DetailCmtPage;
