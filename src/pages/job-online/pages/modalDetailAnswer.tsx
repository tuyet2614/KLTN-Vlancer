import { Button, Image, Modal } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useUserStore } from "../../../store/user";
import { api_url } from "../../../untils/string";
import "../style/index.scss";
interface Props {
  isOpen: boolean;
  handleCancel: () => void;
  data: any;
  postId: any;
  setLoading: (item: boolean) => void;
}

const ModalDetailAnswer = ({
  isOpen,
  handleCancel,
  data,
  postId,
  setLoading,
}: Props) => {
  const { t } = useTranslation("contest");
  const { user, setUser } = useUserStore();

  const handleChoose = () => {
    const dataUpdate = {
      choosen: true,
    };
    setLoading(true);

    axios
      .put(`/answers/${data?.id}`, { data: dataUpdate })
      .then((respon: any) => {
        setLoading(false);
        handleCancel();
      })
      .catch((error: any) => {
        setLoading(false);
        console.log("errrro: ", error);
      });
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={false}
      width={800}
      className="answer-modal"
    >
      <div className="modal-detail-answer">
        <div className="w-full file-design">
          <Image
            src={
              api_url +
              data?.attributes?.file?.data[0]?.attributes?.formats?.thumbnail
                .url
            }
            preview={false}
          />
        </div>
        <div className="author">
          <div className="flex gap-5 flex-wrap space-x-10 mb-8">
            <span className="label ">{t("author")}:</span>
            <span className="user">
              {
                data?.attributes?.users_permissions_users?.data?.attributes
                  ?.username
              }
            </span>
          </div>
          <div className="flex gap-5 flex-wrap space-x-10">
            <span className="label">{t("description")}:</span>
            <span>{data?.attributes?.description}</span>
          </div>
          <div className="btn-submit">
            {user?.id === postId && (
              <Button type="primary" onClick={() => handleChoose()}>
                {t("submit")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetailAnswer;
