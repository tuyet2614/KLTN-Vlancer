import { Row } from "antd";
import { useTranslation } from "react-i18next";
import FilterCategories from "../../../components/filters/FilterCategories";
import FilterCity from "../../../components/filters/FilterCity";
import FilterService from "../../../components/filters/FilterService";
import FilterSkill from "../../../components/filters/FilterSkill";
import FilterStatus from "../../../components/filters/FilterStatus";

interface FilterLeftProps {
  onValuesChange: (values: any) => void;
}

const FilterLeft = ({ onValuesChange }: FilterLeftProps) => {
  const { t } = useTranslation("filter");
  const onFilterCategoriesGroup = (values: any) => {
    onValuesChange({ categoryId_eq: values[0] });
  };
  return (
    <div className="filter-container">
      <FilterCategories
        // onFilterCategoriesGroup={onFilterCategoriesGroup}
        name="category"
        header={t("categories")}
      />
      <FilterService
        autoOpen={true}
        header={t("service")}
        name="service"
        placeholder={t("creator", { ns: "import_manager" })}
        // onChangeValue={handleChangeFilterCreateBy}
      />
      <FilterStatus header={t("status")} name="status" />
      <FilterCity
        autoOpen={true}
        header={t("city")}
        name="city"
        placeholder={t("creator", { ns: "import_manager" })}
      />

      <FilterSkill autoOpen={true} header={t("skill")} name="skill" />
    </div>
  );
};

export default FilterLeft;
