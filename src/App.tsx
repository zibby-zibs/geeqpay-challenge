import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import { ChartCard } from "./components/chartDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex w-full h-full font-jakarta">
      <Sidebar />
      <section className="grid grid-cols-3 gap-4 w-full mt-9 mx-5">
        <aside className="col-span-2 w-full">
          <ChartCard />
        </aside>
        <div className="col-span-1 w-full">Next block</div>
      </section>
    </main>
  );
}

export default App;
