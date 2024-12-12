import Image from "next/image";
import profile from "@/public/profile.jpg"
import { AccordionDemo } from "./accordion";
export default function Hero() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-4 gap-4 my-2 min-h-screen">
            <div className="md:col-span-6 lg:col-span-4 lg:row-span-2 bg-[#A02334] rounded-lg">
                <div className="flex flex-col w-full h-full justify-end px-4 pb-10">
                    <h1 className="text-5xl font-bold text-[#F7B787]">Turning Ideas into Interactive Experiences</h1>
                </div>
            </div>
            <div className="md:col-span-4 lg:col-span-3 lg:row-span-2 rounded-lg relative overflow-hidden group cursor-pointer bg-red-500">
                <Image src={profile}
                    alt="profile"
                    placeholder="blur"
                    layout="responsive"
                    sizes="100vw"
                    // className="object-cover object-right-bottom rounded-lg transition-transform duration-300 group-hover:scale-150"
                    className="!h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-150"
                    loading="lazy"
                />
            </div>
            <div className="md:col-span-3 md:row-span-3 bg-[#96CEB4] rounded-lg p-4">
                <AccordionDemo />
            </div>
            <div className="md:col-span-3 md:row-span-2 bg-[#468B97] rounded-lg">
                4
            </div>
            <div className="md:col-span-4 md:row-span-2 bg-[#ED7B7B] rounded-lg">
                <h1 className="text-7xl">
                    site is under construction
                </h1>
            </div>
            <div className="md:col-span-3 bg-[#E68369] rounded-lg">
                6
            </div>

        </main>
    )
}