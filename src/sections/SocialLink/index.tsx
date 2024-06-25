import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
import { useInView } from "react-intersection-observer";

function SocialLinks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/fran-albert",
      icon: "https://static-00.iconduck.com/assets.00/github-icon-512x512-52n2sbyc.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/francisco-albert-091646195/",
      icon: "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-yexr80uq.png",
    },
  ];

  return (
    <section id="social-links" className="w-full bg-muted">
      <div className="container px-4 md:px-6">
        <div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-900">
              {inView ? (
                <ReactTyped strings={["Social Links"]} typeSpeed={40} />
              ) : (
                "Social Links"
              )}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-2 justify-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{link.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;
