import React from "react";
import { cn } from "../lib/utils";

type Props = {
  isMobile?: boolean;
};
const Sidebar = ({ isMobile }: Props) => {
  return (
    <main
      className={cn(
        "sticky top-5 z-20 w-20 h-[100dvh] py-5 px-[0.625rem] flex gap-8 justify-between flex-col items-center ",
        isMobile ? "" : "bg-primary-foreground border-r border-border"
      )}
    >
      <aside className="flex flex-col gap-8 items-center">
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/logo.svg" alt="" className="w-[40px] h-[40px]" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/category.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/trend-up.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/profile-2user.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/box.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/discount-shape.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/info-circle.svg" alt="" className="w-6 h-6" />
        </div>
      </aside>
      <aside className="mt-8 flex flex-col items-center gap-5 bg-white p-3 rounded-full">
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer p-2 bg-primary rounded-full">
          <img src="/bright.svg" alt="" className="w-6 h-6" />
        </div>

        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/moon.svg" alt="" className="w-6 h-6" />
        </div>
      </aside>
      <aside className="flex flex-col items-center gap-8">
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/arrow-right.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/setting-2.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <img src="/logout.svg" alt="" className="w-6 h-6" />
        </div>
      </aside>
    </main>
  );
};

export default Sidebar;
