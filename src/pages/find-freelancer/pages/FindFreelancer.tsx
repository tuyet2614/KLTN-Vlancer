import { Col, Form, Pagination, PaginationProps, Row, Tabs } from "antd";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { InputSearch } from "../../../components/base/components/InputSearch";
import { ButtonTopSearch } from "../components/button-top-search";
import FilterLeft from "../components/FilterLeft";
import ListFreelancer from "../components/ListFreelancer";
import { getListFreelancer } from "../service/api";
import qs from "qs";
import { debounce } from "lodash";
import axios from "axios";

const FindFreelancer = () => {
  const { t } = useTranslation("");
  const onFilter = () => {};
  const [form] = Form.useForm();
  const [buttonTop, setButtonTop] = useState("all");
  const [test, setTest] = useState<any>();
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

  useEffect(() => {
    axios
      .get("/users?populate=*&pagination[page]=1&pagination[pageSize]=10")
      .then((res) => setTest(res.data));
  }, []);

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

  const onSearchChange = useCallback(
    debounce((value) => {
      setFilters((f: any) => {
        return {
          ...f,
          filters: {
            ...f.filter,
            username: {
              $contains: value,
            },
          },
        };
      });
    }, 300),
    []
  );

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
          <InputSearch
            placeholderSearch="placeholder-search-freelancer"
            onSearchChange={onSearchChange}
          />
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
