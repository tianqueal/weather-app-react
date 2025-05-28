import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("current", "routes/current/index.tsx"),
] satisfies RouteConfig;
