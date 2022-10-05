import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="flex flex-col bg-black border-t border-gray-700 items-center justify-center">
            <p className="text-gray-500 text-xs pt-1">
                NextJS-Stripe-Sanity 2022 All Rights Reserved
            </p>
            <div className="flex flex-row gap-2 py-1 items-center justify-center">
                <Link href="https://github.com/brodyamcfarland/e-commerce">
                    <AiOutlineGithub
                        size={25}
                        fill="white"
                        className="cursor-pointer opacity-70 hover:opacity-100 duration-500"
                    />
                </Link>
                <Link href="https://twitter.com/off2eth">
                    <AiOutlineTwitter
                        size={25}
                        fill="white"
                        className="cursor-pointer opacity-70 hover:opacity-100 duration-500"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
