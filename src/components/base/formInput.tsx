import { Form, Input } from "antd";

interface Props {
  placeholder?: string;
  label?: string;
  name?: string;
}

const FormInput = ({ placeholder, label, name }: Props) => {
  return (
    <Form.Item label={label} name={name}>
      <Input placeholder={placeholder} />
    </Form.Item>
  );
};

export default FormInput;
