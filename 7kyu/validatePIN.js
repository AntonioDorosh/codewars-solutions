const validatePIN = (pin) => {
    const isCurrentLength = (pin.length === 4 || pin.length === 6);
    const hasOnlyNum = pin.match(/^\d+$/);
    return !!(hasOnlyNum && isCurrentLength)
};

validatePIN('1') // false