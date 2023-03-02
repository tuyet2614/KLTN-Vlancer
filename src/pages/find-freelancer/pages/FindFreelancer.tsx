import { Col, Form, Pagination, Row, Tabs } from "antd";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { InputSearch } from "../../../components/base/components/InputSearch";
import { ButtonTopSearch } from "../components/button-top-search";
import FilterLeft from "../components/FilterLeft";
import ListFreelancer from "../components/ListFreelancer";

const FindFreelancer = () => {
  const { t } = useTranslation("");
  const onFilter = () => {};
  const [buttonTop, setButtonTop] = useState("all");

  return (
    <Form>
      <div className="p-8 overflow-x-scroll flex space-x-8">
        <FilterLeft onValuesChange={onFilter} />
        <div className="flex-1 flex flex-col border bg-white rounded-lg shadow-lg">
          <ButtonTopSearch
            SetButtonTop={setButtonTop}
            buttonTop={buttonTop}
            configsButtonTop={["all", "verified"]}
          />
          <InputSearch placeholderSearch="placeholder-search-freelancer" />
          <ListFreelancer />
          <div className="flex justify-center mb-6">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FindFreelancer;
