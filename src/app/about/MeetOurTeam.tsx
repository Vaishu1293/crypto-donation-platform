// src/app/about/MeetOurTeam.tsx

import Image from "next/image";

export default function MeetOurTeam() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet our team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { name: "Leonard John Davies", position: "Cofounder, CEO" },
            { name: "Francis Weber", position: "Vice Chairman" },
            { name: "Kyla Obrien", position: "Head of Authority" },
            { name: "Adrian Dixon", position: "Support Executive" },
            { name: "Freddy Busby", position: "Project Manager" },
            { name: "Dale Banks", position: "Accountant, Finance" },
            { name: "Miriam Middleton", position: "Cofounder, CEO" },
            { name: "Ellen Walton", position: "Vice Chairman" },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              {/* Team Member Image */}
              <div className="w-48 h-48 rounded-2xl overflow-hidden">
                <Image
                  src={`/assets/images/About Us/team/team-placeholder-${index + 1}.jpg`} // placeholder
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Member Name */}
              <div className="text-lg font-semibold text-gray-900">{member.name}</div>

              {/* Member Position */}
              <div className="text-sm text-gray-500">{member.position}</div>

              {/* Social Links */}
              <div className="flex gap-4 mt-2">
                <Image src="/assets/icons/facebook.svg" alt="Facebook" width={20} height={20} />
                <Image src="/assets/icons/twitter.svg" alt="Twitter" width={20} height={20} />
                <Image src="/assets/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
