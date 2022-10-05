import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="sticky flex flex-row bg-black text-white py-2 px-4 items-center justify-between">
            <p className="text-sm font-bold text-purple-300 border border-purple-600 px-2 rounded-lg bg-[#3a0a2fb6] hover:bg-transparent duration-500 cursor-pointer">
                <Link href="/">Home</Link>
            </p>
            <button type="button" className="relative">
                <AiOutlineShopping size={28} />
                <span className="absolute flex items-center justify-center top-0 left-4 h-4 w-4 bg-red-600 rounded-full text-xs">
                    1
                </span>
            </button>
        </div>
    );
};

export default Navbar;
