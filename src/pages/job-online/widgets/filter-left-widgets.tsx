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
  const onFilterCategoriesGroup = (value: any) => {};
  const { t } = useTranslation("filter");

  return (
    <div className="space-y-4 w-[250px]">
      <FilterCategories onFilterCategoriesGroup={onFilterCategoriesGroup} />
      {buttonTop !== "contest" && (
        <>
          <FilterService
            autoOpen={true}
            header={t("service")}
            name="createById_in"
            placeholder={t("creator", { ns: "import_manager" })}
          />
          <FilterCheckBoxBase
            header="status"
            name="status"
            configsCheckboxs={[
              { name: "all", value: "all" },
              { name: "accepting", value: "accepting" },
              { name: "assigned", value: "assigned" },
            ]}
          />
          <FilterCheckBoxBase
            header="pattern"
            name="pattern"
            configsCheckboxs={[
              { name: "all", value: "all" },
              { name: "online", value: "online" },
              { name: "office", value: "office" },
            ]}
          />
          <FilterCheckBoxBase
            header="Payment"
            name="Payment"
            configsCheckboxs={[
              { name: "all", value: "all" },
              { name: "project", value: "project" },
              { name: "hour", value: "hour" },
              { name: "month", value: "month" },
            ]}
          />
          <FilterCity
            autoOpen={true}
            header={t("city")}
            name="filterCity"
            placeholder={t("creator", { ns: "import_manager" })}
          />
          <FilterSkill autoOpen={true} header={t("skill")} name="filterCity" />
        </>
      )}
    </div>
  );
};
