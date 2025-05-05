// src/app/about/KnowAboutUs.tsx

import Image from "next/image";

export default function KnowAboutUs() {
    return (
        <section className="w-full">
            {/* Top White Section */}
            <div className="w-full bg-white pb-40 px-6 md:px-20 relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 pt-20">
                    
                    {/* Text Left */}
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-px bg-black" />
                            <span className="uppercase tracking-widest text-xs font-semibold text-gray-700">
                                Know About Us
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            We are a non-governmental organization
                        </h2>
                    </div>

                    {/* Text Right */}
                    <div className="max-w-md flex flex-col gap-4">
                        <p className="text-gray-900 font-semibold leading-relaxed">
                            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                    </div>
                </div>

                {/* Video Overlapping */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-32 w-full max-w-6xl">
                    <div className="relative w-full rounded-xl overflow-hidden">
                        <Image
                            src="/assets/images/About Us/know-about-us-video.jpg"
                            alt="Group of people celebrating"
                            width={1200}
                            height={600}
                            className="object-cover w-full h-auto"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="bg-white rounded-full p-4 shadow-lg">
                                <Image src="/assets/images/About Us/play-icon.jpg" alt="Play Video" width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Yellow Section */}
            {/* 🛠️ Key: Add enough padding-top to push below video */}
            <div className="w-full bg-[#FFF3D9] pt-80 pb-20 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-16">
                    
                    {/* Mission and Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold text-gray-900 uppercase">Our Mission</h4>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                We make sure to provide inclusive care for children with special needs
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold text-gray-900 uppercase">Our Vision</h4>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Provide more inclusive care to children around the world
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                            </p>
                        </div>
                    </div>

                    {/* Supporters */}
                    <div className="mt-16 w-full flex flex-col gap-8">
                        <h4 className="uppercase text-sm font-semibold tracking-widest text-gray-700">
                            Our Supporters
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 w-full items-center">
                            {Array(6).fill(0).map((_, index) => (
                                <Image
                                    key={index}
                                    src={`/assets/images/About Us/logo-placeholder-${index + 1}.svg`}
                                    alt="Supporter logo"
                                    width={100}
                                    height={30}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
