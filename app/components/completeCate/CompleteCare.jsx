'use client'
import Image from "next/image";
import React, { useState } from "react";

const CompleteCare = () => {
    const data = [
        {
            title: "NEWBORN CARE",
            heading: "Gentle care for your newborn's needs",
            description:
                "We provide safe, evidence-based support for your baby’s first days and months of life, ensuring comfort, health, and growth.",
            image: "https://i.ibb.co/FtKXLMj/medicora-pregnancy-tab-1.jpg",
        },
        {
            title: "Parenting & Pediatrics",
            heading: "Pediatric support and parenting guidance",
            description:
                "Ongoing checkups, milestones, and expert advice for your child’s healthy development and well-being.",
            image: "https://i.ibb.co/v5jkYjK/medicora-pregnancy-tab-2.jpg",
        },
        {
            title: "Family Building",
            heading: "Support for growing your family",
            description:
                "Explore fertility services, guidance, and care tailored to your family-building hopes and challenges.",
            image: "https://i.ibb.co/ZCzKbYK/medicora-pregnancy-tab-4.jpg",
        },
    ];

    const buttonLabels = [
        "Newborn care",
        "Parenting & pediatrics",
        "Family building",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="px-4 sm:px-12 lg:px-24">
            <div className="text-center space-y-6">
                <h5 className="text-primary">COMPLETE CARE</h5>
                <h1 className="text-3xl md:text-5xl font-medium">
                    Always-on care for every journey
                </h1>
                <p className="text-gray-500 text-xl">
                    From newborn care to family planning, we support your <br /> journey
                    with trusted medical guidance.
                </p>
            </div>

            {/* Buttons in 3-column grid */}
            <div className="mt-16 grid grid-cols-3 gap-4  mx-auto">
                {buttonLabels.map((label, idx) => (
                    <button
                        key={label}
                        onClick={() => setActiveIndex(idx)}
                        className={`py-8 px-6 rounded-md font-semibold transition
              ${activeIndex === idx
                                ? "bg-primary text-white shadow-lg"
                                : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                            }
            `}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Show selected content */}
            <div className="mt-12 p-6 md:p-16 rounded-lg shadow-md flex flex-col md:flex-row gap-8 items-center bg-secondary">

                <div className="md:w-2/3 space-y-4">
                    <h4 className="text-primary font-medium text-sm">
                        {data[activeIndex].title}
                    </h4>
                    <h2 className="text-4xl font-semibold">{data[activeIndex].heading}</h2>
                    <p className="text-gray-600 text-xl">{data[activeIndex].description}</p>
                    <button className="btn btn-primary text-white p-6 rounded-full text-base font-semibold">
                        Learn more
                    </button>
                </div>
                <img
                    src={data[activeIndex].image}
                    alt={data[activeIndex].title}
                    className="w-full  rounded-lg object-cover"
                    width={550}
                    height={550}
                />
            </div>
        </div>
    );
};

export default CompleteCare;
