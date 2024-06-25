import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import { ReactTyped } from "react-typed";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const skills = [
    {
      name: "React",
      icon: "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
    },
    {
      name: "Next.js",
      icon: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
    },
    {
      name: "Nest.js",
      icon: "https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://static-00.iconduck.com/assets.00/tailwindcss-icon-icon-1024x615-2e98imbv.png",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
    },
    {
      name: "AWS",
      icon: "https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-274bm1xi.png",
    },
    {
      name: "TypeScript",
      icon: "https://static-00.iconduck.com/assets.00/file-type-typescript-icon-2048x1349-0um6gqic.png",
    },
    {
      name: "DBeaver",
      icon: "https://static-00.iconduck.com/assets.00/dbeaver-icon-2048x2026-kcj6pqth.png",
    },
    {
      name: "PostgreSQL",
      icon: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
    },
  ];

  return (
    <section id="skills" className="w-full bg-muted">
      <div className="container px-4 md:px-6">
        <div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-900">
            {inView ? (
                <ReactTyped strings={["Skills"]} typeSpeed={40} />
              ) : (
                "Skills"
              )}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
