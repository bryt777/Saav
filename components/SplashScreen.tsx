"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("seven");

    if (!seen) {
      localStorage.setItem("seven", "true");

      setTimeout(() => {
        setHidden(true);
      }, 2500);
    } else {
      setHidden(true);
    }
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ${
        hidden
          ? "opacity-0 blur-3xl pointer-events-none"
          : "opacity-100"
      }`}
    >
      <img
        src="/logo.png"
        alt="SEVEN"
        className={`w-48 transition-all duration-1000 ${
          hidden ? "scale-125 blur-3xl" : ""
        }`}
      />
    </div>
  );
}
