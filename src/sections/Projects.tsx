// src/app/sections/Projects.tsx
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Mission smile 1k: Outdoor charity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/assets/images/projects-placeholder-1.jpg",
  },
  {
    title: "Weekly excursions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/assets/images/projects-placeholder-2.jpg",
  },
  {
    title: "Monthly public awareness",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/assets/images/projects-placeholder-3.jpg",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-black" />
            <span className="uppercase tracking-wide text-xs font-semibold text-gray-700">
              Projects we have done
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 text-center md:text-left">
            We are creating a place where children with special needs can thrive
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

              {/* Text Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <Link href="#">
                  <button className="bg-white text-black font-medium py-2 px-4 rounded hover:bg-gray-100 transition-all text-sm">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
