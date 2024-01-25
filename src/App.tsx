import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import {
  ChartCard,
  TotalOrder,
  TotalRefund,
} from "./components/chartDashboard";
import Header from "./components/header/Header";
import { OrderTable } from "./components/orders";

function App() {
  return (
    <main className="flex w-full !max-w-[100%] h-full font-jakarta scrollbar-none ">
      <div>
        <Sidebar />
      </div>
      <div>
        <header className="w-[calc(100vw-80px)]">
          <Header />
        </header>
        <section className="grid-container min-w-[calc(100vw-80px)] mt-9">
          <aside className="">
            <div className="">
              <ChartCard />
            </div>
            <div className="mt-5">
              <OrderTable />
            </div>
          </aside>
          <div className="">
            <aside className="flex gap-2 w-full ">
              <TotalOrder />
              <TotalRefund />
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
