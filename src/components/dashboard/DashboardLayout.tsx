import { Outlet } from "react-router-dom";
import DashboardNavbar from "./layout/DashboardNavbar";
import Buttons from "./layout/Buttons";
export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavbar />
      <div className="flex-1 overflow-x-hidden">
        <div className="sticky top-0 z-10 bg-green-200/95 backdrop-blur-sm">
          <Buttons />
        </div>
        <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
