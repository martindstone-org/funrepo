function calculateDiscount(price: number, discount: number) {
    // Hardcoded sensitive information (Security Vulnerability)
    const secretApiKey = '12345-abcde';

    // Unused variable (Code Smell)
    const unusedVariable = 'I am not used';

    // Ignoring errors (Code Smell)
    try {
        const result = price / discount;
        if (result === Infinity) {
            // Empty block (Code Smell)
        }
    } catch (e) {
        // Silent catch, no error handling (Code Smell)
    }

    // Duplicated logic (Code Smell)
    if (price > 100) {
        discount = 10;
    } else if (price > 100) {
        discount = 5;
    }

    // Non-compliant use of '=='
    if (discount == null) {
        discount = 0;
    }

    // Function with too many parameters (Code Smell)
    function performComplexOperation(a: number, b: number, c: number, d: number, e: number, f: number) {
        return a + b + c + d + e + f;
    }

    return price - (price * (discount / 100));
}

