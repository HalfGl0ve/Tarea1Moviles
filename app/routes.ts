import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/IMC/IMC.tsx", { id: "imc-index" }),
    route("imc", "routes/IMC/IMC.tsx", { id: "imc-route" }),
    index("routes/PPT/PPT.tsx", { id: "ppt-index" }),
    route("ppt", "routes/PPT/PPT.tsx", { id: "ppt-route" }),
] satisfies RouteConfig;
