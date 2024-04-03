// routes.js
import LayoutDefault from "../LayoutDefault";
import Home from "../pages/Home";
import ManagerProducts from "../pages/ManagerProducts";
export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        path: '/',
        element: <Home /> 
      },
      {
        path: '/manager-products',
        element: <ManagerProducts /> 
      },
    ]
  }
];
