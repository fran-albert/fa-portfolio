import React from "react";
import { ReactTyped } from "react-typed";

function FeaturedWorkSpanishVersion() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-900">
              <ReactTyped strings={["Mi Portfolio"]} typeSpeed={40} />
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Visitá algunas de mis aplicaciones web.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 sm:grid-cols-3 lg:grid-cols-3 justify-center">
          <div className="group relative overflow-hidden rounded-xl">
            <img
              src="https://mirankingtenis.s3.us-east-1.amazonaws.com/storage/avatar/MIRANKINGTENISPORTFOLIO.jpg"
              alt="Mi Ranking Tenis"
              className="w-full transition-all duration-300 group-hover:scale-105"
            />
            <div
              className="absolute cursor-pointer inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] p-6 transition-all duration-300 group-hover:bg-gradient-to-b"
              onClick={() =>
                window.open("https://www.app.mirankingtenis.com.ar/")
              }
            >
              <h3 className="text-xl font-bold text-primary-foreground">
                Mi Ranking Tenis - APP
              </h3>
              <p className="text-sm text-primary-foreground">
                Aplicación web para la gestión de torneos de tenis.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            <img
              src="https://mirankingtenis.s3.us-east-1.amazonaws.com/storage/avatar/incor.jpg"
              width="550"
              height="310"
              alt="Project 2"
              className="mx-auto aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div
              onClick={() =>
                window.open("https://www.miportal.incorcentromedico.com.ar/")
              }
              className="absolute cursor-pointer inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] p-6 transition-all duration-300 group-hover:bg-gradient-to-b"
            >
              <h3 className="text-xl font-bold text-primary-foreground">
                Mi Portal - Incor
              </h3>
              <p className="text-sm text-primary-foreground">
                Sistema de salud para la gestión de pacientes, médicos, turnos y
                estudios.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            <img
              src="/isotipo.png"
              width="550"
              height="310"
              alt="Project 2"
              className="mx-auto aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div
              onClick={() =>
                window.open("https://i003-cerem-front.vercel.app/inicio")
              }
              className="absolute cursor-pointer inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] p-6 transition-all duration-300 group-hover:bg-gradient-to-b"
            >
              <h3 className="text-xl font-bold text-primary-foreground">
                Cerem
              </h3>
              <p className="text-sm text-primary-foreground">
                CRM que centraliza todo en una sola plataforma y utiliza IA para
                facilitar la gestión
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkSpanishVersion;
