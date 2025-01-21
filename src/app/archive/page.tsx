import DisplayLayout from "@/components/layout";

import Link from "next/link";

const ArchivePage = () => {
    return (
        <div>
            <DisplayLayout>
                <div className="">
                    <div className="bg-[#161616]">
                        <div className="welcome-sect pt-48 pb-20">
                            <h2 className="text-3xl md:text-6xl  font-medium text-white text-center tracking-widest mb-5">Archive</h2>
                            <div className="rounded-full border-2 border-solid border-offWhite w-[96%] md:w-[50%] py-1 px-1 mx-auto flex items-center">
                                <input type="text" className="bg-transparent flex-1 w-full rounded-full h-full text-offWhite py-4 px-2" />
                                <button className="text-sm md:text-base bg-[#E7AB54] py-4 px-8 rounded-full">Search Archive</button>
                            </div>
                            <ul className="flex gap-10 justify-center hidden">
                                <li className="text-offWhite cursor-pointer">A</li>
                                <li className="text-offWhite cursor-pointer">B</li>
                                <li className="text-offWhite cursor-pointer">C</li>
                                <li className="text-offWhite cursor-pointer">D</li>
                                <li className="text-offWhite cursor-pointer">E</li>
                                <li className="text-offWhite cursor-pointer">F</li>
                                <li className="text-offWhite cursor-pointer">G</li>
                                <li className="text-offWhite cursor-pointer">H</li>
                                <li className="text-offWhite cursor-pointer">I</li>
                                <li className="text-offWhite cursor-pointer">J</li>
                                <li className="text-offWhite cursor-pointer">K</li>
                                <li className="text-offWhite cursor-pointer">L</li>
                                <li className="text-offWhite cursor-pointer">M</li>
                                <li className="text-offWhite cursor-pointer">N</li>
                                <li className="text-offWhite cursor-pointer">O</li>
                                <li className="text-offWhite cursor-pointer">P</li>
                                <li className="text-offWhite cursor-pointer">Q</li>
                                <li className="text-offWhite cursor-pointer">R</li>
                                <li className="text-offWhite cursor-pointer">S</li>
                                <li className="text-offWhite cursor-pointer">T</li>
                                <li className="text-offWhite cursor-pointer">U</li>
                                <li className="text-offWhite cursor-pointer">V</li>
                                <li className="text-offWhite cursor-pointer">W</li>
                                <li className="text-offWhite cursor-pointer">X</li>
                                <li className="text-offWhite cursor-pointer">Y</li>
                                <li className="text-offWhite cursor-pointer">Z</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-28 px-5 md:px-20">
                        <div className="flex flex-col md:grid grid-cols-4 gap-10">
                            <div>
                                <div className="h-[15rem] md:h-[20rem] bg-[#161616] mb-5 w-full"></div>
                                <Link href="/archive/2">
                                    <p className="uppercase font-medium text-sm mb-3">MP3</p>
                                    <h3 className="text-2xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                                </Link>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[20rem] bg-[#161616] mb-5 w-full"></div>
                                <Link href="/archive/2">
                                    <p className="uppercase font-medium text-sm mb-3">Podcast</p>
                                    <h3 className="text-2xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                                </Link>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[20rem] bg-[#161616] mb-5 w-full"></div>
                                <Link href="/archive/2">
                                    <p className="uppercase font-medium text-sm mb-3">MP4</p>
                                    <h3 className="text-2xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                                </Link>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[20rem] bg-[#161616] mb-5 w-full"></div>
                                <Link href="/archive/2">
                                    <p className="uppercase font-medium text-sm mb-3">Article</p>
                                    <h3 className="text-2xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                                </Link>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[20rem] bg-[#161616] mb-5 w-full"></div>
                                <Link href="/archive/2">
                                    <p className="uppercase font-medium text-sm mb-3">Podcast</p>
                                    <h3 className="text-2xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                                </Link>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[20rem] bg-[#161616] mb-5 w-full"></div>
                                <Link href="/archive/2">
                                    <p className="uppercase font-medium text-sm mb-3">Podcast</p>
                                    <h3 className="text-2xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                                </Link>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[20rem] bg-[#161616] mb-5 w-full"></div>
                                <Link href="/archive/2">
                                    <p className="uppercase font-medium text-sm mb-3">Podcast</p>
                                    <h3 className="text-2xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                                </Link>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[20rem] bg-[#161616] mb-5 w-full"></div>
                                <Link href="/archive/2">
                                    <p className="uppercase font-medium text-sm mb-3">Podcast</p>
                                    <h3 className="text-2xl leading-tight mb-2">Spirit and Strength: Modern Art from Haiti</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayLayout>
        </div>
    )
}

export default ArchivePage;