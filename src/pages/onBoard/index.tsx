import React, { Fragment } from "react";
import { Button, Carousel } from "antd";
import CarouselItem from "./components/Carousel_Item";
import { useTranslation } from "react-i18next";
import JobItemComponent from "../../components/job/jobItemComponent";
import Footer from "../../layout/component/Footer";
import { getListPosts } from "../postJob/service/api";
import Loading from "../../components/base/components/loading";
import { ListJobs } from "../job-online/widgets";

const OnBoard = () => {
  const { t } = useTranslation("onBoard");
  const query = {
    filters: {
      status: {
        $in: ["requested"],
      },
    },
    pagination: {
      limit: 10,
    },
  };
  const { data: postData, isLoading } = getListPosts(query);

  return (
    <Fragment>
      <div className="OnBoard">
        <div className="list-carousel">
          <CarouselItem />
        </div>
        <div className="onBoard-body">
          <div className="title-onboard">{t("popular-job")}</div>
          <div className="list-job">
            {isLoading ? (
              <Loading />
            ) : (
              <ListJobs dataListJobs={postData} type="post" />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OnBoard;
