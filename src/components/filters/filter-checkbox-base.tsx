import { Collapse, Form, Radio, RadioChangeEvent, Space } from "antd";
import { useTranslation } from "react-i18next";

interface FilterCheckBoxBaseProps {
  header: string;
  name?: string;
  configsCheckboxs?: { name: string; value: string }[];
  onChangeCheckbox?: (e: RadioChangeEvent) => void;
}

const FilterCheckBoxBase: React.FC<FilterCheckBoxBaseProps> = ({
  header,
  name,
  configsCheckboxs,
  onChangeCheckbox,
}) => {
  const { t } = useTranslation("filter");
  return (
    <Collapse defaultActiveKey="1" expandIconPosition="end">
      <Collapse.Panel header={t(header)} key="1">
        <Form.Item name={name} initialValue="all">
          <Radio.Group>
            <Space direction="vertical">
              {configsCheckboxs?.map((item, i) => (
                <Radio value={item.value} key={i} onChange={onChangeCheckbox}>
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
