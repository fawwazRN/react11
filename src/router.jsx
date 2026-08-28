import { createBrowserRouter } from "react-router";
import Dashboard from "./latihan5/Dashboard";
import DaftarSantri from "./latihan5/DaftarSantri";
import DetailSantri from "./latihan5/DetailSantri";
import NotFound from "./latihan5/NotFound";
import Tentang from "./latihan5/Tentang";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/santri",
    element: <DaftarSantri />,
  },
  {
    path: "/santri/:id",
    element: <DetailSantri />,
  },
  {
    path: "/about",
    element: <Tentang />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
