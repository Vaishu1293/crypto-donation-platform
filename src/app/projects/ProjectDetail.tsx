'use client';

import Image from "next/image";

export default function ProjectDetailSection() {
    return (
        <section className="w-full py-20 px-6 md:px-20 bg-white text-[#1D253C]">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">

                {/* Top Label */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-px bg-black" />
                        <span className="uppercase tracking-widest text-xs font-semibold text-gray-700">
                            Our Project
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        Mission Smile 1k: Outdoor<br />charity outreach
                    </h1>
                </div>

                {/* Paragraphs */}
                <div className="flex flex-col gap-6 text-gray-600 text-[15px] leading-relaxed">
                    <p>
                        Etiam et lobortis nunc. Faucibus libero vitae sapien nullam in lorem ipsum porta mattis. Egestas semper rhoncus scelerisque natoque varius dictumst. Neque imperdiet ut id enim parturient elit vitae egestas, vestibulum ut orci. Phasellus habitant eget condimentum scelerisque integer eu ac suspendisse. Aliquet sed convallis tincidunt sed augue turpis malesuada penatibus viverra. Non eget porttitor faucibus proin ultricies nunc.
                    </p>
                    <p>
                        Venenatis sit diam non euismod, odio bibendum pulvinar, lorem lacus. Tellus vulputate sit euismod cursus dui lectus. Ut est id erat diam. Aliquam id elementum vel aliquam.
                    </p>
                    <p>
                        Mauris donec enim netus amet elementum arcu. Et felis dignissim felis tristique in. Aenean massa a mi et. Egestas et ridiculus sed sagittis mattis. Massa ac elit eget, sit dignissim justo blandit cursus a. Duis lorem egestas pulvinar est integer feugiat gravida egestas arcu. Massa ultricies faucibus pellentesque est natoque elit.
                    </p>
                </div>

                {/* Main Image */}
                <div className="w-full overflow-hidden rounded-lg">
                    <div className="bg-gray-300 w-full h-64 md:h-72 flex items-center justify-center text-gray-500">
                        {/* Placeholder text */}
                        Image Placeholder
                    </div>
                </div>

                {/* Subheading and List */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                        Some cool heading
                    </h2>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                        Posuere sed pulvinar erat faucibus parturient cras. Eros in facilisi at et convallis blandit blandit. Massa eros odio eu, placerat morbi. Ac sit nisl netus at dignissim augue. Bibendum eget donec vitae mattis turpis. Leo est elementum turpis bibendum amet. Tellus risus bibendum cras massa feugiat lorem at. Vitae sit malesuada vitae est suspendisse laoreet. Massa ac elit eget, sit dignissim justo blandit cursus a. Duis lorem egestas pulvinar est integer feugiat gravida egestas arcu. Massa ultricies faucibus pellentesque est natoque elit.
                    </p>

                    {/* Bullet List */}
                    <ul className="list-disc list-inside text-gray-600 text-[15px] leading-relaxed space-y-2">
                        <li>Posuere sed pulvinar erat faucibus parturient cras.</li>
                        <li>Posuere sed pulvinar erat faucibus parturient cras.</li>
                        <li>Massa ultricies faucibus pellentesque est natoque elit.</li>
                        <li>Massa ultricies faucibus pellentesque est natoque elit.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
