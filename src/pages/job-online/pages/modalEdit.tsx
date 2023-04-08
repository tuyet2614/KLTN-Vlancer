import { DatePicker, Form, Input, InputNumber, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useTranslation } from "react-i18next";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  comment: any;
}

const ModalEditComment = ({ isOpen, handleClose, comment }: Props) => {
  const { t } = useTranslation("jobs-online");
  return (
    <div>
      <Modal title={t("edit-comment")} open={isOpen} onCancel={handleClose}>
        <Form>
          <div>
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
                // disabledDate={(d) => !d || d.isBefore(customDay)}
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
        </Form>
      </Modal>
    </div>
  );
};

export default ModalEditComment;
