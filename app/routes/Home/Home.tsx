export default function Home() {

    const questions = [
        {
            question: "¿Que es react?",
            answer: "lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "¿Que es la arquitectura de componentes?",
            answer: "lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "¿Que es el proceso de transpilación",
            answer: "lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "¿Que es JSX?",
            answer: "lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "¿Que son los hooks?",
            answer: "lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "¿Que es VITE?",
            answer: "lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "¿Que es el state?",
            answer: "lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            question: "¿Que son los props?",
            answer: "lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]


    return (
        <main>
            {questions.map((question) => {
                return (
                    <div key={question.question}>
                        <h2 className="text-left text-2xl font-mono italic text-[oklch(45%_0.085_224.283)]">{question.question}</h2>
                        <p className="mb-5 font-mono">{question.answer}</p>
                    </div>
                );
            })}
        </main>
    );
}