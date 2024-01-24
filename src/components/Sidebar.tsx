import React from "react";

const Sidebar = () => {
  return (
    <main className="w-20 h-[100dvh] py-5 px-[0.625rem] flex gap-8 flex-col items-center bg-primary-foreground border-r border-border">
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
    </main>
  );
};

export default Sidebar;