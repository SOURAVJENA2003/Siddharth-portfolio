// "use client";
// import React from "react";
// import { useTheme } from "@/context/ThemeContext";
// import "./ThemeToggle.css";

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
//       <div className="theme-toggle-wrapper">
//         <p className={theme === "light" ? "active" : ""}>Light</p>
//         <p className={theme === "dark" ? "active" : ""}>Dark</p>
//       </div>
//     </button>
//   );
// };

// export default ThemeToggle;


"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
      <span className={`theme-toggle-icon ${!isDark ? "visible" : "hidden"}`}>
        <BsSun />
      </span>
      <span className={`theme-toggle-icon ${isDark ? "visible" : "hidden"}`}>
        <BsMoon />
      </span>
      <span className="theme-toggle-label">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeToggle;