import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ServiceItem from "./serviceItem";

const ListService = () => {
  const { t } = useTranslation("service");
  const { id }: any = useParams();

  return (
    <div className="menu-service">
      <p className="title">{t(id)}</p>
      <p className="counter-service">
        {t("counter-service", { count: 5, name: "web" })}
      </p>
      <ServiceItem />
    </div>
  );
};

export default ListService;
