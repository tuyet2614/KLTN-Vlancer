import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

interface InputSearchProps {
  placeholderSearch: string;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholderSearch,
}) => {
  const { t } = useTranslation("jobs-online");
  return (
    <div className=" py-6 justify-center flex space-x-8  ">
      <Form.Item name="search" className="w-[600px] !my-0 !py-0">
        <div className="flex items-center border px-3 rounded-lg ">
          <SearchOutlined className="text-2xl " />
          <Input
            className="!border-none focus:!ring-0 "
            placeholder={t(placeholderSearch)}
          />
        </div>
      </Form.Item>
      <Form.Item className="!my-0 !py-0">
        <Button type="primary" htmlType="submit" className="w-[150px] ">
          {t("search")}
        </Button>
      </Form.Item>
    </div>
  );
};
