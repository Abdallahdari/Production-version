import React from "react";

export default function Header() {
  return (
    <div className="bg-slate-950">
      <div className=" flex items-center justify-center h-screen">
        <div className="flex flex-col gap-5 text-center ">
          <h1 className="text-3xl font-bold text-white ">
            Welcome to Dalab online shopping{" "}
          </h1>

          <p className="text-yellow-50 text-xl ">
            Order the newest clothes and shoes from anywhere and have them
            delivered to your home within two weeks
          </p>

          <div className="w-[300px] relative"></div>
        </div>
      </div>
    </div>
  );
}
