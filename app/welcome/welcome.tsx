import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPosition } from "~/utils";

export function Welcome() {
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());

  const handleGetStarted = async () => {
    try {
      if (!navigator.geolocation)
        throw new Error("Geolocation is not supported by your browser.");

      const position = await getPosition();

      if (!position?.coords?.latitude || !position?.coords?.longitude)
        throw new Error("Unable to retrieve your location");

      localStorage.setItem("position", JSON.stringify(position));
      navigate("/today");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex items-center justify-center pb-4 pt-16">
      <div className="flex min-h-0 flex-1 flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-5">
          <h1 className="text-4xl font-bold">Weather App</h1>
          <p>
            <span>
              {currentTime.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span> - </span>
            <span>
              {currentTime.toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
            </span>
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
    </main>
  );
}
