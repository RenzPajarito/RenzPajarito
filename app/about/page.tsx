"use client";

import AboutMe from "@/components/portfolio/about-me";
import Footer from "@/components/portfolio/footer";
import Header from "@/components/portfolio/header";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  const images = [
    { src: "/renz-pajarito/me1.jpg", className: "" },
    { src: "/renz-pajarito/me2.jpg", className: "" },
    { src: "/renz-pajarito/me3.jpg", className: "sm:col-span-2 md:col-span-1" },
  ];

  return (
    <div className="min-h-screen p-3 mx-auto space-y-2 bg-[#ecf0f3]">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <AboutMe />

        <Card className="h-fit min-h-[740px] bg-[#ecf0f3] relative shadow-sm border-white">
          <div className="flex flex-col h-full p-4 md:p-6 space-y-6">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-sm relative">
              <Image
                src="/renz-pajarito/me5.jpg"
                alt="Renz Pajarito"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image) => (
                <div
                  key={image.src}
                  className={`h-[250px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden shadow-sm relative ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt="Renz Pajarito"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300 sm:object-center object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
