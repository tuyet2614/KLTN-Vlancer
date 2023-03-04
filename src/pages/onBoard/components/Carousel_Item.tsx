import { Button } from "antd";
import React from "react";
import freelancer from "@assets/videos/freelancer.mp4";
import "../styles/index.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";

const CarouselItem = () => {
  const { t } = useTranslation("onBoard");
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="title">
        <span className="bold-title">{t("get-work")}</span>
        <span>{t("top")}</span>
      </div>
      <Button
        type="primary"
        onClick={() => navigate(systemRoutes.POSTJOB_ROUTE)}
      >
        {t("post")}
      </Button>
      <div>
        <ul className="step">
          <li>
            <span className="step-number">1</span>
            {t("step.step1")}
          </li>
          <li>
            <span className="step-number">2</span>
            {t("step.step2")}
          </li>
          <li>
            <span className="step-number">3</span>
            {t("step.step3")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselItem;
