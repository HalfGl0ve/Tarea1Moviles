import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/IMC/IMC.tsx", { id: "imc-index" }),
    route("imc", "routes/IMC/IMC.tsx", { id: "imc-route" }),
] satisfies RouteConfig;
