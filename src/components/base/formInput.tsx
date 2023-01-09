import { Form, Input } from "antd";

interface Props {
  placeholder?: string;
  label?: string;
}

const FormInput = ({ placeholder, label }: Props) => {
  return (
    <Form.Item label={label}>
      <Input placeholder={placeholder} />
    </Form.Item>
  );
};

export default FormInput;
