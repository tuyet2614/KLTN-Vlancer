import { Col, Form, Pagination, PaginationProps, Row, Tabs } from "antd";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { InputSearch } from "../../../components/base/components/InputSearch";
import { ButtonTopSearch } from "../components/button-top-search";
import FilterLeft from "../components/FilterLeft";
import ListFreelancer from "../components/ListFreelancer";
import { getListFreelancer } from "../service/api";
import qs from "qs";

const FindFreelancer = () => {
  const { t } = useTranslation("");
  const onFilter = () => {};
  const [form] = Form.useForm();
  const [buttonTop, setButtonTop] = useState("all");
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState({});
  const [verified, setVerified] = useState<any>(undefined);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setPagination((pagination) => ({
      ...pagination,
      page: current,
      pageSize: pageSize,
    }));
  };

  const data: any = getListFreelancer(pagination, filters);

  const onValueChange = (value: any) => {
    let verified = undefined;
    if (value.status === "verified") {
      verified = true;
    }

    const query = {
      filters: {
        service: {
          id: { $in: value.service },
        },
        category: {
          id: { $eq: value.category },
        },
        addresses: {
          id: { $in: value.city },
        },
        skills: {
          id: { $in: value.skill },
        },
        confirmed: { $eq: verified },
      },
    };
    setFilters(query);
  };

  return (
    <Form form={form} onValuesChange={onValueChange}>
      <div className="p-8 overflow-x-scroll flex space-x-8">
        <FilterLeft onValuesChange={onFilter} />
        <div className="flex-1 flex flex-col border bg-white rounded-lg shadow-lg">
          <ButtonTopSearch
            SetButtonTop={setButtonTop}
            buttonTop={buttonTop}
            configsButtonTop={["all", "verified"]}
          />
          <InputSearch placeholderSearch="placeholder-search-freelancer" />
          <ListFreelancer data={data} />
          <div className="flex justify-center mb-6">
            <Pagination
              showSizeChanger
              current={data?.meta?.pagination?.page}
              onChange={onShowSizeChange}
              pageSize={pagination.pageSize}
              total={data?.meta?.pagination?.total || 0}
            />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FindFreelancer;
