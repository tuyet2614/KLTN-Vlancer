import { Image } from "antd";
import avatarDefault from "@assets/images/icon/avatar.jpg";
import { EyeOutlined, HeartFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import { api_url } from "../../../untils/string";

interface Props {
  items: any;
}

const ExperienceItem = ({ items }: Props) => {
  const { t } = useTranslation("service");
  console.log("iteeeemm: ", items);
  const navigate = useNavigate();
  return (
    <div className="portfolio">
      <div
        className="p-img"
        onClick={() => navigate(systemRoutes.DETAIL_PROFILE_ROUTE(items.id))}
      >
        <Image
          className="lazyloaded"
          src={
            api_url +
            items?.attributes?.files?.data?.attributes?.formats?.thumbnail?.url
          }
          preview={false}
        />
      </div>
      <div className="p-about-m">
        <p
          className="title"
          onClick={() => navigate(systemRoutes.DETAIL_PROFILE_ROUTE(items.id))}
        >
          {items?.attributes?.title}
        </p>
        <p className="author">
          {
            items?.attributes?.users_permissions_users?.data[0]?.attributes
              ?.username
          }
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
