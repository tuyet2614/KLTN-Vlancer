import { Button, DatePicker, Divider, Form, Input, InputNumber } from "antd";
import axios from "axios";
import dayjs from "dayjs";

interface FormPostProps {
  postId: any;
}

export const FormPost: React.FC<FormPostProps> = ({ postId }) => {
  const nowDay = new Date();
  const customDay = dayjs(nowDay).format("YYYY/MM/DD HH:mm");

  const onFinish = (e: any) => {
    const dateValue = dayjs(e.date).endOf("D").format("YYYY-MM-DD");
    axios.post(`/recommends`, {
      data: {
        price: e.price,
        deadline: dateValue,
        description: e.description,
        users_permissions_user: "1",
        post: postId,
        file: [],
      },
    });
  };
  return (
    <div className="bg-gray-50 shadow-lg p-6 px-10 ">
      <h1 className="p-0 m-0">THÔNG TIN CHÀO GIÁ</h1>
      <Divider className="bg-gray-300" />
      <Form
        className="flex justify-start"
        layout="vertical"
        onFinish={onFinish}
        id="form"
      >
        <div className="flex space-x-10">
          <div className="">
            <Form.Item
              name="price"
              required={true}
              rules={[{ required: true }]}
              label={"ĐỀ XUẤT CHI PHÍ"}
            >
              <div className="flex w-80 space-x-2 border border-gray-300 items-center p-2 rounded-lg">
                <p className="w-36">
                  Bạn muốn nhận (mức phí thực nhận cho dự án)
                </p>
                <InputNumber className=" flex-1" />
              </div>
            </Form.Item>
            <Form.Item name="date" label={"NGÀY DỰ KIẾN HOÀN THÀNH"} required>
              <DatePicker
                tabIndex={2}
                className="w-full"
                size="large"
                disabledDate={(d) => !d || d.isBefore(customDay)}
                format="DD/MM/YYYY"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="description"
              required={true}
              rules={[{ required: true }]}
              label={"ĐỀ XUẤT CHI PHÍ"}
            >
              <div className="flex flex-col items-center p-2 h-60">
                <p>
                  Bạn có những kinh nghiệm và kỹ năng nào phù hợp với dự án này?
                </p>
                <Input.TextArea className="flex-1" />
              </div>
            </Form.Item>
          </div>
        </div>
      </Form>
      <div className="justify-end flex">
        <Button type="primary" htmlType="submit" form="form" className="w-40">
          Gửi chào giá
        </Button>
      </div>
    </div>
  );
};
