import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("today", "routes/today/index.tsx"),
] satisfies RouteConfig;
