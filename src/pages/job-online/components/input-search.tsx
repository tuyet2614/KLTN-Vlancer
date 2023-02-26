import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

interface InputSearchProps {}

export const InputSearch: React.FC<InputSearchProps> = () => {
  const { t } = useTranslation("jobs-online");
  return (
    <div className="py-6 justify-center flex space-x-8">
      <Form.Item name="search" className="w-[600px]">
        <Input className="" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-[150px]">
          {t("search")}
        </Button>
      </Form.Item>
    </div>
  );
};
