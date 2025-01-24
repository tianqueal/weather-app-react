export const weatherGradients = new Map<
  number,
  { gradient: string; textColor: string }
>([
  // Clear sky
  [
    0,
    {
      gradient: "from-blue-500 via-blue-400 to-blue-300",
      textColor: "text-gray-950",
    },
  ],

  // Mainly clear, partly cloudy, overcast
  [
    1,
    {
      gradient: "from-indigo-500 via-blue-500 to-gray-400",
      textColor: "text-gray-950",
    },
  ],
  [
    2,
    {
      gradient: "from-gray-500 via-gray-400 to-gray-300",
      textColor: "text-gray-950",
    },
  ],
  [
    3,
    {
      gradient: "from-gray-700 via-gray-600 to-gray-500",
      textColor: "text-white",
    },
  ],

  // Fog and depositing rime fog
  [
    45,
    {
      gradient: "from-gray-800 via-gray-700 to-gray-600",
      textColor: "text-white",
    },
  ],
  [
    48,
    {
      gradient: "from-gray-900 via-gray-800 to-gray-700",
      textColor: "text-white",
    },
  ],

  // Drizzle
  [
    51,
    {
      gradient: "from-blue-200 via-blue-300 to-blue-400",
      textColor: "text-gray-950",
    },
  ],
  [
    53,
    {
      gradient: "from-blue-300 via-blue-400 to-blue-500",
      textColor: "text-gray-950",
    },
  ],
  [
    55,
    {
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      textColor: "text-white",
    },
  ],

  // Freezing Drizzle
  [
    56,
    {
      gradient: "from-cyan-300 via-cyan-400 to-blue-500",
      textColor: "text-gray-950",
    },
  ],
  [
    57,
    {
      gradient: "from-cyan-400 via-cyan-500 to-blue-600",
      textColor: "text-white",
    },
  ],

  // Rain
  [
    61,
    {
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      textColor: "text-white",
    },
  ],
  [
    63,
    {
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      textColor: "text-white",
    },
  ],
  [
    65,
    {
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      textColor: "text-white",
    },
  ],

  // Freezing Rain
  [
    66,
    {
      gradient: "from-cyan-400 via-cyan-500 to-blue-700",
      textColor: "text-white",
    },
  ],
  [
    67,
    {
      gradient: "from-cyan-500 via-cyan-600 to-blue-800",
      textColor: "text-white",
    },
  ],

  // Snow fall
  [
    71,
    {
      gradient: "from-white via-gray-300 to-gray-400",
      textColor: "text-gray-950",
    },
  ],
  [
    73,
    {
      gradient: "from-white via-gray-400 to-gray-500",
      textColor: "text-gray-950",
    },
  ],
  [
    75,
    {
      gradient: "from-gray-200 via-gray-300 to-gray-400",
      textColor: "text-gray-950",
    },
  ],

  // Snow grains
  [
    77,
    {
      gradient: "from-gray-300 via-gray-400 to-gray-500",
      textColor: "text-gray-950",
    },
  ],

  // Rain showers
  [
    80,
    {
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      textColor: "text-white",
    },
  ],
  [
    81,
    {
      gradient: "from-blue-600 via-blue-700 to-blue-800",
      textColor: "text-white",
    },
  ],
  [
    82,
    {
      gradient: "from-blue-700 via-blue-800 to-blue-900",
      textColor: "text-white",
    },
  ],

  // Snow showers
  [
    85,
    {
      gradient: "from-gray-100 via-gray-200 to-gray-300",
      textColor: "text-gray-950",
    },
  ],
  [
    86,
    {
      gradient: "from-gray-300 via-gray-400 to-gray-500",
      textColor: "text-gray-950",
    },
  ],

  // Thunderstorm
  [
    95,
    {
      gradient: "from-gray-600 via-gray-700 to-black",
      textColor: "text-white",
    },
  ],
  [
    96,
    {
      gradient: "from-gray-700 via-gray-800 to-black",
      textColor: "text-white",
    },
  ],
  [
    99,
    {
      gradient: "from-gray-800 via-gray-900 to-black",
      textColor: "text-white",
    },
  ],
]);
