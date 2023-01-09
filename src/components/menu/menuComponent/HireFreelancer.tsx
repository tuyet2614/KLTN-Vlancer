import { Popover, Space } from "antd";
import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

const HireFreelancer = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const labels = [
    {
      label: t("find"),
      children: [
        {
          label: t("post"),
        },
        {
          label: t("project"),
        },
      ],
    },
    {
      label: t("find-service"),
    },
    {
      label: t("business"),
    },
  ];

  const render = (
    <div onClick={() => setOpen(false)}>
      <Space direction="vertical">
        {labels.map((item) => (
          <div>
            <Space>
              <span className="cursor-pointer">{item.label}</span>
            </Space>
          </div>
        ))}
      </Space>
    </div>
  );
  return (
    <Fragment>
      <Popover
        content={render}
        open={open}
        onOpenChange={(status) => setOpen(status)}
        // placement={"bottomRight"}
        className="flex items-center cursor-pointer"
      >
        <div>{t("hire")}</div>
      </Popover>
    </Fragment>
  );
};

export default HireFreelancer;
