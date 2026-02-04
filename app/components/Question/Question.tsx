export default function Question({ question, answer }: { question: string, answer: string }) {
    return (
        <div>
            <h1>{question}</h1>
            <p>{answer}</p>
        </div>
    );
}