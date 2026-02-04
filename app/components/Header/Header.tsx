import { Link } from "react-router";

export default function Header() {
    const menu = [
        { nombre: "Inicio", enlace: "/" },
        { nombre: "IMC", enlace: "/imc" },
        { nombre: "PPT", enlace: "/ppt" }
    ];

    return (
        <header className="w-full py-6 px-10 flex justify-between items-center bg-transparent border-b border-slate-200">
            <nav>
                <ul className="flex gap-8">
                    {menu.map((item, index) => {
                        
                        return (
                            <li key={index}>
                                <Link
                                    to={item.enlace}
                                    className={`font-mono italic text-lg transition-all duration-300 hover:opacity-70`}
                                >
                                    {item.nombre}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}