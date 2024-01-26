import React, { useState } from "react";
import { cn } from "../lib/utils";
import { useTheme } from "./theme-provider";
import { MdWbSunny } from "react-icons/md";

type Props = {
  isMobile?: boolean;
};
const Sidebar = ({ isMobile }: Props) => {
  const { setTheme, theme } = useTheme();
  const [toggle, setToggle] = useState(false);

  const handleToggle = (key: "light" | "dark") => {
    setToggle(true);
    setTheme(key);
  };

  return (
    <main
      className={cn(
        "sticky top-5 z-20 w-20 h-[100dvh] py-5 px-[0.625rem] flex gap-8 justify-between flex-col items-center ",
        isMobile ? "" : "bg-primary-foreground border-r border-border"
      )}
    >
      <aside className="flex flex-col gap-8 items-center">
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <a href="/">
            <img src="/logo.svg" alt="" className="w-[40px] h-[40px]" />
          </a>
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
      <aside className="relative mt-8 flex flex-col items-center gap-5 bg-white p-3 rounded-full">
        <div
          className={cn(
            "h-9 w-9 absolute left-3 rounded-full transition-all duration-700 ease-in-out",
            theme === "light" ? "bg-[#34CAA5]" : "bg-[#282b2b]",
            // toggle && theme === "light" && "transition -translate-y-[100%]",
            toggle && theme === "dark"
              ? "translate-y-[calc(100%+13px)]"
              : "translate-y-0"
          )}
        />
        <button
          onClick={() => {
            handleToggle("light");
          }}
          className="z-10 hover:scale-105 duration-300 ease-in-out cursor-pointer h-9 w-9 flex items-center justify-center "
        >
          <MdWbSunny
            size={24}
            className={cn(theme === "dark" ? "text-[#34CAA5]" : "text-white")}
          />
        </button>

        <button
          onClick={() => {
            handleToggle("dark");
          }}
          className="z-10 hover:scale-105 duration-300 ease-in-out cursor-pointer"
        >
          <img src="/moon.svg" alt="" className="w-6 h-6" />
        </button>
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
