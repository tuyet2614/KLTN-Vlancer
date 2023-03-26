import { Form } from "antd";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import authApi from "../../../constant/http-auth-common";

interface Props {
  id: any;
}

const InputFile = ({ id }: Props) => {
  const [files, setFiles] = useState<any>();
  const { t } = useTranslation("");
  const [form] = Form.useForm();
  const uploadImage = async (e: any) => {
    //posting logic will go here
    e.preventDefault();

    const formData = new FormData();

    formData.append("files", files[0]);

    axios
      .post("http://localhost:1337/api/upload", formData)
      .then((response) => {
        //after success
        const imageId = response.data[0].id;

        authApi
          .put(`http://localhost:1337/users/${id}`, { avatar: imageId })
          .then((response) => {})
          .catch((error) => {
            //handle error
            console.log("errr: ", error);
          });
      })
      .catch((error) => {
        console.log("check errr: ", error);

        //handle error
      });
  };
  return (
    <Form onFinish={uploadImage}>
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default InputFile;
