import { Image } from 'antd';
import searchStatusIcon from '@assets/images/icon/search-status.svg';
import { useTranslation } from 'react-i18next';

interface Props {
  message?: string | 'none';
  icon?: string | 'none';
}

export default function NoResult({ message, icon }: Props) {
  const { t } = useTranslation('commodity');

  if (icon === 'none') {
    console.error('[Naming - NoResult] - Không được đặt tên icon là none nhé bro');
  }

  if (message === 'none') {
    console.error('[Naming - NoResult] - Không được đặt message là none nhé bro');
  }

  return (
    <div className="flex justify-items-center	items-center flex-col gap-3">
      {icon !== 'none' && <Image src={icon || searchStatusIcon} alt="search icon" preview={false} />}
      {message !== 'none' && <p>{t(message ? message : 'result_not_found')}</p>}
    </div>
  );
}
