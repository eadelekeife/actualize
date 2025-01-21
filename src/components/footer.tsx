import Link from "next/link";

import { BiLogoFacebook } from "react-icons/bi";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="mt-32 bg-[#161616] pt-20 pb-10 px-5 md:px-20">
        <div className="md:grid grid-cols-2 gap-10 md:gap-20">
          <div>
            <h3 className="text-4xl md:text-6xl md:leading-tight leading-tight mb-10 md:mb-16 text-white">
              Connecting brands with the right talent.
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between md:items-center">
          <ul className="grid grid-cols-2 md:flex gap-5 md:gap-10">
            <li>
              <Link href="" className="text-lg text-[#ccccc4] md:leading-loose">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg text-[#ccccc4] md:leading-loose">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg text-[#ccccc4] md:leading-loose">
                About Us
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg text-[#ccccc4] md:leading-loose">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex gap-2">
            <li className="size-14 rounded-full border-2 border-solid border-[#3B3B3A] flex items-center justify-center">
              <BiLogoFacebook className="text-white text-2xl" />
            </li>
            <li className="size-14 rounded-full border-2 border-solid border-[#3B3B3A] flex items-center justify-center">
              <SiInstagram className="text-white text-xl" />
            </li>
            <li className="size-14 rounded-full border-2 border-solid border-[#3B3B3A] flex items-center justify-center">
              <BsTwitterX className="text-white text-xl" />
            </li>
            <li className="size-14 rounded-full border-2 border-solid border-[#3B3B3A] flex items-center justify-center">
              <FaLinkedinIn className="text-white text-xl" />
            </li>
          </ul>
        </div>
        <div className="mt-14 border-t border-solid border-[#323641] pt-14">
          <p className="text-lg text-[#ccccc4] md:leading-loose">
            Actualize Films Research © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </div >
  );
}