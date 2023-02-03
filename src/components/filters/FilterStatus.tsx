import { Collapse, Form, Radio, Space } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
  header: string;
  name?: string;
}

const FilterStatus = ({header, name }: Props) => {
  const { t } = useTranslation("filter");
  return (
    <Collapse defaultActiveKey="1" expandIconPosition="end">
      <Collapse.Panel header={t(header)} key="1">
        <Form.Item name={name || "status"}>
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="all">{t("all")}</Radio>
              <Radio value="verified">{t("verified")}</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </Collapse.Panel>
    </Collapse>
  );
};

export default FilterStatus;
