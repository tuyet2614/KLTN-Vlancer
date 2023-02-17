import React, { Fragment } from "react";
import { Button, Carousel } from "antd";
import CarouselItem from "./components/Carousel_Item";
import { useTranslation } from "react-i18next";
import JobItemComponent from "../../components/job/jobItemComponent";
import Footer from "../../layout/component/Footer";
import { getListPosts } from "../postJob/service/api";

const OnBoard = () => {
  const { t } = useTranslation("onBoard");
  const postData = getListPosts();
  console.log("post: ", postData);

  return (
    <Fragment>
      <div className="OnBoard">
        <div className="list-carousel">
          <CarouselItem />
        </div>
        <div className="onBoard-body">
          <div className="title-onboard">{t("popular-job")}</div>
          <div className="list-job">
            {postData &&
              postData?.map((item: any) => (
                <JobItemComponent
                  title={item.attributes.title}
                  type={item.type}
                  rate={item.rate}
                  author={item.author}
                  location={item.location}
                  level={item.level}
                  minMoney={item.minMoney}
                  maxMoney={item.maxMoney}
                  deadline={item.attributes.deadline}
                  content={item.attributes.description}
                  categories={item.attributes.category}
                />
              ))}
          </div>
          <div className="flex justify-center py-10 ">
            <Button className="!bg-[#08c]">Xem tất cả 54.878 công việc </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OnBoard;
