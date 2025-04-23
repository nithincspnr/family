import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("components/shared/layout.tsx", [
    index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
    route("profile/:id", "routes/profile.tsx"),
  ]),
] satisfies RouteConfig;
