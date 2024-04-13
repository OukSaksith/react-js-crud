import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: false, element: <MainPage /> },
      // { path: 'link-content?payload=:payload', element: <MainPage /> }
      { path: 'link-content', element: <MainPage /> }
    ]
  }
]);

export default router;