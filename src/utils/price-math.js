const priceMath = {
    calculate: function (operation, a, b) {
        const operandA = a * 100;
        const operandB = b * 100;

        switch (operation) {
            case "ADD":
                return (operandA + operandB) / 100;
            case "SUBTRACT":
                return (operandA - operandB) / 100;
            case "MULTIPLY":
                return (operandA * operandB) / 1000;
            case "DIVIDE":
                return (operandA / operandB);
        }
    },
    add: function (a, b) {
        return ((a * 100) + (b * 100)) / 100;
    },
    subtract: function (a, b) {
        return this.calculate("SUBTRACT", a, b);
    },
    multiply: (a, b) => ((a * 100) * (b * 100)) / 10000,
    divide: function (a, b) {
        return this.calculate("DIVIDE", a, b);
    },
};

export default priceMath;