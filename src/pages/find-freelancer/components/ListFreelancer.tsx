import { Button, Col, Input, Row } from "antd";
import { useTranslation } from "react-i18next";
import { RiSearchLine } from "react-icons/ri";
import { getListFreelancer } from "../service/api";
import { FreelancerItem } from "./FreelancerItem";

interface Props {
  data: any;
}

const ListFreelancer = ({ data }: Props) => {
  const { t } = useTranslation("freelancer");
  const getName = (e: any) => {
    console.log(e);
  };

  return (
    <div className="p-6">
      <div className="w-full">
        {data.map((item: any) => (
          <FreelancerItem data={item} />
        ))}
      </div>
    </div>
  );
};

export default ListFreelancer;
