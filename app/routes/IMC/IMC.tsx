import { useState } from "react";
import CalculateIMC from "~/components/CalculateIMC/CalculateIMC";

export default function IMC() {

    const [nombre, setNombre] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [esNombreValido, setNombreValido] = useState(false);
    const [esAlturaValida, setAlturaValida] = useState(false);
    const [esPesoValido, setPesoValido] = useState(false);
    const [imc, setImc] = useState<number | null>(null);

    function manejadorNombre(e: React.ChangeEvent<HTMLInputElement>) {
        setNombre(e.target.value);
        setNombreValido(nombre.length > 3);
    }

    function manejadorAltura(e: React.ChangeEvent<HTMLInputElement>) {
        setAltura(e.target.value);
        setAlturaValida(altura.length > 1);
    }

    function manejadorPeso(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value;
    setPeso(valor);

    const pesoNumerico = Number(valor);
    setPesoValido(pesoNumerico > 60 && pesoNumerico < 600);
    }

    function calcularIMC() {
    if (!esAlturaValida || !esPesoValido) return;

    const alturaMetros = Number(altura);
    const pesoKg = Number(peso) / 2; // lb → kg

    const resultado = pesoKg / (alturaMetros ** 2);
    setImc(Number(resultado.toFixed(2)));
    }

    return (
        <section className="min-h-screen flex items-center justify-center from-slate-100 to-slate-300 px-6">
            <div className="w-full max-w-3xl space-y-10">

                <h1 className="text-center text-4xl font-mono italic text-[oklch(45%_0.085_224.283)]">
                    Calculadora de IMC
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div>
                        <label className="block mb-2 font-mono italic text-[oklch(45%_0.085_224.283)]">
                            Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            onChange={manejadorNombre}
                            className={`w-full bg-transparent border-b-2 px-1 py-2 focus:outline-none transition ${esNombreValido
                                    ? "border-green-500"
                                    : "border-red-500"
                                }`}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-mono italic text-[oklch(45%_0.085_224.283)]">
                            Altura (m)
                        </label>
                        <input
                            type="number"
                            placeholder="Altura"
                            onChange={manejadorAltura}
                            className={`w-full bg-transparent border-b-2 px-1 py-2 focus:outline-none transition ${esAlturaValida
                                    ? "border-green-500"
                                    : "border-red-500"
                                }`}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-2 font-mono italic text-[oklch(45%_0.085_224.283)]">
                            Peso (lb)
                        </label>
                        <input
                            type="number"
                            placeholder="Peso"
                            onChange={manejadorPeso}
                            className={`w-full bg-transparent border-b-2 px-1 py-2 focus:outline-none transition ${esPesoValido
                                    ? "border-green-500"
                                    : "border-red-500"
                                }`}
                        />
                    </div>
                </div>

                <div className="flex justify-center pt-6">
                    <CalculateIMC onCalcular={calcularIMC} />
                </div>

                {imc !== null && (
                    <div className="flex-1 justify-center">
                        <p className="text-center text-xl font-mono italic text-[oklch(45%_0.085_224.283)]">
                            {nombre}, tu IMC es: <strong>{imc}</strong>
                        </p>
                        <p className="text-center text-xl font-mono italic text-[oklch(45%_0.085_224.283)]">
                            <br />
                            {imc < 18.5 && "Bajo peso"}
                            {imc >= 18.5 && imc < 25 && "Peso normal"}
                            {imc >= 25 && imc < 30 && "Sobrepeso"}
                            {imc >= 30 && "Obesidad"}
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
}
