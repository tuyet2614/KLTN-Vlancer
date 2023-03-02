import { Form, Select } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
  label?: string;
  defaultValue?: string;
  options?: any;
  onchange?: () => void;
  name?: string;
}
const ChooseItem = ({
  defaultValue,
  options,
  onchange,
  label,
  name,
}: Props) => {
  const { t } = useTranslation("");

  return (
    <Form.Item label={label} className="label-content" name={name}>
      <Select placeholder="categories" allowClear>
        {options?.map((item: any) => (
          <Select.Option value={item?.id} key={item?.id}>
            {t(item?.attributes?.name)}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default ChooseItem;
