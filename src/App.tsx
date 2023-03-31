import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { axiosConfigs } from "./configs/axios";
import { browserRouters } from "./routes";
axiosConfigs();

const App: React.FC = () => {
  const clientId =
    "1083253828981-7tsua0epl0t4mrl99sushcbhgcd3iv9f.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={browserRouters} />
      </Suspense>
    </GoogleOAuthProvider>
  );
};

export default App;
