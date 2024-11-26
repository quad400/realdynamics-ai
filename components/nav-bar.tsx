import Link from "next/link";
import React from "react";

const Navbar = () => {
  
  return (
    <div className="w-full shadow fixed backdrop-blur-sm bg-white backdrop-filter bg-opacity-60 z-50">
      <div className="flex justify-between py-4 items-center container">
        <Link href="/">
          <p className="text-lg font-semibold">RealIt</p>
        </Link>
        <div className="flex justify-center items-center space-x-5">
          <Link
            href="/outbound"
            className="flex justify-center items-center py-2 px-3 shadow-lg bg-neutral-800"
          >
            <p className="text-sm text-white font-medium">Outbound</p>
          </Link>
          <Link
            href="/inbound"
            className="flex justify-center items-center py-2 px-3 shadow-lg bg-neutral-100"
          >
            <p className="text-sm text-neutral-800 font-medium">Inbound</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
