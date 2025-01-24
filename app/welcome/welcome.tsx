import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPosition } from "~/utils/functions";

export function Welcome() {
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());

  const handleGetStarted = () => navigate("/today");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex h-screen flex-col items-start justify-center pb-4 pt-16">
      <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-5">
          <h1 className="text-4xl font-bold">Weather App</h1>
          <p>
            {currentTime.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-2xl font-bold">
            {currentTime.toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })}
          </p>
        </header>
        <div className="flex w-full max-w-[300px] flex-col items-center justify-center space-y-6 px-4">
          <h2 className="text-center text-xl">Get Started</h2>

          <button
            type="button"
            onClick={handleGetStarted}
            className="flex w-max items-center justify-center rounded-full bg-gray-950 p-1 dark:bg-white"
          >
            <ChevronRightIcon className="size-12 text-white dark:text-gray-950" />
          </button>
        </div>
      </div>
      <footer className="w-full text-center">
        <p>
          Developed by{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/Liansky12"
          >
            Liansky12
          </a>
          , MIT License
        </p>
        <p>
          <a
            className="underline"
            target="_blank"
            href="https://open-meteo.com/"
          >
            Weather data by Open-Meteo.com{" "}
          </a>
          , Attribution 4.0 International (CC BY 4.0)
        </p>
        <p>
          Data © OpenStreetMap contributors, ODbL 1.0.{" "}
          <a
            className="underline"
            target="_blank"
            href="http://osm.org/copyright"
          >
            http://osm.org/copyright
          </a>
        </p>
      </footer>
    </main>
  );
}
