"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import Sun from "@/assets/svg/Sun";
import Moon from "@/assets/svg/Moon";
const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [isRotated, setRotated] = useState(false);
  // const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () =>
    theme == "dark" ? setTheme("light") : setTheme("dark");

  const handleRotation = () => {
    setRotated((isRotated) => !isRotated);
    toggleTheme();
  };
  return (
    <div className="flex justify-center">
      <div
        className={`bg-white rounded-3xl px-1 py-2 space-y-5 border w-max ${
          isRotated ? "rotate-180" : ""
        }`}
      >
        <button
          onClick={handleRotation}
          className={`block p-2 rounded-full w-max ${
            isRotated ? "bg-[#34CAA5]" : "bg-green-200"
          }`}
        >
          <Sun />
        </button>
        <button
          onClick={handleRotation}
          className="rounded-full block w-max mx-auto transform rotate-180"
        >
          <Moon />
        </button>
      </div>
    </div>
  );
};

export default Theme;
