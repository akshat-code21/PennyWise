import { Outlet } from "react-router-dom";
import DashboardNavbar from "./layout/DashboardNavbar";
import Buttons from "./layout/Buttons";
export default function DashboardLayout() {
  return (
    <div>
      <DashboardNavbar />
      <Buttons/>
      <Outlet />
    </div>
  );
}
