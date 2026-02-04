import { useState } from "react";

export default function PeopleCard() {

    let [index, setIndex] = useState(0);

    function changeIndex(index: number){
        setIndex(index);
    }

    const people = [
        {
            nombre: "Diana Paque",
            git: "DianaPaque",
            telefono: "3007222105",
            correo: "dianas.paquep@autonoma.edu.co",
            foto: "https://i.pinimg.com/originals/b6/a8/8a/b6a88aeb70abb49783ff6b502c40e393.png"
        },
        {
            nombre: "Santiago Jimenez",
            git: "HalfGl0ve",
            telefono: "3217538646",
            correo: "santiago.jimenezc@autonoma.edu.co",
            foto: "https://i.pinimg.com/736x/7f/f9/bc/7ff9bc1374fc7c29009e0b5922c194ee.jpg"
        },
    ];

    return (
        <aside className="justify-center">
            <div className="flex gap-2">
                <button onClick={() => changeIndex(0)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">{people[0].nombre}</button>
                <button onClick={() => changeIndex(1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">{people[1].nombre}</button>
            </div>

            
            <div key={people[index].git}>
            <img src={people[index].foto} alt={people[index].nombre} height={200} width={200} className="rounded-full"/>
            <h2>{people[index].nombre}</h2>
            <p> Git: {people[index].git}</p>
            <p> Teléfono: {people[index].telefono}</p>
            <p> Correo: {people[index].correo}</p>
            </div>
        </aside>
    );
}