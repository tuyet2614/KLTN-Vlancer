import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

function Loading() {
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  return (
    <div className="h-screen w-full z-[1000] justify-center items-center flex">
      <Spin indicator={antIcon} size="large" />
    </div>
  );
}

export default Loading;
