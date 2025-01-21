import DisplayLayout from "@/components/layout";

import { TbCategory } from "react-icons/tb";
import { BsCalendar2DateFill } from "react-icons/bs";


const AchiveDetail = () => {
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="bg-[#161616] px-5 md:px-20">
                        <div className="mx-auto pt-56 pb-40 w-w-[80%] md:[50%]">
                            <ul className="flex gap-10 mb-10 md:mb-6 mx-auto w-max">
                                <li className="text-sm uppercase text-offWhite font-medium flex items-center gap-3"><TbCategory className="text-xl" /> EVOLUTION</li>
                                <li className="text-sm uppercase text-offWhite font-medium flex items-center gap-3"><BsCalendar2DateFill className="text-lg" /> March 21,2024</li>
                            </ul>
                            <h3 className="text-offWhite text-center font-medium text-4xl md:text-5xl md:leading-normal mb-10">
                                The Nigerian Civil War
                            </h3>
                        </div>
                    </div>
                    <div className="px-5 md:px-20">
                        <div className="md:w-[70%] mx-auto">
                            <div className="bg-black h-[20rem] md:h-[32rem] -mt-44 w-full mb-10 rounded-xl"></div>
                            <p className="leading-loose md:leading-loose text-base md:text-lg">
                                There are a number of ways we could use this type of middleware. We could create a logging system where we
                                console log the IP address of every request coming to our app on every route or build an authentication
                                system that checks every request&apos;s header for an authorization key before calling the route.
                                There are a number of ways we could use this type of middleware. We could create a logging system where we
                                console log the IP address of every request coming to our app on every route or build an authentication
                                system that checks every request&apos;s header for an authorization key before calling the route.
                            </p>
                            <p className="text- leading-loose md:leading-loose md:text-lg">
                                There are a number of ways we could use this type of middleware. We could create a logging system where we
                                console log the IP address of every request coming to our app on every route or build an authentication
                                system that checks every request&apos;s header for an authorization key before calling the route.
                                There are a number of ways we could use this type of middleware. We could create a logging system where we
                                console log the IP address of every request coming to our app on every route or build an authentication
                                system that checks every request&apos;s header for an authorization key before calling the route.
                            </p>

                            <div className="border-t-2 border-solid border-black mt-10 pt-10">
                                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl md:mb-5 font-bold">1967 - 1970</h2>
                                        <p>Year</p>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl md:mb-5 font-bold">Ojukwu Museum, Awka, Anambra State</h2>
                                        <p>Current Location</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    )
}

export default AchiveDetail;