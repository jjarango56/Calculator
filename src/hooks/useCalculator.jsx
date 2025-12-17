import { useEffect, useState } from "react";
import { useOperations } from "./useOperations";
export const useCalculator = () =>{
 
    const ButtonsNumber = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
    const Operators = ['+', '-', 'x', '/'];


    const [number, setNumber] = useState(() => localStorage.getItem('number') ?? '0' );
    const [preValue, setPreValue] = useState(null);
    const [operator, setOperator] = useState(null);


    const { addition, subtraction, multiplication, division } = useOperations();

    useEffect(()=>{
        localStorage.setItem('number',number);
    },[number]);



  const addNumber = (value) => {
    setNumber(prev => {
     
        if (prev === '0') {
            return value ;
        }

        if (value === '.' && prev.includes('.')) return prev;

        if (prev.length >= 10) return setNumber('Error'); 

        return prev + value;
    });
};
    const chooseOperator = (op) => {
        if (preValue != null) {
            calculate();
        } else {
            setOperator(op);
            setPreValue(number);
            setNumber('0');
        }

    }
    const deleteLast = () => {
        setNumber(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    }

    const calculate = () => {
        const currentValue = parseFloat(number);
        const previousValue = parseFloat(preValue);
        if (isNaN(currentValue) || isNaN(previousValue)) {
        setNumber('Error');
        setPreValue(null);
        setOperator(null);
        return;
    }
        let result;
        switch (operator) {
            case '+':
                result = addition(previousValue, currentValue);
                break;
            case '-':
                result = subtraction(previousValue, currentValue);
                break;
            case 'x':
                result = multiplication(previousValue, currentValue);
                break;
            case '/':
                
                result = division(previousValue, currentValue);
                break;
            default:
              

                return;

        }
        setNumber(result.toString());
        setPreValue(null);
        setOperator(null);
    }

    const handleData = (btnValue) => {

        switch (btnValue) {
            case 'RESET':
                setNumber('0');
                setOperator(null);
                setPreValue(null);
                break;
            case '=':
                if (preValue != null && operator != null) {
                    calculate();
                }
                break;

            case 'DEL':
                deleteLast();
                break;
            default:

                if (Operators.includes(btnValue)) {
                    chooseOperator(btnValue);
                } else if (ButtonsNumber.includes(btnValue) || btnValue === '.') {
                    addNumber(btnValue);
                }

                break;
        }
    }

    return { number, handleData  };

}