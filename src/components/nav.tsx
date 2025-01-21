"use client";

import Image from "next/image";

import Grid1 from "@/assets/images/grid_1.jpg";
import Grid2 from "@/assets/images/grid_2.jpg";

import Sketch from "@/assets/images/sketch.svg";
import Link from "next/link";

import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { VscLayoutMenubar } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { FaTimes } from "react-icons/fa";


export default function Navigation() {

    const [fixedNav, setFixed] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDisplayDrawer = () => setOpenDrawer(!openDrawer);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])
    return (
        <div className={`${fixedNav ? "bg-black" : "bg-transparent"} px-5 md:px-20 fixed w-full z-30 py-4 flex justify-between items-center`}>
            <div className="hidden md:block">
                <CgMenuLeft className="text-4xl text-white" />
            </div>
            <div>
                <Link href="/">
                    <h3 className="text-white text-2xl md:text-3xl flex gap-3 items-center md:pl-20"><VscLayoutMenubar /> Actualize Research</h3>
                </Link>
            </div>
            <div className="hidden md:block">
                <Link href="/archive"
                    className="flex items-center gap-2 font-bold rounded-full border-2 border-solid border-[#fff] py-3 text-white px-8">
                    Archive <FaArrowRight /></Link>
            </div>
            <div className="block md:hidden" onClick={toggleDisplayDrawer}>
                <CgMenuRight className="text-3xl text-white" />
            </div>
            <Drawer open={openDrawer} onClose={toggleDisplayDrawer}>
                <div className="relative h-full">
                    <div className="pb-10 flex items-center justify-between">
                        <Link href="/">
                            <h3 className="text-white text-xl md:text-3xl flex gap-3 items-center md:pl-20"><VscLayoutMenubar /> Actualize Research</h3>
                        </Link>
                        <FaTimes onClick={toggleDisplayDrawer} className="text-[#FF0000] text-3xl" />
                    </div>
                    <ul className="flex flex-col w-full gap-10">
                        <li className="text-base text-white font-jost">
                            <Link href="/">Home</Link></li>
                        <li className="text-base text-white font-jost">
                            <Link href="/archive">Archive</Link></li>
                        <li className="text-base text-white font-jost">
                            <Link href="/">About Us</Link></li>
                        <li className="text-base text-white font-jost">
                            <Link href="/">What We Do</Link></li>
                        <li className="text-base text-white font-jost">
                            <Link href="/"> Contact Us</Link></li>
                    </ul>
                    <div className="absolute bottom-20 w-full">
                        <div className="rounded-full border-2 border-solid border-offWhite w-full py-1 px-1 mx-auto flex items-center">
                            <input type="text" className="bg-transparent flex-1 w-full rounded-full h-full text-offWhite py-4 px-2" />
                            <button className="text-sm md:text-base bg-[#E7AB54] py-4 px-8 rounded-full">Search Archive</button>
                        </div>
                    </div>
                </div >
            </Drawer >
        </div >
    );
}