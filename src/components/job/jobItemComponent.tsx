import React from "react";
import { Button, Rate } from "antd";
import "./styles.scss";
import { DollarOutlined } from "@ant-design/icons";

interface jobComponent {
  title: string;
  type?: string;
  rate: number;
  author: string;
  location: string;
  minMoney: number;
  maxMoney: number;
  deadline: string;
  content: string;
  categories: string[];
}

const JobItemComponent: React.FC<jobComponent> = (Props) => {
  const {
    title,
    type,
    rate,
    author,
    location,
    minMoney,
    maxMoney,
    deadline,
    content,
    categories,
  } = Props;

  return (
    <div className="tag-job">
      <div className="content">
        <span className="title">{title}</span>
        {type && <span className="type">{type}</span>}
      </div>

      <div>
        <Rate
          defaultValue={rate}
          character={<DollarOutlined />}
          allowHalf
          disabled
        />
        <span>{author}</span>
      </div>
      <div className="location">
        <div>
          <span>{location} | </span>
          {/* <span>{level} | </span> */}
          <span>
            {minMoney} - {maxMoney}
          </span>
        </div>

        <span>Application deadline: {deadline}</span>
      </div>
      <div>{content}</div>
      {/* <div className="list-type">
        {categories.map((item) => (
          <Button>{item}</Button>
        ))}
      </div> */}
    </div>
  );
};

export default JobItemComponent;
