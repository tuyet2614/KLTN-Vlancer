import React, { Fragment } from "react";
import { Button, Carousel } from "antd";
import CarouselItem from "./components/Carousel_Item";
import { useTranslation } from "react-i18next";
import JobItemComponent from "../../components/job/jobItemComponent";
import Footer from "../../layout/component/Footer";

const listJob = [
  {
    title: "Remote/parttime Hỗ trợ phát triển, cập nhật nội dung lên website",
    type: "Part-time",
    rate: 4,
    author: "Thức Nguyễn",
    location: "TP. Ho Chi Minh",
    level: " Web Programming",
    minMoney: 1000000,
    maxMoney: 500000,
    deadline: "9 ngày 17 giờ",
    content:
      "mình cần 1 bạn làm remote để phát triển, cập nhật nội dung lên website tmđt vmedi.com.vn. Chỉnh sửa, update và phát triển thêm những thứ linh tinh.",
    categories: [
      "Build an E-commerce Website",
      "Build a Sales Website ",
      "English",
      "Sale",
    ],
  },
  {
    title: "Thiết kế trang web bán hàng ",
    type: "",
    rate: 0,
    author: "Grace On",
    location: "TP. Ho Chi Minh",
    level: " Web Programming",
    minMoney: 15000000,
    maxMoney: 20000000,
    deadline: "8 ngày 8 giờ",
    content:
      "Thiết kế một website bán hàng toàn diện, bao gồm các giao diện cần thiết: listing sản phẩm, giỏ hàng, check out, gợi ý sản phẩm, scan mã code",
    categories: [
      "Build an E-commerce Website",
      "Build a Sales Website ",
      "English",
      "Sale",
    ],
  },
  {
    title: "Remote/parttime Hỗ trợ phát triển, cập nhật nội dung lên website",
    type: "Part-time",
    rate: 4,
    author: "Thức Nguyễn",
    location: "TP. Ho Chi Minh",
    level: " Web Programming",
    minMoney: 1000000,
    maxMoney: 500000,
    deadline: "9 ngày 17 giờ",
    content:
      "mình cần 1 bạn làm remote để phát triển, cập nhật nội dung lên website tmđt vmedi.com.vn. Chỉnh sửa, update và phát triển thêm những thứ linh tinh.",
    categories: [
      "Build an E-commerce Website",
      "Build a Sales Website ",
      "English",
      "Sale",
    ],
  },
  {
    title: "Remote/parttime Hỗ trợ phát triển, cập nhật nội dung lên website",
    type: "Part-time",
    rate: 4,
    author: "Thức Nguyễn",
    location: "TP. Ho Chi Minh",
    level: " Web Programming",
    minMoney: 1000000,
    maxMoney: 500000,
    deadline: "9 ngày 17 giờ",
    content:
      "mình cần 1 bạn làm remote để phát triển, cập nhật nội dung lên website tmđt vmedi.com.vn. Chỉnh sửa, update và phát triển thêm những thứ linh tinh.",
    categories: [
      "Build an E-commerce Website",
      "Build a Sales Website ",
      "English",
      "Sale",
    ],
  },
  {
    title: "Remote/parttime Hỗ trợ phát triển, cập nhật nội dung lên website",
    type: "Part-time",
    rate: 4,
    author: "Thức Nguyễn",
    location: "TP. Ho Chi Minh",
    level: " Web Programming",
    minMoney: 1000000,
    maxMoney: 500000,
    deadline: "9 ngày 17 giờ",
    content:
      "mình cần 1 bạn làm remote để phát triển, cập nhật nội dung lên website tmđt vmedi.com.vn. Chỉnh sửa, update và phát triển thêm những thứ linh tinh.",
    categories: [
      "Build an E-commerce Website",
      "Build a Sales Website ",
      "English",
      "Sale",
    ],
  },
];

const OnBoard = () => {
  const { t } = useTranslation("onBoard");
  return (
    <Fragment>
      <div className="OnBoard">
        <div className="list-carousel">
          <CarouselItem />
        </div>
        <div className="onBoard-body">
          <div className="title-onboard">{t("popular-job")}</div>
          <div className="list-job">
            {listJob.map((item) => (
              <JobItemComponent
                title={item.title}
                type={item.type}
                rate={item.rate}
                author={item.author}
                location={item.location}
                level={item.level}
                minMoney={item.minMoney}
                maxMoney={item.maxMoney}
                deadline={item.deadline}
                content={item.content}
                categories={item.categories}
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
