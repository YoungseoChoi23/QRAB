import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/api/reactQuery/queryClient";
import SuspenseLoading from "./components/Common/SuspenseLoading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Suspense fallback={<SuspenseLoading />}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.Suspense>
);
