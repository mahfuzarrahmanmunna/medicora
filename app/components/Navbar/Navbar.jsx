"use client";
import React from "react";
import logo from "./../../../assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "About", path: "/about" },
        { label: "Doctors", path: "/doctor" },
        { label: "Services", path: "/services" },
        { label: "Help", path: "/helps" },
        { label: "News", path: "/news" },
        { label: "Contact", path: "/contact" },
    ];

    const navMenu = () =>
        navItems.map((item) => (
            <li key={item.path}>
                <Link
                    href={item.path}
                    className={`relative px-3 py-2 transition-all duration-300 rounded-md
            hover:text-primary hover:bg-primary/10 
            ${pathname === item.path ? "text-primary font-semibold" : "text-base-content"}
          `}
                >
                    {item.label}
                    {/* Active route underline animation */}
                    {pathname === item.path && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full animate-slideIn"></span>
                    )}
                </Link>
            </li>
        ));

    return (
        <div className="flex justify-between items-center py-3 bg-base-100 shadow-sm px-3 sm:px-12 lg:px-24 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
            {/* Left - Logo & Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h12M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box"
                    >
                        {navMenu()}
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} width={120} height={40} alt="Company Logo" priority />
                </Link>
            </div>

            {/* Right - Nav Links & Button */}
            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-4">
                    <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
                </div>
                <Link
                    href="/appointment"
                    className="btn btn-primary btn-sm px-5 py-5 md:text-base text-white  rounded-full transition-transform duration-300 hover:scale-105"
                >
                    Book Appointment 
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
