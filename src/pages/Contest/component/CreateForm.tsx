import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { t } from "i18next";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import ChooseItem from "../../../components/base/chooseItem";
import FormInput from "../../../components/base/formInput";
import { formatNumberStr } from "../../../untils/string";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categoryData, serviceData } from "../../../components/data/data";
import { createTest } from "../service/api";
import { useNavigate } from "react-router";
import { systemRoutes } from "../../../routes";

const CreateForm = () => {
  const { t } = useTranslation("contest");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isPrivate, setIsPrivate] = useState(false);
  const routeListDetailContest = () => {
    // navigate(systemRoutes.CONTEST_DETAIL_ROUTE());
  };
  const handleAddNewContest = (value: any) => {
    // JSON.stringify(addNewPost(value));
    const data = {
      ...value,
      description: {
        des: value.description,
      },
      service: {
        service: value.services,
      },
      field: {
        category: value.category,
      },
      secret: isPrivate,
    };

    JSON.stringify(createTest(data, routeListDetailContest));
  };
  return (
    <div className="w-full flex justify-center">
      <Form
        className="post-contest"
        layout="vertical"
        form={form}
        onFinish={handleAddNewContest}
      >
        <div className="title">
          <p className="step">{t("step1")}</p>
          <p className="create">{t("create-own")}</p>
        </div>
        <Form.Item
          name="category"
          label={t("categories")}
          rules={[{ required: true, message: t("error_messes.required") }]}
        >
          <Select
            tabIndex={3}
            placeholder={t("placeholder.enter_category")}
            filterOption={false}
          >
            {categoryData?.map((item: any) => (
              <Select.Option value={item?.name} key={item?.id}>
                {t(item?.name)}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name={"services"} label={t("service")}>
          <Select
            tabIndex={3}
            placeholder={t("placeholder.enter_service")}
            filterOption={false}
          >
            {serviceData?.map((item: any) => (
              <Select.Option value={item?.name} key={item?.id}>
                {t(item?.name)}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={t("gift")} className="prize" name={"prize"}>
          <Radio.Group className="list-prize" defaultValue={1000000}>
            <Radio value={1000000}>
              <div>
                <div className="money-contain">
                  <span className="money">{formatNumberStr(1000000)}</span>
                  &nbsp;VND
                </div>

                <div>
                  <FontAwesomeIcon icon={faCheck} />
                  &nbsp;More than 15 designs*.
                </div>
              </div>
            </Radio>
            <Radio value={2000000}>
              <div>
                <div className="money-contain">
                  <span className="money">{formatNumberStr(2000000)}</span>
                  &nbsp;VND
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp;More than 40 designs*.{" "}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp;Professional designer.{" "}
                  </div>
                </div>
              </div>
            </Radio>
            <Radio value={4000000}>
              <div>
                <div className="money-contain">
                  <span className="money">{formatNumberStr(4000000)}</span>
                  &nbsp;VND
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp;More than 80 designs*.
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp;Expert designer.{" "}
                  </div>
                </div>
              </div>
            </Radio>
          </Radio.Group>
        </Form.Item>

        <div className="unlimited">
          <p>* {t("unlimited-product")}</p>
        </div>

        <Form.Item label={t("fill-intro")} name="title">
          <FormInput placeholder={t("title-contest")} name="title" />
        </Form.Item>

        <Form.Item name="description">
          <TextArea placeholder={t("intro-contest")} />
        </Form.Item>

        <div>
          <a>{t("attach")}</a>
        </div>

        <div className="security">
          <Form.Item className="!m-0">
            <Checkbox onClick={() => setIsPrivate(!isPrivate)}>
              {t("security")}
            </Checkbox>
          </Form.Item>

          <p className="only">{t("only")}</p>
        </div>

        <div className="post-submit">
          <Button htmlType="submit">{t("post")}</Button>
          <p className="term">{t("terms")}</p>
        </div>
      </Form>
    </div>
  );
};

export default CreateForm;
