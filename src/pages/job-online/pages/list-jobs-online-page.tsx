import { Form, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ButtonTopSearch, InputSearch } from "../components";
import { FilterLeftWidgets, ListJobs } from "../widgets";

interface ListJobsOnlinePageProps {}

const ListJobsOnlinePage: React.FC<ListJobsOnlinePageProps> = () => {
  const [buttonTop, setButtonTop] = useState("");

  const location = useLocation();
  const { page } = location.state;

  useEffect(() => {
    setButtonTop(page);
  }, [page]);

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
          <ListJobs />
          <div className="flex justify-center mb-6">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ListJobsOnlinePage;
