function formatCurrency(number) {
    return number.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
}

export default formatCurrency;