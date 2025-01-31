export const weatherGradients = new Map<
  number,
  {
    gradient: { day: string; night: string };
    textColor: { day: string; night: string };
  }
>([
  // Clear sky
  [
    0,
    {
      gradient: {
        day: "from-blue-500 via-blue-400 to-blue-300",
        night: "from-indigo-900 via-indigo-800 to-indigo-700",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],

  // Mainly clear, partly cloudy, overcast
  [
    1,
    {
      gradient: {
        day: "from-indigo-500 via-blue-500 to-gray-400",
        night: "from-indigo-800 via-gray-700 to-gray-600",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    2,
    {
      gradient: {
        day: "from-gray-500 via-gray-400 to-gray-300",
        night: "from-gray-700 via-gray-600 to-gray-500",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    3,
    {
      gradient: {
        day: "from-gray-700 via-gray-600 to-gray-500",
        night: "from-gray-900 via-gray-800 to-gray-700",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],

  // Fog and depositing rime fog
  [
    45,
    {
      gradient: {
        day: "from-gray-800 via-gray-700 to-gray-600",
        night: "from-gray-900 via-gray-800 to-gray-700",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],
  [
    48,
    {
      gradient: {
        day: "from-gray-900 via-gray-800 to-gray-700",
        night: "from-black via-gray-900 to-gray-800",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],

  // Drizzle
  [
    51,
    {
      gradient: {
        day: "from-blue-200 via-blue-300 to-blue-400",
        night: "from-blue-900 via-blue-800 to-gray-700",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    53,
    {
      gradient: {
        day: "from-blue-300 via-blue-400 to-blue-500",
        night: "from-blue-800 via-blue-700 to-gray-600",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    55,
    {
      gradient: {
        day: "from-blue-400 via-blue-500 to-blue-600",
        night: "from-blue-700 via-blue-600 to-gray-500",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],

  // Freezing drizzle
  [
    56,
    {
      gradient: {
        day: "from-blue-300 via-blue-400 to-blue-500",
        night: "from-blue-800 via-blue-700 to-gray-600",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],
  [
    57,
    {
      gradient: {
        day: "from-blue-200 via-blue-300 to-blue-400",
        night: "from-blue-700 via-blue-600 to-gray-500",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],

  // Rain
  [
    61,
    {
      gradient: {
        day: "from-gray-300 via-gray-400 to-gray-500",
        night: "from-gray-700 via-gray-600 to-gray-500",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    63,
    {
      gradient: {
        day: "from-gray-400 via-gray-500 to-gray-600",
        night: "from-gray-800 via-gray-700 to-gray-600",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    65,
    {
      gradient: {
        day: "from-gray-500 via-gray-600 to-gray-700",
        night: "from-black via-gray-800 to-gray-700",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],

  // Freezing rain
  [
    66,
    {
      gradient: {
        day: "from-blue-400 via-blue-500 to-blue-600",
        night: "from-blue-800 via-blue-700 to-gray-600",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],
  [
    67,
    {
      gradient: {
        day: "from-blue-500 via-blue-600 to-blue-700",
        night: "from-blue-900 via-blue-800 to-gray-700",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],

  // Snow fall
  [
    71,
    {
      gradient: {
        day: "from-white via-gray-300 to-gray-400",
        night: "from-gray-800 via-gray-700 to-gray-600",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    73,
    {
      gradient: {
        day: "from-white via-gray-400 to-gray-500",
        night: "from-gray-900 via-gray-800 to-gray-700",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    75,
    {
      gradient: {
        day: "from-gray-200 via-gray-300 to-gray-400",
        night: "from-gray-700 via-gray-600 to-gray-500",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],

  // Snow grains
  [
    77,
    {
      gradient: {
        day: "from-white via-gray-200 to-gray-300",
        night: "from-gray-700 via-gray-600 to-gray-500",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],

  // Rain showers
  [
    80,
    {
      gradient: {
        day: "from-gray-300 via-gray-400 to-gray-500",
        night: "from-gray-800 via-gray-700 to-gray-600",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    81,
    {
      gradient: {
        day: "from-gray-400 via-gray-500 to-gray-600",
        night: "from-gray-900 via-gray-800 to-gray-700",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    82,
    {
      gradient: {
        day: "from-gray-500 via-gray-600 to-gray-700",
        night: "from-black via-gray-900 to-gray-800",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],

  // Snow showers
  [
    85,
    {
      gradient: {
        day: "from-white via-gray-100 to-gray-200",
        night: "from-gray-700 via-gray-600 to-gray-500",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],
  [
    86,
    {
      gradient: {
        day: "from-white via-gray-300 to-gray-400",
        night: "from-gray-800 via-gray-700 to-gray-600",
      },
      textColor: { day: "text-gray-950", night: "text-white" },
    },
  ],

  // Thunderstorm
  [
    95,
    {
      gradient: {
        day: "from-gray-600 via-gray-700 to-black",
        night: "from-black via-gray-900 to-gray-800",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],
  [
    96,
    {
      gradient: {
        day: "from-gray-700 via-gray-800 to-black",
        night: "from-black via-gray-900 to-gray-800",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],
  [
    99,
    {
      gradient: {
        day: "from-gray-800 via-gray-900 to-black",
        night: "from-black via-gray-900 to-gray-800",
      },
      textColor: { day: "text-white", night: "text-white" },
    },
  ],
]);
