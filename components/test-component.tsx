import Image from 'next/image'
import profile from "@/public/profile.jpg"

export default function BentoGrid() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Bento Grid Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Large cell spanning 2 columns and 2 rows */}
                <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">

                    <Image
                        src={profile}
                        alt="Large image"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover hover:scale-150 transition duration-700"
                    />
                </div>

                {/* Regular cells */}
                <div className="rounded-xl overflow-hidden">

                    <Image
                        src={profile}
                        alt="Image 2"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden">

                    <Image
                        src={profile}
                        alt="Image 3"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Wide cell spanning 2 columns */}
                <div className="md:col-span-2 rounded-xl overflow-hidden">

                    <Image
                        src={profile}
                        alt="Wide image"
                        width={600}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* More regular cells */}
                <div className="rounded-xl overflow-hidden">

                    <Image
                        src={profile}
                        alt="Image 5"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden">

                    <Image
                        src={profile}
                        alt="Image 6"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden">

                    <Image
                        src={profile}
                        alt="Image 7"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}


