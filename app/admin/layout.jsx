import { assets } from "@/assets/assets";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer/>
        <Sidebar />
        <div className="flex flex-col w-full gap-[20px]">
          <div className="flex justify-between items-center border border-black w-full px-12 py-2 max-h-[60px] border-x-0">
            <h1 className="font-medium">Admin Panel</h1>
            <Image src={assets.profile_icon} width={40} alt="profile-picture"></Image>
          </div>
          {children}
        </div>
      </div>
      
    </>
  );
}
