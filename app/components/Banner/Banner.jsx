"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Banner = () => {
    const category = ["health", "growth", "potential"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % category.length);
        }, 3000);

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <div className="lg:flex items-center justify-between min-h-[300px] bg-base-100 ">
            <div className="lg:w-1/2 space-y-6 pl-3 sm:ps-12 lg:pl-24">
                <h5 className="text-base text-primary mb-2">CARING STARTS HERE</h5>
                <h1 className="text-3xl lg:text-7xl font-semibold">
                    Protecting your child's{" "}
                    <span className="text-primary transition-all duration-500 ease-in-out">
                        {category[currentIndex]}
                    </span> <br /> with trusted care
                </h1>
                <p className="text-gray-600 text-xl ">
                    Compassionate care for pregnancy, newborns, <br /> and your growing family's health journey.
                </p>
                <button className="btn btn-primary rounded-full text-xl px-8 py-6 text-white ">
                    How can we help
                </button>
            </div>
            <div className="w-1/2 bg-secondary py-24 rounded-bl-4xl">
                <div>
                    <figure>
                        <Image src={'https://i.ibb.co.com/bkYcz48/Screenshot-2025-08-11-001500.png'} alt="banner" width={600} height={600} className="rounded-r-2xl" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Banner;
