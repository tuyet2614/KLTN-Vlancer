import { Form, Pagination, PaginationProps } from "antd";
import axios from "axios";
import { debounce } from "lodash";
import authApi from "../../../constant/http-auth-common";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ButtonTopSearch, InputSearch } from "../components";
import { FilterLeftWidgets, ListJobs } from "../widgets";

interface ListJobsOnlinePageProps {}

const ListContest: React.FC<ListJobsOnlinePageProps> = () => {
  const [buttonTop, setButtonTop] = useState("");
  const [dataListJobs, setDataListJobs] = useState<any>();
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const [form] = Form.useForm();
  const [filters, setFilters] = useState({});

  const location = useLocation();
  //   const { page } = location?.state;
  console.log("filter: ", filters);

  useEffect(() => {
    authApi
      .get(
        `/tests?populate=*&pagination%5Bpage%5D=${pagination.page}&pagination%5BpageSize%5D=${pagination.pageSize}`,
        { params: filters }
      )
      .then((res) => setDataListJobs(res.data));
  }, [pagination, filters]);

  // useEffect(() => {
  //   setButtonTop(page);
  // }, [page]);

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

  const onValueChange = (value: any) => {
    let verified = undefined;
    let payType = undefined;
    console.log("vla:", value);
    if (value.status === "all") {
      verified = undefined;
    } else {
      verified = value.status;
    }

    if (value.payment === "all") {
      payType = undefined;
    } else {
      payType = value.payment;
    }

    const query = {
      filters: {
        service: {
          id: { $in: value.service },
        },
        category: {
          id: { $in: value.category },
        },
        addresses: {
          id: { $in: value.city },
        },
        skills: {
          id: { $in: value.skill },
        },
        status: {
          $eq: verified,
        },
        payType: {
          $eq: payType,
        },
      },
    };
    setFilters({ ...filters, ...query });
  };

  const onSearchChange = useCallback(
    debounce((value) => {
      setFilters((f: any) => {
        return {
          ...f,
          filters: {
            ...f.filter,
            title: {
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
        <FilterLeftWidgets buttonTop={buttonTop} />
        <div className="flex-1 flex flex-col border bg-white rounded-lg shadow-lg">
          <ButtonTopSearch
            SetButtonTop={setButtonTop}
            buttonTop={buttonTop}
            configsButtonTop={["all-jobs", "partime", "fulltime", "contest"]}
          />
          <InputSearch onSearchChange={onSearchChange} />
          <ListJobs dataListJobs={dataListJobs} />
          <div className="flex justify-center mb-6">
            <Pagination
              showSizeChanger
              current={dataListJobs?.meta?.pagination?.page}
              onChange={onShowSizeChange}
              pageSize={pagination.pageSize}
              total={dataListJobs?.meta?.pagination?.total || 0}
            />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ListContest;
