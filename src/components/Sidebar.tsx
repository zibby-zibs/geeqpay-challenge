import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useTheme } from "./theme-provider";
import { MdWbSunny } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";

type Props = {
  isMobile?: boolean;
};
const Sidebar = ({ isMobile }: Props) => {
  const { setTheme, theme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [canShow, setCanShow] = useState(false);

  const handleToggle = (key: "light" | "dark") => {
    setToggle(true);
    setTheme(key);
  };

  // useEffect(() => {
  //   if (theme === "light") {
  //     setCanShow(true);
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "light") {
      setCanShow(true);
    }
  }, [theme]);

  return (
    <main
      className={cn(
        "sticky top-5 z-20 h-[100dvh] max-h-[100dvh] overflow-y-auto overflow-hidden w-fit max-w-fit py-5   flex gap-8 justify-between flex-col items-center ",
        isMobile ? "" : "bg-primary-foreground border-r border-border"
      )}
    >
      <aside className="flex flex-col gap-8 items-center">
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <a href="/">
            <img src="/logo.svg" alt="" className="w-[40px] h-[40px]" />
          </a>
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] border-r-[2px] border-[#34CAA5]">
          {theme === "light" ? (
            <img src="/category.svg" alt="" className="w-6 h-6" />
          ) : (
            <HiViewGrid size={24} className="text-gray-400" />
          )}
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] hover:border-r-[2px] hover:border-[#34CAA5]">
          <img src="/trend-up.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] hover:border-r-[2px] hover:border-[#34CAA5]">
          <img src="/profile-2user.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] hover:border-r-[2px] hover:border-[#34CAA5]">
          <img src="/box.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] hover:border-r-[2px] hover:border-[#34CAA5]">
          <img src="/discount-shape.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] hover:border-r-[2px] hover:border-[#34CAA5]">
          <img src="/info-circle.svg" alt="" className="w-6 h-6" />
        </div>
      </aside>
      <aside className="relative mt-8 flex flex-col items-center gap-5 bg-white p-3 rounded-full">
        {canShow ? (
          <div
            className={cn(
              "h-9 w-9 absolute left-3 rounded-full transition-all duration-700 ease-in-out",
              theme === "light" ? "bg-[#34CAA5]" : "bg-[#282b2b]",
              toggle && theme === "dark"
                ? "translate-y-[calc(100%+20px)]"
                : "translate-y-0"
            )}
          />
        ) : null}
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
          className={cn(
            "z-10 hover:scale-105 duration-300 ease-in-out cursor-pointer",
            theme === "dark" &&
              "h-9 w-9 flex justify-center items-center bg-[#282b2b] rounded-full bg-opacity-100 transition-all duration-700 ease-in"
          )}
        >
          <img src="/moon.svg" alt="" className="w-6 h-6" />
        </button>
      </aside>
      <aside className="flex flex-col items-center gap-8">
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] hover:border-r-[2px] hover:border-[#34CAA5]">
          <img src="/arrow-right.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] hover:border-r-[2px] hover:border-[#34CAA5]">
          <img src="/setting-2.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer  mx-[2px] px-[1.6rem] hover:border-r-[2px] hover:border-[#34CAA5]">
          <img src="/logout.svg" alt="" className="w-6 h-6" />
        </div>
      </aside>
    </main>
  );
};

export default Sidebar;
