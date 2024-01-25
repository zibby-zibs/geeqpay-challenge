import React from "react";

const Loader = () => {
  return (
    <main className="flex gap-4 px-5 mt-5">
      <aside className="basis-[60%]">
        <div className="h-[374px] w-full bg-gray-400 rounded-[14px] skeleton-loader"></div>
        <div className="mt-5 border border-border bg-gray-200 w-full h-[300px] rounded-[14px] ">
          <div className="w-full flex justify-between p-4">
            <div className="w-[70px] h-[30px] bg-gray-400 rounded-sm skeleton-loader"></div>
            <div className="w-[50px] h-[30px] bg-gray-400 rounded-sm skeleton-loader"></div>
          </div>

          <div className="flex w-full justify-between px-5 mt-3">
            <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
            <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
            <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
            <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
          </div>
          <aside className="mt-4">
            <div className="flex w-full justify-between px-5 mt-3">
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
            </div>
            <div className="flex w-full justify-between px-5 mt-3">
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
            </div>
            <div className="flex w-full justify-between px-5 mt-3">
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
            </div>
            <div className="flex w-full justify-between px-5 mt-3">
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
            </div>
            <div className="flex w-full justify-between px-5 mt-3">
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
              <div className="w-[60px] h-[20px] bg-gray-400 rounded-sm skeleton-loader"></div>
            </div>
          </aside>
        </div>
      </aside>
      <aside className="basis-[40%]">
        <div>
          <aside className="w-full flex gap-4">
            <div className="rounded-[14px] w-1/2 skeleton-loader h-[180px]"></div>
            <div className="rounded-[14px] w-1/2 skeleton-loader h-[180px]"></div>
          </aside>
          <aside className="w-full flex gap-4 mt-4">
            <div className="rounded-[14px] w-1/2 skeleton-loader h-[180px]"></div>
            <div className="rounded-[14px] w-1/2 skeleton-loader h-[180px]"></div>
          </aside>
        </div>
        <div className="h-[400px] rounded-[14px] bg-gray-200 mt-5 p-4">
          <div className="space-y-8 my-3 w-full">
            <div className="space-y-4">
              <h1 className="font-semibold text-[18px] w-[100px] h-5 skeleton-loader"></h1>
              <div className="relative w-full bg-gray-200 rounded-full h-5 skeleton-loader"></div>
              <article className="flex justify-between items-center">
                <p className="skeleton-loader h-5 w-[50px] rounded-sm"></p>
                <p className="skeleton-loader h-5 w-[50px] rounded-sm"></p>
              </article>
            </div>
            <div className="space-y-4">
              <h1 className="font-semibold text-[18px] w-[100px] h-5 skeleton-loader"></h1>
              <div className="relative w-full bg-gray-200 rounded-full h-5 skeleton-loader"></div>
              <article className="flex justify-between items-center">
                <p className="skeleton-loader h-5 w-[50px] rounded-sm"></p>
                <p className="skeleton-loader h-5 w-[50px] rounded-sm"></p>
              </article>
            </div>
            <div className="space-y-4">
              <h1 className="font-semibold text-[18px] w-[100px] h-5 skeleton-loader"></h1>
              <div className="relative w-full bg-gray-200 rounded-full h-5 skeleton-loader"></div>
              <article className="flex justify-between items-center">
                <p className="skeleton-loader h-5 w-[50px] rounded-sm"></p>
                <p className="skeleton-loader h-5 w-[50px] rounded-sm"></p>
              </article>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Loader;
