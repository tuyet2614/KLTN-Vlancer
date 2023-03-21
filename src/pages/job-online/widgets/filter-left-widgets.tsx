import { RadioChangeEvent } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { useTranslation } from "react-i18next";
import FilterCheckBoxBase from "../../../components/filters/filter-checkbox-base";
import FilterCategories from "../../../components/filters/FilterCategories";
import FilterCity from "../../../components/filters/FilterCity";
import FilterService from "../../../components/filters/FilterService";
import FilterSkill from "../../../components/filters/FilterSkill";

interface FilterLeftWidgetsProps {
  buttonTop: string;
}

export const FilterLeftWidgets: React.FC<FilterLeftWidgetsProps> = ({
  buttonTop,
}) => {
  const { t } = useTranslation("filter");

  return (
    <div className="space-y-4 w-[250px]">
      <FilterCategories header={t("categories")} name="category" />
      {buttonTop !== "contest" && (
        <>
          <FilterService
            autoOpen={true}
            header={t("service")}
            name="service"
            placeholder={t("creator", { ns: "import_manager" })}
          />
          <FilterCheckBoxBase
            header="status"
            name="status"
            configsCheckboxs={[
              { name: "all", value: "all" },
              { name: "accepting", value: "requested" },
              { name: "assigned", value: "pendind" },
            ]}
          />

          <FilterCheckBoxBase
            header="Payment"
            name="payment"
            configsCheckboxs={[
              { name: "all", value: "all" },
              { name: "project", value: "Trả theo dự dán" },
              { name: "hour", value: "Trả theo giờ" },
              { name: "month", value: "Trả theo tháng" },
            ]}
          />
          <FilterCity
            autoOpen={true}
            header={t("city")}
            name="city"
            placeholder={t("creator", { ns: "import_manager" })}
          />
          <FilterSkill autoOpen={true} header={t("skill")} name="skill" />
        </>
      )}
    </div>
  );
};
