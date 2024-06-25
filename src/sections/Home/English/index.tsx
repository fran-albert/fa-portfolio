import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
function EnglishVersion() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 lg:max-w-none">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-900">
            <ReactTyped strings={["Hi, I'm Francisco"]} typeSpeed={40} />
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
            I am an advanced student of Information Systems Engineering. My
            passion for technology and software development has led me to gain
            experience in various tools and platforms.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <Image
            src="https://mirankingtenis.s3.us-east-1.amazonaws.com/storage/avatar/Foto%20Carnet%204x4%20sin%20Fondo.png"
            width={200}
            height={350}
            alt="Project 1"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default EnglishVersion;
