import { SearchOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { list_question } from "./list_question";
export const CustomStep = (props: any) => {
  const [textSearch, setTextSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [data, setData] = useState<any>([]);

  const handleSearch = (newValue: string) => {
    setData(
      list_question.filter((item: any) =>
        item.id.toLowerCase().includes(newValue.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h3>{props.question}</h3>

      <Select
        showSearch
        defaultActiveFirstOption={false}
        className="w-[250px]"
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
      >
        {data.map((item: any) => (
          <Select.Option value={item?.id} key={item?.id}>
            {item?.id}
          </Select.Option>
        ))}
      </Select>
      <Button
        onClick={() => props.triggerNextStep({ trigger: selected })}
        className="!ml-5 !bg-[#647A8E]"
      >
        <SearchOutlined style={{ color: "white" }} />
      </Button>
    </div>
  );
};

export const stepChatbot = [
  {
    id: "Greet",
    message: "Xin chào, chào mừng bạn đến với Vlancer",
    trigger: "Displaying options to ques",
  },
  {
    id: "Displaying options to ques",
    component: <CustomStep question="Tôi có thể giúp gì được cho bạn?" />,
    trigger: "answer",
  },
  {
    id: "answer",
    user: true,
    trigger: "6",
  },
  {
    id: "6",
    message:
      "I'm sorry, I don't understand. Can you please rephrase your question?",
    trigger: "Displaying options to ques",
  },

  {
    id: "Asking for another question",
    message: "Bạn có cần hỗ trợ nào khác không",
    trigger: "Asking select option",
  },
  {
    id: "Asking select option",
    options: [
      {
        value: true,
        label: "Yes",
        trigger: "Displaying options to ques",
      },
      {
        value: "false",
        label: "No",
        trigger: "Done",
      },
    ],
  },

  {
    id: "Done",
    message: "Cảm ơn bạn đã ủng hộ trang web !!",
    end: true,
  },

  {
    id: "Hướng dẫn Freelancer kiếm tiền trên vLance",
    component: (
      <div>
        <p>Bạn có thể xem hướng dẫn làm việc trên vLance.vn tại đây:</p>
        <Link to="/post-a-job" target="_blank">
          https://www.vlance.vn/huong-dan-freelancer-kiem-tien-tren-vlance
        </Link>
      </div>
    ),

    trigger: "Asking for another question",
  },
  {
    id: "Hướng dẫn Freelancer chào giá dự án",
    component: (
      <div>
        <p>Bạn có thể xem hướng dẫn ứng tuyển (chào giá) công việc tại đây:</p>
        <Link to="/post-a-job" target="_blank">
          https://www.vlance.vn/huong-dan-freelancer-chao-gia-du-an
        </Link>
      </div>
    ),

    trigger: "Asking for another question",
  },
  {
    id: "Hướng dẫn Freelancer hoàn thiện hồ sơ",
    component: (
      <div>
        <p>Bạn có thể xem hướng dẫn hoàn thiện hồ sơ cá nhân tại đây:</p>
        <Link to="/post-a-job" target="_blank">
          https://www.vlance.vn/huong-dan-freelancer-hoan-thien-ho-so-tren-vlance
        </Link>
      </div>
    ),

    trigger: "Asking for another question",
  },
  {
    id: "Hướng dẫn Khách hàng chọn Freelancer",
    component: (
      <div>
        <p>Bạn có thể xem hướng dẫn chọn Freelancer tại đây:</p>
        <Link to="/post-a-job" target="_blank">
          https://www.vlance.vn/huong-dan-chon-freelancer
        </Link>
      </div>
    ),

    trigger: "Asking for another question",
  },
  {
    id: "Hướng dẫn cách thuê Freelancer",
    component: (
      <div>
        <p>Bạn có thể xem hướng dẫn cách thuê Freelancer tại đây:</p>
        <Link to="/post-a-job" target="_blank">
          https://www.vlance.vn/huong-dan-thue-freelancer
        </Link>
      </div>
    ),

    trigger: "Asking for another question",
  },
  {
    id: "Hướng dẫn Khách hàng liên hệ với Freelancer",
    component: (
      <div>
        <p>
          Bạn có thể xem hướng dẫn liên hệ trực tiếp với Freelancer tại đây:
        </p>
        <Link to="/post-a-job" target="_blank">
          https://www.vlance.vn/huong-dan-lien-he-truc-tiep-freelancer
        </Link>
      </div>
    ),

    trigger: "Asking for another question",
  },
  {
    id: "Hướng dẫn Freelancer liên hệ với khách hàng",
    component: (
      <div>
        <p>Bạn có thể xem hướng dẫn liên hệ với khách hàng tại đây:</p>
        <Link to="/post-a-job" target="_blank">
          https://www.vlance.vn/huong-dan-freelancer-lien-he-khach-hang
        </Link>
      </div>
    ),

    trigger: "Asking for another question",
  },
  {
    id: "Hướng dẫn Khách hàng đăng tin tuyển dụng",
    component: (
      <div>
        <p>Bạn có thể xem hướng dẫn đăng tin tuyển dụng tại đây: </p>
        <Link to="/post-a-job" target="_blank">
          https://www.vlance.vn/huong-dan-dang-viec
        </Link>
      </div>
    ),

    trigger: "Asking for another question",
  },
];
