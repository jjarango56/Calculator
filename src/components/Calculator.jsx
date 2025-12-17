import { useCalculator } from "../hooks/useCalculator";
export const Calculator = () => {
  const Buttons = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];
  const ButtonsNumber = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const KeysRD = ["DEL", "RESET"];
  const Equal = ["="];

  const { handleData, number } = useCalculator();

  return (
    <section className="flex flex-col gap-3 w-full items-center p-5">
      <div className="bg-keypad-bg text-text-light-number p-8  flex justify-end w-full max-w-95 rounded-xl font-bold text-3xl  ">
        <p>{number}</p>
      </div>

      <div className="grid grid-cols-4  bg-keypad-bg gap-4 max-w-30rem w-full  rounded-xl p-5  sm:max-w-95">
        {Buttons.map((btn) => (
          <button
            key={btn}
            type="submit"
            onClick={() => handleData(btn)}
            className={`
    
                     rounded-xl font-bold transition-all active:translate-y-1 border-b-4 border-key-num-shadow hover:bg-hover-bg 
      
      ${
        ButtonsNumber.includes(btn)
          ? "bg-key-num-bg text-text-dark shadow-key-shadow-num text-2xl"
          : KeysRD.includes(btn)
          ? `bg-key-del-bg text-text-light shadow-key-shadow-del text-xl uppercase hover:bg-key-del-bg-hover  ${
              btn === "RESET" ? "col-span-2" : ""
            }`
          : Equal.includes(btn)
          ? "bg-key-eq-bg text-text-eq shadow-key-shadow-eq text-2xl col-span-2 hover:bg-key-eq-bg-hover"
          : "bg-key-num-bg text-text-dark shadow-key-shadow-num text-2xl"
      }
                `}
          >
            {btn}
          </button>
        ))}
      </div>
    </section>
  );
};
