import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Loading from "../../../components/base/components/loading";
import { api_url, formatNumberStr } from "../../../untils/string";
import { getBasicTimeFromTimeStamp } from "../../../untils/time";
import { getDetailTest } from "../service/api";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import { Image } from "antd";

const DetailTest = () => {
  const { t } = useTranslation("contest");
  const { id } = useParams();
  const { data, isLoading } = getDetailTest(id);

  const avatar: string =
    api_url +
    data?.data?.attributes?.user?.data?.attributes?.avatar?.data?.attributes
      ?.formats?.thumbnail.url;

  const configsInfosProject = [
    {
      title: t("detail.Project_info"),
      detail: [
        {
          name: t("detail.Project_ID"),
          info: data?.data?.id,
        },
        {
          name: t("detail.created_at"),
          info: getBasicTimeFromTimeStamp(data?.data?.attributes?.createdAt),
        },
        {
          name: t("detail.address"),
          info: t("detail.nation"),
        },
        {
          name: t("detail.priceMax"),
          info: `${formatNumberStr(data?.data?.attributes?.prize)}đ`,
        },
      ],
    },
  ];
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="py-16 items-center flex flex-col  justify-center space-y-8">
          <div className="flex flex-wrap space-x-14 ">
            <div className="w-[510px] flex flex-col">
              <h1 className="text-4xl font-bold uppercase">
                {data?.data?.attributes?.title}
              </h1>
              <span>
                {t("detail.need-service")}:{" "}
                {data?.data?.attributes?.service?.service}
              </span>
              <span>{data?.data?.attributes?.description?.des}</span>
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
              <div className="space-y-6">
                <div className="flex flex-col justify-start space-y-4">
                  <h2 className="font-bold">{t("detail.users_info")}</h2>
                  <div>
                    <div>
                      <Image
                        src={avatar ? avatar : avatarDefault}
                        preview={false}
                        className="avatar"
                      />
                    </div>
                    <div>
                      {data?.data?.attributes?.user?.data?.attributes?.username}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {token && (
            <FormPost
              postId={postId}
              loading={loading}
              setLoading={setLoading}
            />
          )} */}
          {/* <div className="space-y-5">
            {dataRecmt?.data?.attributes?.recommends?.data?.map(
              (recmt: any) => {
                return (
                  <div
                    key={recmt.id}
                    className={`bg-gray-50 shadow-lg ${renderBgCmt(
                      recmt.id
                    )} p-6 `}
                  >
                    <div className="flex justify-between">
                      <h2 className="text-blue-500">
                        {
                          recmt?.attributes?.users_permissions_user?.data
                            ?.attributes?.username
                        }
                      </h2>
                      <span
                        onClick={() =>
                          navigate(systemRoutes.Detail_Cmt_ROUTE, {
                            state: { id: recmt.id },
                          })
                        }
                        hidden={
                          recmt.attributes?.users_permissions_user?.data
                            ?.attributes?.email !== user?.email
                        }
                        className="hover:scale-105 duration-200 cursor-pointer text-green-400"
                      >
                        {">>"}
                        {t("detail.seeMore")}
                      </span>
                    </div>
                    <div>
                      <p className="w-32 inline-block">
                        {t("detail.invite_at")}
                      </p>
                      <span>
                        {getBasicTimeFromTimeStamp(
                          recmt?.attributes?.users_permissions_user?.data
                            ?.attributes?.updatedAt
                        )}
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div> */}
        </div>
      )}
    </>
  );
};

export default DetailTest;
