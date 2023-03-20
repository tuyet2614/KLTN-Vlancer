import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/Icon";
import { systemRoutes } from "../../routes";
import "./style/index.scss";

const SearchService = () => {
  const { t } = useTranslation("service");
  const navigate = useNavigate();
  return (
    <div className="search-service">
      <p className="title">{t("all")}</p>
      <div className="service-item">
        <div className="flex items-center gap-3">
          <div className="logo flex items-center justify-center">
            <Icon name="itProgram" />
          </div>
          <p className="item-title m-0">{t("it")}</p>
        </div>
        <div className="pl-10">
          <p className="item-service">{t("web")}</p>
          <p className="item-service">{t("another_program")}</p>
          <p className="item-service">{t("software")}</p>
          <p className="item-service">{t("seo")}</p>
        </div>
      </div>
      <div className="banner">
        <p className="experience">{t("experience")}</p>
        <Button
          className="btn-post"
          onClick={() => navigate(systemRoutes.POST_SERVICE_ROUTE)}
        >
          {t("post-service")}
        </Button>
      </div>
    </div>
  );
};

export default SearchService;
