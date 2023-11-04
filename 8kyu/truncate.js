const truncate = (str, lengthNum) => {
    return str.length > lengthNum ? str.slice(0, lengthNum) + '...' : str
};


truncate('That, what i want to say!', 20); // 'That, what i want to...'