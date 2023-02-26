import { Collapse, Form, Radio, Space } from "antd";
import { useTranslation } from "react-i18next";

interface FilterCheckBoxBaseProps {
  header: string;
  name?: string;
  configsCheckboxs?: { name: string; value: string }[];
}

const FilterCheckBoxBase: React.FC<FilterCheckBoxBaseProps> = ({
  header,
  name,
  configsCheckboxs,
}) => {
  const { t } = useTranslation("filter");
  return (
    <Collapse defaultActiveKey="1" expandIconPosition="end">
      <Collapse.Panel header={t(header)} key="1">
        <Form.Item name={name}>
          <Radio.Group>
            <Space direction="vertical">
              {configsCheckboxs?.map((item, i) => (
                <Radio value={item.value} key={i}>
                  {t(item.name)}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>
      </Collapse.Panel>
    </Collapse>
  );
};

export default FilterCheckBoxBase;
