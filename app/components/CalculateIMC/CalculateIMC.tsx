type Props = {
    onCalcular: () => void;
};

function CalculateIMC({ onCalcular }: Props) {
    return (
        <div className="flex justify-center pt-6">
            <button
                type="button"
                onClick={onCalcular}
                className="bg-[oklch(52%_0.105_223.128)] text-white px-10 py-3 rounded-full font-semibold hover:brightness-110 transition active:scale-95"
            >
                Calcular IMC
            </button>
        </div>
    );
}

export default CalculateIMC;
