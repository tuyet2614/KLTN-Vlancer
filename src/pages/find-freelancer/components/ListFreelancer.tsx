import { Button, Col, Input, Row } from "antd";
import { useTranslation } from "react-i18next";
import { RiSearchLine } from "react-icons/ri";
import { getListFreelancer } from "../service/api";
import { FreelancerItem } from "./FreelancerItem";

const ListFreelancer = () => {
  const { t } = useTranslation("freelancer");
  const getName = (e: any) => {
    console.log(e);
  };

  const data = getListFreelancer();

  console.log("list freelancer: ", data);

  return (
    <div className="p-6">
      <div className="w-full">
        {data.map((item) => (
          <FreelancerItem data={item} />
        ))}
      </div>
    </div>
  );
};

export default ListFreelancer;
