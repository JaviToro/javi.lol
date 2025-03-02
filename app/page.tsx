"use client";

import { now } from "dot-beat-time";
import Image from "next/image";
import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandLinkedin,
  IconClock,
  IconCodeCircle,
  IconFileTypePdf,
  IconMail,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const internetTime = now(true);
      setTime(internetTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDarkMode = () => {
    if (!document.body.classList.contains("dark")) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    document.body.classList.toggle("dark");
  };

  return (
    <main className="flex min-h-screen flex-col justify-between gap-12 px-6 py-8 md:w-full md:px-48 md:py-12 2xl:px-96 bg-white dark:bg-stone-900 dark:text-white">
      <div className="flex flex-col justify-start gap-12">
        <section className="flex flex-row justify-between items-center">
          <a className="flex flex-row gap-2  bg-orange-50 border border-solid border-orange-100 dark:bg-orange-950 dark:border-orange-900 py-2 px-3 rounded-xl">
            <IconCodeCircle />
            <span>Building in public</span>
          </a>
          <a id="theme-switcher" onClick={handleDarkMode}>
            {darkMode ? <IconMoon /> : <IconSun />}
          </a>
        </section>
        <section className="flex flex-col-reverse justify-between gap-5 md:flex-row md:items-center md:w-full">
          <div className="flex flex-col gap-5">
            <h1 className="flex flex-col gap-1 text-xl font-bold">
              <p>¡Hola, mundo! 👋</p>
              <span>I am Javi Toro</span>
            </h1>
            <p className="text-pretty flex flex-col gap-2 max-w-[28rem]">
              <span>
                Creative full-stack software engineer from the burning south of
                Spain 🇪🇸
              </span>
              <span>
                Committed to crafting beautiful, user-friendly software while
                continuously enhancing my skills.
              </span>
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <a
                title="Download my resume"
                className="button-primary flex flex-row gap-2 justify-center py-2 px-3 rounded-xl w-full sm:w-fit"
                aria-label="Download my resume"
                type="button"
                href=""
              >
                <IconFileTypePdf />
                <span>Resume</span>
              </a>
              <div className="flex flex-row w-full justify-center gap-3 sm:justify-start">
                <a
                  href="https://github.com/JaviToro"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <IconBrandGithub />
                </a>
                <a
                href="https://www.linkedin.com/in/javitoro/"
                title="LinkedIn"
                aria-label="LinkedIn"
                >
                  <IconBrandLinkedin />
                </a>
                <a
                href="https://dribbble.com/javitoro"
                title="Dribbble"
                aria-label="Dribbble"
                >
                  <IconBrandDribbble />
                </a>
                <a
                href="mailto:javitoro@proton.me"
                title="Send me an email"
                aria-label="Send me an email"
                >
                  <IconMail />
                </a>
              </div>
            </div>
          </div>
          <div className="w-fit">
            <Image
              src="/me.jpeg"
              width={140}
              height={140}
              alt="Picture of Javi Toro."
              className="rounded-full"
            ></Image>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">My experience</h2>
          <ol className="flex flex-col gap-6">
          <li>
              <a className="flex flex-row items-center gap-4">
                <div className="w-fit outline outline-1 outline-gray-300 dark:outline-gray-700 rounded-xl drop-shadow-md">
                  <Image
                    src="/hiberus.jpeg"
                    width={60}
                    height={60}
                    alt="Hiberus logo."
                    className="rounded-xl border-10 border-red-900 border-solid"
                  ></Image>
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
                    April 2025 - Present
                  </p>
                  <p className="font-medium">Hiberus</p>
                  <p className="text-sm">Software Engineer</p>
                </div>
              </a>
            </li>
            <li>
              <a className="flex flex-row items-center gap-4">
                <div className="w-fit outline outline-1 outline-gray-300 dark:outline-gray-700 rounded-xl drop-shadow-md">
                  <Image
                    src="/pathmonk.jpeg"
                    width={60}
                    height={60}
                    alt="Pathmonk logo."
                    className="rounded-xl"
                  ></Image>
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
                    Oct 2023 - March 2025
                  </p>
                  <p className="font-medium">Pathmonk</p>
                  <p className="text-sm">Software Engineer</p>
                </div>
              </a>
            </li>
            <li>
              <a className="flex flex-row items-center gap-4">
                <div className="w-fit outline outline-1 outline-gray-300 dark:outline-gray-700 rounded-xl drop-shadow-md">
                  <Image
                    src="/hiberus.jpeg"
                    width={60}
                    height={60}
                    alt="Hiberus logo."
                    className="rounded-xl border-10 border-red-900 border-solid"
                  ></Image>
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
                    May 2021 - Sep 2023
                  </p>
                  <p className="font-medium">Hiberus</p>
                  <p className="text-sm">Analyst Programmer</p>
                </div>
              </a>
            </li>
            <li>
              <a className="flex flex-row items-center gap-4">
                <div className="w-fit outline outline-1 outline-gray-300 dark:outline-gray-700 rounded-xl drop-shadow-md">
                  <Image
                    src="/getronics.jpeg"
                    width={60}
                    height={60}
                    alt="Getronics logo."
                    className="rounded-xl border-10 border-red-900 border-solid"
                  ></Image>
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
                    Feb 2018 - Apr 2021
                  </p>
                  <p className="font-medium">Getronics</p>
                  <p className="text-sm">Java Developer</p>
                </div>
              </a>
            </li>
          </ol>
        </section>
      </div>
      <div>
        <section>
          <div className="flex flex-row gap-2 text-sm items-center">
            <IconClock stroke={1.5} />
            <p className="font-mono">{time} INTERNET TIME</p>
          </div>
        </section>
      </div>
    </main>
  );
}
