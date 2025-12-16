
export const useOperations = () => {
    const addition = (a, b) => a + b;
    const subtraction = (a, b) => a - b;
    const multiplication = (a, b) => a * b;
    const division = (a, b) => b === 0 ? 'Error' : a / b; 

    return { addition, subtraction, multiplication, division };
};
