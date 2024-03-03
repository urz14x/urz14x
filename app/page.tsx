"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IBM_Plex_Sans_KR, IBM_Plex_Sans } from "next/font/google";
import SectionContainer from "@/components/Section/SectionContainer";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import Experience from "@/components/Experience/Experience";
import Project from "@/components/Project/Project";
import Footer from "@/components/Footer/Footer";

const IBM_plex_sans_kr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: "700",
});

const IBM_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  const segement = useSelectedLayoutSegment();
  useEffect(() => {
    console.log(segement);
  }, [segement]);

  return (
    <>
      <div className={IBM_plex_sans.className}>
        <div className="min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:flex-row flex-col lg:gap-4 text-clrs-primary-50">
            <header className="lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:flex lg:flex-col">
              <div className=" lg:px-20 flex flex-col justify-between h-full py-8">
                <div className="flex flex-col space-y-5">
                  <div className="relative">
                    <div className="relative -z-10 inset-0">
                      <div className="w-44 h-44 bg-blue-700 blur-3xl rounded-full absolute inset-0 lg:block hidden"></div>
                    </div>
                    <Image
                      src="/img/Ustami.svg"
                      alt="Ustami Razib Profile"
                      className="lg:block hidden"
                      width={180}
                      height={180}
                      priority
                    />
                  </div>

                  <div>
                    <h1
                      className={
                        (IBM_plex_sans_kr.style,
                        "capitalize text-4xl font-bold")
                      }
                    >
                      Ustami Razib
                    </h1>
                    <h3
                      className={
                        (IBM_plex_sans_kr.className, "text-3xl capitalize")
                      }
                    >
                      Frontend dev
                    </h3>
                  </div>
                  <p className="antialiased hyphens-manual text-sm">
                    I am a frontend technology enthusiast, intrigued by
                    frameworks and how they work, presently specializing in
                    React, and would love to teach on any topic under it.
                  </p>
                  <nav className="hidden lg:block">
                    <ul className="flex flex-col space-y-5 w-max">
                      <li>
                        <a href="#about" className="group flex items-center">
                          <span
                            className={`nav-indicator w-8 transition-all h-px mr-4 bg-clrs-primary-50 `}
                          ></span>
                          <span className="tracking-wide font-semibold uppercase antialiased text-sm">
                            about
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#experiences"
                          className="group flex items-center"
                        >
                          <span
                            className={`nav-indicator w-8 transition-all h-px mr-4 bg-clrs-primary-50`}
                          ></span>
                          <span className="tracking-wide font-semibold uppercase antialiased text-sm">
                            experience
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#projects" className="group flex items-center">
                          <span
                            className={`nav-indicator w-8 transition-all h-px mr-4 bg-clrs-primary-50`}
                          ></span>
                          <span className="tracking-wide font-semibold uppercase antialiased text-sm">
                            projects
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* AKHIR NAV */}
                </div>
                <ul
                  className="flex items-center space-x-5 mt-5"
                  aria-label="Social Media"
                >
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 1000"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </header>
            <main className="lg:w-1/2 w-full pt-24 lg:py-24 py-5">
              <SectionContainer
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#131112]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h1 className="text-sm font-bold uppercase tracking-widest not-sr-only lg:sr-only">
                    About
                  </h1>
                </div>
                <p className="mb-4">
                  Hello there! I&lsquo;m Ustami Rajib 👋, a passionate Frontend
                  Developer enthusiast, eager to create captivating and
                  user-friendly web experiences. With a blend of creativity,
                  technical skills, and a keen eye for detail, I strive to craft
                  digital solutions that leave a lasting impression.
                </p>
                <p>
                  As a student pursuing my degree in Informatics Engineering, I
                  have dedicated myself to mastering the art of Frontend
                  Development. My journey began with a fascination for blending
                  design and technology to bring ideas to life. Through hands-on
                  projects and coursework, I&lsquo;ve honed my skills in HTML,
                  CSS, and JavaScript, continually exploring the latest
                  frameworks and technologies.
                </p>
              </SectionContainer>
              <SectionContainer
                id="experiences"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 "
              >
                <div className="sticky top-0 max-w-full bg-[#131112]/75 lg:mx-auto py-5 lg:w-full lg:px-0 lg:relative backdrop-blur ">
                  <h1 className="text-sm font-bold uppercase tracking-widest not-sr-only lg:sr-only">
                    Experience
                  </h1>
                </div>
                <Experience
                  titleExp="Instructor · STMIK Jabar"
                  year="Sep 2023"
                  tag="React"
                >
                  Taught a basic introduction to the Reactjs library on the
                  STMIK JABAR campus for two months as part of the HIMATIF
                  program.
                </Experience>
                <Experience
                  titleExp="FieldWork Practice · PT. Santai Berkualitas Syberindo"
                  year="Jan 2019"
                  tag="Laravel"
                >
                  Have completed Laravel Web Development with Laravel Version
                  5.5 on March 29, 2019 provided by PT Santai Berkualitas
                  Syberindo.
                </Experience>
                <div>
                  <h1>View My Resume</h1>
                </div>
              </SectionContainer>
              <SectionContainer
                id="projects"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 "
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#131112]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h1 className="text-sm font-bold uppercase tracking-widest not-sr-only lg:sr-only">
                    projects
                  </h1>
                </div>
                <Project id="#projects" />
              </SectionContainer>
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
