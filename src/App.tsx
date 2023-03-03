import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { axiosConfigs } from "./configs/axios";
import { browserRouters } from "./routes";

const App: React.FC = () => {
  // axiosConfigs();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={browserRouters} />
    </Suspense>
  );
};

export default App;
