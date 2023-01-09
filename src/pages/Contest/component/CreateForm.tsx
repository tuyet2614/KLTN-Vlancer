import { Button, Checkbox, Form, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { t } from "i18next";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ChooseItem from "../../../components/base/chooseItem";
import FormInput from "../../../components/base/formInput";
import { formatNumberStr } from "../../../untils/string";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categoriesOption = [
  { label: t("categories"), value: "categories" },
  {
    label: t("it"),
    options: [
      { label: t("program.web"), value: "web" },
      { label: t("program.mobile"), value: "mobile" },
      { label: t("program.other"), value: "other" },
      { label: t("program.software"), value: "software" },
      { label: t("program.engine"), value: "engine" },
      { label: t("program.consulting"), value: "program-consulting" },
      { label: t("program.tester"), value: "tester" },
      { label: t("program.management"), value: "management" },
    ],
  },
  {
    label: t("sales"),
    options: [
      { label: t("marketing.advert"), value: "advert" },
      { label: t("marketing.associate"), value: "associate" },
      { label: t("marketing.consulting"), value: "marketing-consulting" },
      { label: t("marketing.research"), value: "research" },
      { label: t("marketing.business"), value: "business" },
      { label: t("marketing.event"), value: "event" },
      { label: t("marketing.consult"), value: "consult" },
      { label: t("marketing.face"), value: "face" },
    ],
  },
];

const serviceOptions = [
  { label: t("service"), value: "service" },
  { label: t("service-option.2d"), value: "2d" },
  { label: t("service-option.2d-game"), value: "2d-game" },
  { label: t("service-option.degree"), value: "degree" },
  { label: t("service-option.3d"), value: "3d" },
  { label: t("service-option.3d-design"), value: "3d-design" },
  { label: t("service-option.3d-jewelry"), value: "3d-jewelry" },
  { label: t("service-option.adv"), value: "adv" },
];

const CreateForm = () => {
  const { t } = useTranslation("contest");
  return (
    <div className="w-full flex justify-center">
      <Form className="post-contest" layout="vertical">
        <div className="title">
          <p className="step">{t("step1")}</p>
          <p className="create">{t("create-own")}</p>
        </div>
        <ChooseItem
          label={t("categories")}
          defaultValue={"categories"}
          options={categoriesOption}
        />
        <ChooseItem
          label={t("service")}
          defaultValue={"service"}
          options={serviceOptions}
        />
        <Form.Item label={t("gift")} className="prize">
          <Radio.Group className="list-prize" defaultValue={1}>
            <Radio value={1}>
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
            <Radio value={2}>
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
            <Radio value={3}>
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

        <FormInput label={t("fill-intro")} placeholder={t("title-contest")} />

        <Form.Item>
          <TextArea placeholder={t("intro-contest")} />
        </Form.Item>

        <div>
          <a>{t("attach")}</a>
        </div>

        <div className="security">
          <Form.Item className="!m-0">
            <Checkbox>{t("security")}</Checkbox>
          </Form.Item>

          <p className="only">{t("only")}</p>
        </div>

        <div className="post-submit">
          <Button>{t("post")}</Button>
          <p className="term">{t("terms")}</p>
        </div>
      </Form>
    </div>
  );
};

export default CreateForm;
