import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";

function SpanishVersion() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 lg:max-w-none">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-900">
              <ReactTyped
                strings={["Hola, soy Francisco"]}
                typeSpeed={40}
                showCursor={false}
              />
            </h1>
            <h2 className="text-base font-light text-gray-700">
              <ReactTyped
                strings={["Ingeniero de Sistemas"]}
                typeSpeed={50}
                startDelay={1500}
                showCursor={false}
              />
            </h2>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
            Soy un Ingeniero de Sistemas. Mi pasión por la tecnología y el
            desarrollo de software me ha llevado a adquirir experiencia en
            diversas herramientas y plataformas.
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

export default SpanishVersion;
