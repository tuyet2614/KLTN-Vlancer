import { Button, Col, Input, Row } from "antd";
import { useTranslation } from "react-i18next";
import { RiSearchLine } from "react-icons/ri";
import { getListFreelancer } from "../service/api";
import FreelancerItem from "./FreelancerItem";

const ListFreelancer = () => {
  const { t } = useTranslation("freelancer");
  const getName = (e: any) => {
    console.log(e);
  };

  const data = getListFreelancer();

  console.log("list: ", data);

  return (
    <div className="p-6">
      <Row className="flex">
        <Col span={20}>
          <Input
            placeholder={t("search-placeholder")}
            prefix={<RiSearchLine />}
            onChange={(e: any) => {
              getName(e);
            }}
          />
        </Col>
        <Col span={4}>
          <Button>{t("search")}</Button>
        </Col>
        <div className="w-full">
          <FreelancerItem />
        </div>
      </Row>
    </div>
  );
};

export default ListFreelancer;
