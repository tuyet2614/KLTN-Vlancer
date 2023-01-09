import { Form, Select } from "antd";

interface Props {
  label?: string;
  defaultValue?: string;
  options?: any;
  onchange?: () => void;
}
const ChooseItem = ({ defaultValue, options, onchange, label }: Props) => {
  return (
    <Form.Item label={label} className="label-content">
      <Select
        defaultValue={defaultValue}
        options={options}
        onChange={onchange}
      />
    </Form.Item>
  );
};

export default ChooseItem;
