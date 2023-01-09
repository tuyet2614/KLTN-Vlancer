import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { browserRouters } from "./routes";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={browserRouters} />
    </Suspense>
  );
};

export default App;
