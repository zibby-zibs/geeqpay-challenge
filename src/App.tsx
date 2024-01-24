import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <section className="grid grid-cols-3 gap-4 w-full">
        <div className="col-span-2 w-full">First block</div>
        <div className="col-span-1 w-full">Next block</div>
      </section>
    </main>
  );
}

export default App;
