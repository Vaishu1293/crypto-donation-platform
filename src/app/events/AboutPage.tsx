'use client';

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 text-gray-700">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          About
        </h1>

        {/* Paragraphs */}
        <p className="leading-relaxed">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
        </p>

        <p className="leading-relaxed">
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.
        </p>

        {/* Image */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/assets/images/about-image.jpg" // Update this path when you have your image
            alt="Children smiling"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Last Paragraph */}
        <p className="leading-relaxed">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
        </p>

      </div>
    </section>
  );
}
