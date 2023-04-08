import { Button, DatePicker, Divider, Form, Input, InputNumber } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { Dispatch } from "react";
import { useTranslation } from "react-i18next";
import { useUserStore } from "../../../store/user";
import authApi from "../../../constant/http-auth-common";
import { formatNumberStr, numberParser } from "../../../untils/string";

interface FormPostProps {
  postId: any;
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const FormPost: React.FC<FormPostProps> = ({ postId, setLoading }) => {
  const nowDay = new Date();
  const customDay = dayjs(nowDay).format("YYYY/MM/DD HH:mm");
  const { t } = useTranslation("jobs-online");
  const { user, setUser } = useUserStore();

  const onFinish = (e: any) => {
    const dateValue = dayjs(e.date)
      .endOf("D")
      .format("YYYY-MM-DD");
    setLoading(true);
    authApi
      .post(`/recommends`, {
        data: {
          price: e.price,
          deadline: dateValue,
          description: e.description,
          users_permissions_user: user?.id,
          post: postId,
          file: [],
          status: "comment",
        },
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="bg-gray-50 shadow-lg p-6 px-10 ">
      <h1 className="p-0 m-0">{t("detail.info_price")}</h1>
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
              rules={[{ required: true, message: t("detail.messagePrice") }]}
              label={t("detail.want_price")}
            >
              <div className="flex w-80 space-x-2 border border-gray-300 items-center p-2 rounded-lg">
                <p className="w-36">{t("detail.price_want")}</p>
                <InputNumber className=" flex-1" controls={false} />
              </div>
            </Form.Item>
            <Form.Item name="date" label={t("detail.deadline")} required>
              <DatePicker
                tabIndex={2}
                className="w-full"
                size="large"
                disabledDate={(d) => !d || d.isBefore(customDay)}
                format="DD/MM/YYYY"
                placeholder={t("detail.deadline")}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="description"
              required={true}
              rules={[
                { required: true, message: t("detail.messagedescription") },
              ]}
              label={t("detail.PROPOSED")}
            >
              <div className="flex flex-col items-center p-2 h-60">
                <p>{t("detail.ques")}</p>
                <Input.TextArea className="flex-1" />
              </div>
            </Form.Item>
          </div>
        </div>
      </Form>
      <div className="justify-end flex">
        <Button type="primary" htmlType="submit" form="form" className="w-40">
          {t("detail.send")}
        </Button>
      </div>
    </div>
  );
};
