import { useState } from "react";

export default function Question({ question, answer }: { question: string, answer: string }) {

    const [showAnswer, setShowAnswer] = useState(false);

    function toggleAnswer() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div>
            <button onClick={toggleAnswer} className="flex gap-2">
                <img src="https://www.svgrepo.com/show/102662/arrow-down-angle.svg" alt="" width={15} height={15} className={showAnswer ? "rotate-180" : ""} />
                <h1 className="text-center text-xl font-mono italic text-[oklch(45%_0.085_224.283)]">{question}</h1>
            </button>
            {showAnswer && <p className="text-center text-xl font-mono italic text-[#9f0712]">{answer}<br /></p>}
        </div>
    );
}