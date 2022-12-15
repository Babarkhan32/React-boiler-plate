import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/Not-Found";
import { ErrorPage } from "../pages/Error-Page";
export default createBrowserRouter(
  createRoutesFromElements([
    <Route path="*" element={<NotFound />} />,
    <Route
      path="/"
      errorElement={<ErrorPage />}
      element={<Home />}
    />,
  ])
);
