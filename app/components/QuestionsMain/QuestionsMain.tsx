import Question from "../Question/Question";

export default function QuestionsMain({ questions }: { questions: { question: string, answer: string }[] }) {
    return (
        <div className="flex flex-col gap-2 justify-center">
            {questions.map((question, index) => (
                <Question key={index} question={question.question} answer={question.answer} />
            ))}
        </div>
    );
}