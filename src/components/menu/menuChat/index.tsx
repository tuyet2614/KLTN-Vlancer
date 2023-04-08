import { Image, Popover } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BELL_IMG from "@assets/images/icon/bell.svg";
import PerfectScrollbar from "react-perfect-scrollbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { isEmpty } from "lodash";
import Loading from "../../base/components/loading";
import { NoResult } from "../../base/components/EmptyTable";
import EnvelopImg from "@assets/images/envelop.png";
import { ChatItem } from "./chatItem";
import CHAT_IMG from "@assets/images/icon/chat.svg";
const ChatMenu = () => {
  const { t } = useTranslation("chat");
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Array<any>>([]);
  const notificationsFetchData: any = [];
  const isLoading = false;
  const fetchData = () => {};
  const _readNotification = async (id: string, index: number) => {
    if (!!id && id !== "") {
      const tempNotifications = [...notifications];
      tempNotifications[index].read = true;
      setNotifications(tempNotifications);
    }
  };

  //   const fetchData = () => {
  //     if ((notificationsFetchData?.notifications.items ?? []).length > 0 && !isLoading) {
  //       setStateFetch(StateFetch.GETTING_MORE);
  //       setFilters((prev) => ({...prev, offset: (prev.offset || 0) + AmountRequest.NOTIFICATION}));
  //     }
  //   };
  const onClickIcon = (id: string, index: number) => {
    _readNotification(id, index);
  };

  const isSeenAllNotification: any = [];
  const content = (
    <div className="box-notification w-[22em]">
      <div className="header-notification flex justify-between py-4 pl-6 border-b border-gray-300">
        <p className="font-bold text-xl mb-0">{t("letter_box")}</p>
        {/* <span onClick={closeNotification}>
          <Icon name="x-close-black" className="cursor-pointer" />
        </span> */}
      </div>
      <PerfectScrollbar>
        <div
          id="scrollable-notification"
          className="max-h-[460px] overflow-y-auto "
        >
          <InfiniteScroll
            dataLength={notificationsFetchData?.notifications?.totalItems || 0}
            next={fetchData}
            hasMore={
              notificationsFetchData?.notifications?.pageInfo.hasNextPage ||
              false
            }
            loader={<Loading />}
            scrollableTarget={"scrollable-notification"}
          >
            {isEmpty(notifications) ? (
              <div className="mt-10 mb-10 empty-notification w-[22em]">
                <NoResult icon={EnvelopImg} message={t("no_notification")} />
              </div>
            ) : (
              <>
                <div>
                  {notifications?.map((item, index) => (
                    <ChatItem
                      data={item}
                      index={index}
                      key={index}
                      onClick={onClickIcon}
                    />
                  ))}
                </div>
                {isLoading && <Loading />}
              </>
            )}
          </InfiniteScroll>
        </div>
      </PerfectScrollbar>
    </div>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      open={isOpen}
      onOpenChange={(status) => setIsOpen(status)}
      overlayClassName="popup-notification"
      placement="bottom"
    >
      <Image
        src={CHAT_IMG}
        alt="chat_img"
        preview={false}
        className="cursor-pointer"
      />
      <span
        className={`${!isSeenAllNotification &&
          "bg-red-600  absolute w-1.5 h-1.5 rounded-full top-12"}`}
      ></span>
    </Popover>
  );
};

export default ChatMenu;
