import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import {
  AverageSales,
  ChartCard,
  TotalIncome,
  TotalOrder,
  TotalRefund,
} from "./components/chartDashboard";
import Header from "./components/header/Header";
import { OrderTable, Platform } from "./components/orders";
import Loader from "./components/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <main className="relative flex w-full !max-w-[100vw] h-full font-jakarta scrollbar-none ">
      <div className="sticky top-0 left-0 hidden xl:block">
        <Sidebar />
      </div>
      <div>
        <header className="w-[calc(100vw-80px)]">
          <Header />
        </header>
        {loading ? (
          <Loader />
        ) : (
          <section className="flex flex-col gap-5 w-[calc(100vw-10px)] xl:max-w-[calc(100vw-80px)] my-9 px-3 lg:px-5 ">
            <aside className="flex gap-4 flex-col xl:flex-row">
              <div className="flex-[0.6]">
                <ChartCard />
              </div>
              <div className="flex-[0.4]">
                <aside className="flex gap-2">
                  <div className="basis-1/2 space-y-2">
                    <TotalOrder />
                    <AverageSales />
                  </div>
                  <div className="basis-1/2 space-y-2">
                    <TotalRefund />
                    <TotalIncome />
                  </div>
                </aside>
              </div>
            </aside>
            <div className="flex gap-4 flex-col xl:flex-row">
              <div className="mt-5 flex-[0.6]">
                <OrderTable />
              </div>
              <aside className="mt-5 flex-[0.4]">
                <Platform />
              </aside>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
