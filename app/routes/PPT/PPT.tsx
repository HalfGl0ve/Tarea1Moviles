import { useState } from "react";

export default function PPT() {

    const opciones = ["piedra", "papel", "tijera"];

    const [jugadaUsuario, setJugadaUsuario] = useState<string | null>(null);
    const [jugadaPC, setJugadaPC] = useState<string | null>(null);
    const [mensaje, setMensaje] = useState("");
    const [victorias, setVictorias] = useState(0);
    const [derrotas, setDerrotas] = useState(0);

    function obtenerJugadaAleatoria() {
        const indice = Math.floor(Math.random() * opciones.length);
        return opciones[indice];
    }

    function determinarGanador(usuario: string, pc: string) {

        if (usuario === pc) {
            setMensaje("Empate");
            return;
        }

        if (
            (usuario === "piedra" && pc === "tijera") ||
            (usuario === "papel" && pc === "piedra") ||
            (usuario === "tijera" && pc === "papel")
        ) {
            setMensaje("Ganaste");
            setVictorias(v => v + 1);
        } else {
            setMensaje("Perdiste");
            setDerrotas(d => d + 1);
        }
    }

    function manejarClick(opcion: string) {

        const pc = obtenerJugadaAleatoria();

        setJugadaUsuario(opcion);
        setJugadaPC(pc);

        determinarGanador(opcion, pc);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8">

            <h1 className="text-center text-4xl font-mono italic text-[oklch(45%_0.085_224.283)]">
                Piedra Papel o Tijera
            </h1>

            <div className="grid grid-cols-3 gap-6 place-items-center">

                <img
                    src="/piedra.png"
                    alt="Piedra"
                    onClick={() => manejarClick("piedra")}
                    className="border-4 border-[oklch(45%_0.085_224.283)] w-40 h-40 object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
                />

                <img
                    src="/papel.jpg"
                    alt="Papel"
                    onClick={() => manejarClick("papel")}
                    className="border-4 border-[oklch(45%_0.085_224.283)] w-40 h-40 object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
                />

                <img
                    src="/tijera.png"
                    alt="Tijera"
                    onClick={() => manejarClick("tijera")}
                    className="border-4 border-[oklch(45%_0.085_224.283)] w-40 h-40 object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
                />

            </div>

            {jugadaUsuario && jugadaPC && (
                <div className="text-center font-mono italic">
                    <p>Tu jugada: <strong>{jugadaUsuario}</strong></p>
                    <p>PC: <strong>{jugadaPC}</strong></p>
                </div>
            )}

            {mensaje && (
                <h2 className="text-2xl font-mono italic">
                    {mensaje}
                </h2>
            )}

            <div className="text-center font-mono italic">
                <h2>Victorias: {victorias}</h2>
                <h2>Derrotas: {derrotas}</h2>
            </div>

        </div>
    );
}
