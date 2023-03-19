import { Form, Pagination, PaginationProps } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ButtonTopSearch, InputSearch } from "../components";
import { FilterLeftWidgets, ListJobs } from "../widgets";

interface ListJobsOnlinePageProps {}

const ListJobsOnlinePage: React.FC<ListJobsOnlinePageProps> = () => {
  const [buttonTop, setButtonTop] = useState("");
  const [dataListJobs, setDataListJobs] = useState<any>();
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });

  const location = useLocation();
  // const { page } = location?.state;

  useEffect(() => {
    axios
      .get(
        `/posts?populate=*&pagination%5Bpage%5D=${pagination.page}&pagination%5BpageSize%5D=${pagination.pageSize}`
      )
      .then((res) => setDataListJobs(res.data));
  }, [pagination]);

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

  return (
    <Form>
      <div className="p-8 overflow-x-scroll flex space-x-8">
        <FilterLeftWidgets buttonTop={buttonTop} />
        <div className="flex-1 flex flex-col border bg-white rounded-lg shadow-lg">
          <ButtonTopSearch
            SetButtonTop={setButtonTop}
            buttonTop={buttonTop}
            configsButtonTop={["all-jobs", "partime", "fulltime", "contest"]}
          />
          <InputSearch />
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

export default ListJobsOnlinePage;
