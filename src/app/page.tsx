import Image from "next/image";

import Grid1 from "@/assets/images/grid_1.jpg";
import HeroImg from "@/assets/images/hero.svg";
import DisplayLayout from "@/components/layout";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <DisplayLayout>
      <div>
        <div className="w-full pb-20 bg-[#161616] relative">
          <Image src={HeroImg} alt="Sketch" className="w-max mx-auto pt-24" />
          <div className="px-5 md:px-20">
            <div className="hidden md:flex flex-col md:grid grid-cols-3 justify-between w-full mt-10">
              <div className="">
                <h3 className="text-white text-4xl leading-snug">
                  <span className="block text-[#ccccc4]">Find </span>the photo
                </h3>
              </div>
              <div className="md:text-center">
                <div className="">
                  <div className="mx-auto">
                    <p className="text-base text-[#ccccc4] md:leading-loose inline-block mb-7">
                      By leveraging Humanz and other cutting-edge tools, we are able to create campaigns that not only resonate with audiences but also
                      drive real results for our clients.
                    </p>
                    <button className="py-4 px-8 rounded-full text-base bg-[#ccccc4] w-max mx-auto flex items-center gap-3">
                      Get Started <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <h3 className="text-white text-4xl leading-snug">
                  <span className="block text-[#ccccc4]">that reflects</span> your idea
                </h3>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-3xl md:text-4xl leading-snug">
                  <span className="block text-[#ccccc4]">Find </span>the photo
                </h3>
                <h3 className="text-white text-3xl md:text-4xl leading-snug">
                  <span className="block text-[#ccccc4]">that reflects</span> your idea
                </h3>
              </div>
              <div className="md:text-center">
                <div className="">
                  <div className="mx-auto">
                    <p className="text-base text-[#ccccc4] md:leading-loose inline-block mb-7">
                      By leveraging Humanz and other cutting-edge tools, we are able to create campaigns that not only resonate with audiences but also
                      drive real results for our clients.
                    </p>
                    <button className="py-4 px-8 rounded-full text-base bg-[#ccccc4] w-max mx-auto flex items-center gap-3">
                      Get Started <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 md:px-20 mt-32">
          <div className="md:w-[70%] mx-auto">
            <p className="text-center uppercase font-medium mb-5">What We Do</p>
            <h3 className="text-3xl md:text-6xl text-center leading-tight">Turning Your Vision into a Reality: Our Comprehensive Approach To Influencer Marketing</h3>
          </div>
          <div className="mt-10 md:px-14">
            <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-20">
              <div>
                <div>
                  <Image src={Grid1} alt="" />
                </div>
                <div className="mt-5">
                  <p className="uppercase font-medium mb-3">Exhibition</p>
                  <h3 className="text-2xl md:text-3xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                  <p className="text-sm md:text-base mb-3">
                    We recommend playing on a computer or tablet. If you&apos;re using a tablet, be sure to rotate your device to
                    landscape mode. Best for ages 5 and up.
                  </p>
                  <button className="border-2 border-black px-8 py-3 text-sm border-solid">Read More</button>
                </div>
              </div>
              <div>
                <div>
                  <Image src={Grid1} alt="" />
                </div>
                <div className="mt-5">
                  <p className="uppercase font-medium mb-3">Exhibition</p>
                  <h3 className="text-2xl md:text-3xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                  <p className="text-sm md:text-base mb-3">
                    We recommend playing on a computer or tablet. If you&apos;re using a tablet, be sure to rotate your device to
                    landscape mode. Best for ages 5 and up.
                  </p>
                  <button className="border-2 border-black px-8 py-3 text-sm border-solid">Read More</button>
                </div>
              </div>
              <div>
                <div>
                  <Image src={Grid1} alt="" />
                </div>
                <div className="mt-5">
                  <p className="uppercase font-medium mb-3">Exhibition</p>
                  <h3 className="text-2xl md:text-3xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                  <p className="text-sm md:text-base mb-3">
                    We recommend playing on a computer or tablet. If you&apos;re using a tablet, be sure to rotate your device to
                    landscape mode. Best for ages 5 and up.
                  </p>
                  <button className="border-2 border-black px-8 py-3 text-sm border-solid">Read More</button>
                </div>
              </div>
              <div>
                <div>
                  <Image src={Grid1} alt="" />
                </div>
                <div className="mt-5">
                  <p className="uppercase font-medium mb-3">Exhibition</p>
                  <h3 className="text-2xl md:text-3xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                  <p className="text-sm md:text-base mb-3">
                    We recommend playing on a computer or tablet. If you&apos;re using a tablet, be sure to rotate your device to
                    landscape mode. Best for ages 5 and up.
                  </p>
                  <button className="border-2 border-black px-8 py-3 text-sm border-solid">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 bg-[#161616] py-28 px-5 md:px-20">
          <div className="flex flex-col md:grid grid-cols-2 gap-5 md:gap-20 mb-20">
            <div>
              <div className="h-[15rem] md:h-[40rem] w-full bg-[#F9F9F5]"></div>
            </div>
            <div>
              <p className="uppercase text-sm md:text-lg mb-5 text-[#ccccc4] tracking-widest font-medium">creative approach</p>
              <h3 className="text-4xl md:text-7xl mb-5 text-white">
                Driving Success with Humanz
              </h3>
              <p className="text-base md:text-lg text-[#ccccc4] md:leading-loose">
                By leveraging Humanz and other cutting-edge tools, we are able to create campaigns that not only resonate with audiences but also
                drive real results for our clients. We are constantly adapting and evolving our strategies to stay ahead of the curve and
                deliver the best possible outcomes.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-20">
            <div>
              <p className="uppercase text-sm md:text-lg mb-5 text-[#ccccc4] tracking-widest font-medium">creative approach</p>
              <h3 className="text-4xl md:text-7xl mb-5 text-white">
                Driving Success with Humanz
              </h3>
              <p className="text-base md:text-lg text-[#ccccc4] md:leading-loose">
                By leveraging Humanz and other cutting-edge tools, we are able to create campaigns that not only resonate with audiences but also
                drive real results for our clients. We are constantly adapting and evolving our strategies to stay ahead of the curve and
                deliver the best possible outcomes.
              </p>
            </div>
            <div>
              <div className="h-[15rem] md:h-[40rem] w-full bg-[#F9F9F5] md:-mt-[15rem]"></div>
            </div>
          </div>
        </div>
        <div className="w-full mt-28 px-5 md:px-20">
          <div className="md:w-[70%] mx-auto mb-10">
            <p className="text-center uppercase font-medium mb-5">What We Do</p>
            <h3 className="text-3xl md:text-6xl text-center leading-tight">Turning Your Vision into a Reality: Our Comprehensive Approach.</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-2 md:mb-10">
            <div className="w-full md:w-max md:px-52 py-20 border-2 border-black border-solid rounded-xl h-[20rem]">
              {/* <h3 className="text-8xl font-black">50+</h3>
              <p className="text-2xl">Increased exposure rate of CTAs</p>

              <h4 className="mt-5 text-xl">
                How The North Face increased its CTA exposure rate by +50% with Contentsquare
              </h4> */}
            </div>
            <div className="w-full bg-black rounded-xl"></div>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 gap-10">
            <div className="flex flex-col md:grid grid-cols-2 gap-10">
              <div>
                <div className="px-5 py-20 border-2 border-black border-solid rounded-xl h-[20rem]">
                  {/* <h3 className="text-8xl font-black">50+</h3>
                  <p className="text-base">Increased exposure rate of CTAs</p>

                  <h4 className="mt-5 text-xl">
                    How The North Face increased its CTA exposure rate by +50% with Contentsquare
                  </h4> */}
                </div>
              </div>
              <div>
                <div className="px-5 py-20 border-2 border-black border-solid rounded-xl h-[20rem]">
                  {/* <h3 className="text-8xl font-black">50+</h3>
                  <p className="text-base">Increased exposure rate of CTAs</p>
                  <h4 className="mt-5 text-xl">
                    How The North Face increased its CTA exposure rate by +50% with Contentsquare
                  </h4> */}
                </div>
              </div>
            </div>
            <div className="w-full bg-black rounded-xl"></div>
          </div>
        </div>
      </div>
    </DisplayLayout>
  );
}