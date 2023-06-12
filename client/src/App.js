import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Product from "./pages/Product/Product";
// import Products from "./pages/Products/Products";

const router = createBrowserRouter([
  // {
    // path: "/",
    // element: <span>Layiyt</span>,
    // // element: <Layout />,
    // children: [
      {
        path: "/",
        element: <span>Home</span>,
        // element: <Home />,
      },
      {
        path: "/products/:id",
        element: <span>Products</span>,
        // element: <Products />,
      },
      {
        path: "/product/:id",
        element: <span>Product</span>,
        // element: <Product />,
      },
    // ],
  // },
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
