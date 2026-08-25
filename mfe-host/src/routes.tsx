import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import App from "./App";

export const routes = createBrowserRouter([
   {
      path: '/',
      Component: Layout,
      children: [
         { index: true, Component: App },
         { path: "cart", Component: () => <div>Cart Page</div> },
      ]
   }
])