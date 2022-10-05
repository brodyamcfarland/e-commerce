import React from "react";
import { Banner } from "../types";
import Link from "next/link";
import { urlFor } from "../lib/client";

type Props = {
    bannerData: Banner[];
};

const FooterBanner = ({ bannerData }: Props) => {
    return (
        <div className="bg-gradient-to-b from-[#37093d] to-gray-900 rounded-lg mt-10 mx-1 sm:mx-3 md:mx-6 p-8 border border-gray-700 overflow-y-hidden">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-1">
                    <p className="font-bold">{bannerData[0]?.discount}</p>
                    <h3 className="text-sm text-gray-300">
                        {bannerData[0]?.largeText1}
                    </h3>
                    <h3 className="text-3xl font-extrabold animate-pulse text-gray-500">
                        {bannerData[0]?.largeText2}
                    </h3>
                    <p className="font-bold text-sm">
                        {bannerData[0]?.saleTime}
                    </p>
                </div>
                <img
                    src={urlFor(bannerData[0]?.image).url()}
                    className="h-36 pt-0 md:pt-8 rotate-0 md:rotate-90"
                />
                <div className="flex flex-col gap-1 justify-center items-center">
                    <p className="font-bold">{bannerData[0]?.smallText}</p>
                    <h3 className="font-extrabold text-xl">
                        {bannerData[0]?.midText}
                    </h3>
                    <p className="text-xs pb-1 max-w-[25rem]">
                        {bannerData[0]?.desc}
                    </p>
                    <Link href={`/product/${bannerData[0]?.product}`}>
                        <button
                            type="button"
                            className="border border-purple-900 rounded-lg bg-black px-2 py-1 opacity-70 hover:opacity-100 duration-500 hover:bg-transparent"
                        >
                            {bannerData[0]?.buttonText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterBanner;
