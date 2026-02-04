import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home/Home.tsx", { id: "home-index" }),
    route("imc", "routes/IMC/IMC.tsx", { id: "imc-route" }),
] satisfies RouteConfig;
