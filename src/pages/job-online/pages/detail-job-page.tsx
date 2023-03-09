import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Loading from "../../../components/base/components/loading";
import { formatNumber } from "../../../untils/string";
import { getBasicTimeFromTimeStamp } from "../../../untils/time";
import { FormPost } from "../widgets";

function DetailJobPage() {
  const [dataJob, setDataJobs] = useState<any>();
  const [dataRecmt, setDataRecmt] = useState<any>();
  const { t } = useTranslation("jobs-online");
  const location = useLocation();
  const { id } = location.state;
  const token = localStorage.getItem("auth-token");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`/posts/${id}?populate[recommends][populate]=*`)
      .then((res) => setDataRecmt(res.data));
    axios.get(`/posts/${id}?populate=*`).then((res) => setDataJobs(res.data));
  }, [loading]);

  const postId: any = dataJob?.data?.id;

  const configsInfosProject = [
    {
      title: t("detail.Project_info"),
      detail: [
        {
          name: t("detail.Project_ID"),
          info: dataJob?.data?.attributes?.project?.data?.id,
        },
        {
          name: t("detail.created_at"),
          info: getBasicTimeFromTimeStamp(
            dataJob?.data?.attributes?.project?.data?.attributes?.createdAt
          ),
        },
        {
          name: t("detail.address"),
          info: dataJob?.data?.attributes?.project?.data?.attributes?.place,
        },
        {
          name: t("detail.priceMax"),
          info: `${formatNumber(
            dataJob?.data?.attributes?.project?.data?.attributes?.budgetMax
          )}đ`,
        },

        {
          name: t("detail.workType"),
          info: dataJob?.data?.attributes?.project?.data?.attributes?.workType,
        },
        {
          name: t("detail.payType"),
          info: dataJob?.data?.attributes?.project?.data?.attributes?.payType,
        },
      ],
    },
    {
      title: t("detail.users_info"),
      detail: [
        {
          name: t("detail.name"),
          info: dataJob?.data?.attributes?.users_permissions_user?.data
            ?.attributes?.username,
        },
        {
          name: t("detail.invite_at"),
          info: getBasicTimeFromTimeStamp(
            dataJob?.data?.attributes?.users_permissions_user?.data?.attributes
              ?.createdAt
          ),
        },
      ],
    },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="py-16 items-center flex flex-col justify-center space-y-8">
          <div className="flex flex-wrap space-x-14 ">
            <div className="w-[510px] flex flex-col">
              <h1 className="text-4xl font-bold uppercase">
                {dataJob?.data?.attributes?.title}
              </h1>
              <span>{dataJob?.data?.attributes?.description}</span>
            </div>
            <div className="bg-gray-50 shadow-lg p-6">
              <div className="space-y-6">
                {configsInfosProject.map((i) => (
                  <div className="flex flex-col justify-start space-y-4">
                    <h2 className="font-bold">{i.title}</h2>
                    <div>
                      {i.detail.map((item) => (
                        <div>
                          <p className="inline-block w-44 text-gray-400">
                            {item.name}
                          </p>
                          <span>{item.info}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {token && (
            <FormPost
              postId={postId}
              loading={loading}
              setLoading={setLoading}
            />
          )}
          <div className="space-y-5">
            {dataRecmt?.data?.attributes?.recommends?.data?.map(
              (recmt: any) => (
                <div key={recmt.id} className="bg-gray-50 shadow-lg p-6">
                  <h2 className="text-blue-500">
                    {
                      recmt?.attributes?.users_permissions_user?.data
                        ?.attributes?.username
                    }
                  </h2>
                  <div>
                    <p className="w-32 inline-block">{t("detail.invite_at")}</p>
                    <span>
                      {getBasicTimeFromTimeStamp(
                        recmt?.attributes?.users_permissions_user?.data
                          ?.attributes?.updatedAt
                      )}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default DetailJobPage;
