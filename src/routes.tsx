import { createBrowserRouter } from "react-router-dom";

import { ErrorPage, HomePage, ProductDetailPage } from "./pages";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/product-detail/:productId", element: <ProductDetailPage /> },
]);
