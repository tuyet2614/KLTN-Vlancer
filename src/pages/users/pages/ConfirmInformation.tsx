import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
  id?: string;
}
const ConfirmInformation = ({ id }: Props) => {
  const { t } = useTranslation("update");
  return (
    <div className="update-form">
      <div>
        <p className="title">{t("confirm-id")}</p>
        <p>{t("confirm-full")}</p>
      </div>
      <div className="form-confirm">
        <div className="p-[30px]">
          <div className="flex items-center check">
            <CheckCircleOutlined style={{ color: "#ccc" }} />
            <span>1. </span>
            <span className="title-confirm">{t("confirm-phone")}</span>
          </div>
          <Divider />

          <ul className="explain-content">
            {t("advantage")}
            <li>{t("believe")}</li>
            <li>{t("contact")}</li>
          </ul>
          <div className="confirm-post">
            <Button htmlType="submit" type="primary">
              {t("confirm-phone")}
            </Button>
          </div>
        </div>
        <Divider />

        <div className="flex items-center check p-[30px]">
          <CheckCircleOutlined style={{ color: "#ccc" }} />
          <span>2. </span>
          <span className="title-confirm">{t("confirm-identifi")}</span>
        </div>

        <Divider />

        <div className="flex items-center check p-[30px]">
          <CheckCircleOutlined style={{ color: "#ccc" }} />
          <span>3. </span>
          <span className="title-confirm">{t("tax-code")}</span>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ConfirmInformation;
