import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import ServiceItem from "./serviceItem";

const ListService = () => {
  const { t } = useTranslation("service");
  const { id }: any = useParams();
  console.log("title: ", id);

  return (
    <div>
      <p>{t(id)}</p>
      <p>{t("counter-service", { count: 5, name: "web" })}</p>
      <ServiceItem />
    </div>
  );
};

export default ListService;
