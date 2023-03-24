import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import { useTranslation } from "react-i18next";
import ExperienceItem from "./components/experienceItem";
import "./style/index.scss";

const items: MenuProps["items"] = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

const TopProfile = () => {
  const { t } = useTranslation("service");
  return (
    <div className="top-profile">
      <div className="menu-title">
        <p className="title">{t("top-cv")}</p>
        <div className="filters">
          <Dropdown menu={{ items }}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>
      </div>

      <div className="container">
        <ExperienceItem />
      </div>
    </div>
  );
};

export default TopProfile;
