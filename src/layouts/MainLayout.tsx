import { Outlet } from "react-router-dom";
//import { ChatWidget } from "../components/ChatWidget";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-1">
          <Sidebar />

          <main className=" flex-1 p-6 bg-white overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
