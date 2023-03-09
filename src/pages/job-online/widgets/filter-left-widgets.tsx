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
  const onFilterCategoriesGroup = (value: any) => {
    console.log("1", value);
  };
  const onChangeValue1 = (checkedValues: CheckboxValueType[]) => {
    console.log("2", checkedValues);
  };
  const onChangeValue2 = (checkedValues: CheckboxValueType[]) => {
    console.log("6", checkedValues);
  };
  const onChangeValue3 = (checkedValues: CheckboxValueType[]) => {
    console.log("7", checkedValues);
  };

  const onChangeCheckbox1 = (value: RadioChangeEvent) => {
    console.log("3", value);
  };
  const onChangeCheckbox2 = (value: RadioChangeEvent) => {
    console.log("4", value);
  };
  const onChangeCheckbox3 = (value: RadioChangeEvent) => {
    console.log("5", value);
  };
  const { t } = useTranslation("filter");

  return (
    <div className="space-y-4 w-[250px]">
      <FilterCategories onFilterCategoriesGroup={onFilterCategoriesGroup} />
      {buttonTop !== "contest" && (
        <>
          <FilterService
            onChangeValue={onChangeValue1}
            autoOpen={true}
            header={t("service")}
            name="createById_in"
            placeholder={t("creator", { ns: "import_manager" })}
          />
          <FilterCheckBoxBase
            onChangeCheckbox={onChangeCheckbox1}
            header="status"
            name="status"
            configsCheckboxs={[
              { name: "all", value: "all" },
              { name: "accepting", value: "accepting" },
              { name: "assigned", value: "assigned" },
            ]}
          />
          <FilterCheckBoxBase
            onChangeCheckbox={onChangeCheckbox2}
            header="pattern"
            name="pattern"
            configsCheckboxs={[
              { name: "all", value: "all" },
              { name: "online", value: "online" },
              { name: "office", value: "office" },
            ]}
          />
          <FilterCheckBoxBase
            onChangeCheckbox={onChangeCheckbox3}
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
            onChangeValue={onChangeValue2}
            autoOpen={true}
            header={t("city")}
            name="filterCity"
            placeholder={t("creator", { ns: "import_manager" })}
          />
          <FilterSkill
            autoOpen={true}
            header={t("skill")}
            name="filterCity"
            onChangeValue={onChangeValue3}
          />
        </>
      )}
    </div>
  );
};
