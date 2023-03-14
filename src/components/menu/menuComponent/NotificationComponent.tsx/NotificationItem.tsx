import Icon from "../../../Icon";
// import { convertTimeUTCToLocalTime } from '@untils/date';
import { FC } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { convertTimeUTCToLocalTime } from "../../../../untils/date";
interface Props {
  index: number;
  data: any;
  onClick: (id: string, index: number) => void;
}
export const NotificationItem: FC<Props> = (props) => {
  const { data, onClick, index } = props;

  return (
    // <Link to={`${data.link?.url ?? '#'}`} onClick={() => onClick(data.id, index)}>
    <Link to="#" onClick={() => onClick(data.id, index)}>
      <div className={`flex border py-3 cursor-pointer hover:bg-zinc-50`}>
        <div className="px-3">
          {!data.read ? (
            <Icon name="blueNotification" />
          ) : (
            <Icon name="grayNotification" />
          )}
        </div>
        <div className="w-80 content-notification">
          <span
            className={`bc-neutral6 cursor-pointer line-clamp line-clamp-2 text-base ${
              !data.read && "font-semibold"
            }`}
          >
            {" "}
            {parse(data.content)}
          </span>
          <div
            className={`${
              data.read ? "text-gray-400" : "text-sky-600"
            }  mt-2 text-sm`}
          >
            {convertTimeUTCToLocalTime(data.createdAt || data.updatedAt)}
          </div>
        </div>
        {!data.read && (
          <span className="bg-sky-600  w-2 h-2 rounded-full self-center mx-2" />
        )}
      </div>
    </Link>
  );
};
