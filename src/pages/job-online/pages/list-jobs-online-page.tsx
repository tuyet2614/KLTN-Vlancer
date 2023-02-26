import { Form } from "antd";
import { useState } from "react";
import { ButtonTopSearch, InputSearch } from "../components";
import { FilterLeftWidgets } from "../widgets";

interface ListJobsOnlinePageProps {}

const ListJobsOnlinePage: React.FC<ListJobsOnlinePageProps> = () => {
  const [buttonTop, setButtonTop] = useState("all");

  return (
    <Form>
      <div className="p-8 overflow-x-scroll flex space-x-8">
        <FilterLeftWidgets />
        <div className="flex-1 flex flex-col border bg-white rounded-lg shadow-lg">
          <ButtonTopSearch
            SetButtonTop={setButtonTop}
            buttonTop={buttonTop}
            configsButtonTop={["all-jobs", "partime", "fulltime", "contest"]}
          />
          <InputSearch />
          {/* <ListJobs/> */}
        </div>
      </div>
    </Form>
  );
};

export default ListJobsOnlinePage;
