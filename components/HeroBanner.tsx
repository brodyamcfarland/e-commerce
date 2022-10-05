import React from "react";
import Link from "next/link";
import { Banner } from "../types";
import { urlFor } from "../lib/client";

type Props = {
    bannerData: Banner[];
};

const HeroBanner = ({ bannerData }: Props) => {
    return (
        <div className="h-[266.36px] cursor-pointer border-b border-t border-gray-700 bg-black">
            <div className="relative px-8">
                <img
                    src={urlFor(bannerData[0]?.image).url()}
                    alt="banner-image"
                    className="absolute top-0 right-0 object-contain w-full h-[266.36px] z-0"
                />
                <div className="absolute flex flex-col top-10 z-10 gap-2">
                    <p className="">{bannerData[0]?.smallText}</p>
                    <h3 className="text-2xl font-extrabold">
                        {bannerData[0]?.midText}
                    </h3>
                    <h1 className="">{bannerData[0]?.largeText1}</h1>
                    <Link href={`/product/${bannerData[0]?.product}`}>
                        <button
                            type="button"
                            className="border border-purple-900 rounded-lg bg-[#1f001f] px-2 py-1 opacity-70 hover:opacity-100 duration-500"
                        >
                            {bannerData[0]?.buttonText}
                        </button>
                    </Link>
                </div>
                <div className="absolute flex flex-col items-center justify-center top-10 z-10 right-8 gap-2">
                    <h5 className="font-bold">Description</h5>
                    <p className="font-thin w-40 text-gray-300">
                        {bannerData[0]?.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
