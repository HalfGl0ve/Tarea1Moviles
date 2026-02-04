import Question from "../Question/Question";

export default function QuestionsMain({ questions }: { questions: { question: string, answer: string }[] }) {
    return (
        <div>
            {questions.map((question, index) => (
                <Question key={index} question={question.question} answer={question.answer} />
            ))}
        </div>
    );
}