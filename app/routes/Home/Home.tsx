import QuestionsMain from "~/components/QuestionsMain/QuestionsMain";

export default function Home() {

    const questions = [
        {
            question: "¿Que es react?",
            answer: "Es una libreria de JavaScript que se basa en la arquitectura de componentes para crear páginas web, puede usarse tanto en html puro o con frameworks como Next.js"
        },
        {
            question: "¿Que es la arquitectura de componentes?",
            answer: "Es una arquitectura que se basa en la creación de piezas individuales y reutilizables en distintas partes del codigo"
        },
        {
            question: "¿Que es el proceso de transpilación",
            answer: "Es el proceso de convertir un lenguaje de programacion a otro, en el caso de react es convertir JSX a JavaScript"
        },
        {
            question: "¿Que es JSX?",
            answer: "Es una extension de JavaScript que permite escribir codigo HTML en JavaScript"
        },
        {
            question: "¿Que son los hooks?",
            answer: "Son funciones que permiten usar el estado y otras caracteristicas de React en componentes funcionales"
        },
        {
            question: "¿Que es VITE?",
            answer: "Es una herramienta para hacer el compilado de aplicaciones web mas rapido y eficiente"
        },
        {
            question: "¿Que es el state?",
            answer: "Es un objeto que permite almacenar datos que pueden cambiar con el tiempo"
        },
        {
            question: "¿Que son los props?",
            answer: "Son propiedades que se pasan de un componente padre a un componente hijo como por ejemplo estas preguntas"
        }
    ]


    return (
        <main>
            <QuestionsMain questions={questions} />
        </main>
    );
}