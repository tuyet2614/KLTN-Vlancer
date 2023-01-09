import flag from "@assets/images/icon/Flag.svg";
import flagEn from "@assets/images/icon/FlagEn.svg";
import i18n from "../../../configs/locale/i18n";
import { Image, Menu, Popover } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

interface Props {
  isDisplayCurrentText?: boolean;
}

export default function ChangeLanguageComponent({
  isDisplayCurrentText,
}: Props) {
  const { t } = useTranslation();
  const [cookies, setCookie] = useCookies(["ln"]);
  const currentLag = cookies["ln"] === "en" ? false : true;

  useEffect(() => {
    i18n.changeLanguage(cookies["ln"]);
  }, []);

  const [stateIcon, setStateIcon] = useState(currentLag);
  const changeLanguage = (lng: string) => () => {
    if (lng === "vi") {
      setStateIcon(true);
      i18n.changeLanguage(lng);
      setCookie("ln", "vi");
    } else {
      setStateIcon(false);
      i18n.changeLanguage(lng);
      setCookie("ln", "en");
    }
  };
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const menu = (
    <Menu
      className="languagePopover"
      items={[
        {
          label: <>{t("language.vi")}</>,
          key: "0",
          onClick: changeLanguage("vi"),
          icon: <Image src={flag} alt="logo" preview={false} />,
        },
        {
          label: <>{t("language.en")}</>,
          key: "1",
          onClick: changeLanguage("en"),
          icon: <Image src={flagEn} alt="logo" preview={false} />,
        },
      ]}
    />
  );

  return (
    <div className="flex items-center">
      <Popover
        content={<a onClick={hide}>{menu}</a>}
        trigger={["click"]}
        open={open}
        onOpenChange={handleOpenChange}
      >
        <a
          onClick={(e) => e.preventDefault()}
          className="flex items-center flex-wrap gap-2"
        >
          <Image src={stateIcon ? flag : flagEn} alt="logo" preview={false} />
          {isDisplayCurrentText && (
            <p className="m-0">
              {stateIcon ? t("language.vi") : t("language.en")}
            </p>
          )}
        </a>
      </Popover>
    </div>
  );
}
