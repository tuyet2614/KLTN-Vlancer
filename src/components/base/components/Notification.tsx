import i18n from '../../../configs/locale/i18n';
import { notification } from 'antd';

interface NotifiDataType {
  title?: string;
  message: string;
}
const Info = ({ message, title }: NotifiDataType) => {
  notification.info({
    message: title ?? i18n.t('notify.info').toString(),
    description: message,
  });
};

const Success = ({ message, title }: NotifiDataType) => {
  notification.success({
    message: title ?? i18n.t('notify.success').toString(),
    description: message,
  });
};

const Error = ({ message, title }: NotifiDataType) => {
  notification.error({
    message: title ?? i18n.t('notify.error').toString(),
    description: message,
  });
};

const Notification = {
  Info,
  Success,
  Error,
};
export default Notification;
