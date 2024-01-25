import React, { useEffect, useState } from "react";
import { platforms } from "../../../data/platforms";
import { cn } from "../../lib/utils";

const Platform = () => {
  const [colors, setColors] = useState<string[]>([]);
  function generateRandomBrightColors() {
    const colors: string[] = [];

    for (let i = 0; i < 5; i++) {
      const randomColor = `rgb(${Math.floor(Math.random() * 156) + 100}, ${
        Math.floor(Math.random() * 156) + 100
      }, ${Math.floor(Math.random() * 156) + 100})`;
      colors.push(randomColor);
    }

    setColors(colors);
  }
  useEffect(() => {
    generateRandomBrightColors();
  }, []);
  return (
    <main className="w-full bg-white p-4 rounded-[14px] border border-border">
      <h1 className="text-[18px] font-medium">Top Platform</h1>
      <div className="mt-5">
        {platforms.map((platform, index) => {
          return (
            <div key={index} className="space-y-4 my-3">
              <h1 className="font-semibold text-[18px]">{platform.name}</h1>
              <div className="relative w-full bg-gray-200 rounded-full h-4">
                <div
                  className="rounded-full"
                  style={{
                    backgroundColor: colors[index],
                    width: `${(platform.amount / 10000000) * 100}%`,
                    height: "100%",
                  }}
                ></div>
              </div>
              <article className="flex justify-between items-center">
                <p>${platform.amount}</p>
                <p>
                  +
                  {((platform.previousAmount / platform.amount) * 100).toFixed(
                    2
                  )}
                  %
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Platform;