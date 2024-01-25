import dayjs from "dayjs";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa6";
import { user } from "../../../data/user";
import { IoMenuOutline } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "../Sidebar";

const Header = () => {
  const date = new Date();
  return (
    <main className="w-screen  xl:w-full px-5 py-[18px] border-b border-border flex items-center justify-between">
      <h1 className="text-[18px]">Dashboard</h1>
      <aside className="flex items-center gap-5">
        <div className="max-w-[21.8125rem] hidden xl:block">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border border-border p-2 rounded-full"
          />
        </div>
        <div className="items-center gap-3 hidden xl:flex">
          <div>
            <BiCalendar size={20} />
          </div>
          <p className="text-sm">{dayjs(date).format("MMMM D, YYYY")}</p>
        </div>
        <div className="hidden xl:block">
          <div className="p-3 rounded-full border border-border">
            <FaRegBell size={20} />
          </div>
        </div>
        <div className="flex gap-2 items-center border-border p-2 rounded-full">
          <figure>
            <img
              src={user?.avatarUrl}
              alt=""
              className="w-9 h-9 rounded-full object-contain"
            />
          </figure>
          <article className="hidden xl:block">
            <h1 className="text-base">{user?.fullName}</h1>
            <p className="text-gray-400 text-sm">{user?.email}</p>
          </article>
        </div>
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger>
              <IoMenuOutline size={24} />
            </SheetTrigger>
            <SheetContent side="left" className="w-fit">
              <Sidebar isMobile={true} />
            </SheetContent>
          </Sheet>
        </div>
      </aside>
    </main>
  );
};

export default Header;
