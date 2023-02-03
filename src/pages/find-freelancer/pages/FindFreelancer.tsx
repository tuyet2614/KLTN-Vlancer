import { Col, Row, Tabs } from "antd";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import FilterLeft from "../components/FilterLeft";
import FilterTop from "../components/FilterTop";
import ListFreelancer from "../components/ListFreelancer";


const FindFreelancer = () => {
  const { t } = useTranslation("");
  const onFilter = () => {};

  return (
    <div className="p-4">
      <Row className="flex gap-5" gutter={24}>
        <Col span={4}>
          <FilterLeft onValuesChange={onFilter} />
        </Col>
        <Col className="bg-white" span={18}>
          <Tabs
            items={[
              {
                label: (
                  <div className="w-[152px] flex justify-center">
                    {t("in4")}
                  </div>
                ),
                key: "item-1",
                children: <ListFreelancer />,
              },
              {
                label: (
                  <div className="w-[233px] flex justify-center">
                    {t("careProducts")}
                  </div>
                ),
                key: "item-2",
                children: "Content 2",
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FindFreelancer;
