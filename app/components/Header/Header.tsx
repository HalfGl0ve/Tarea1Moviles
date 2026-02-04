export default function Header() {
    let menu = [
        { nombre: "Inicio", enlace: "." },
        { nombre: "IMC", enlace: "imc" },
        { nombre: "PPT", enlace: "ppt" }
    ]

    
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <ul>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a href={item.enlace}>{item.nombre}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}   