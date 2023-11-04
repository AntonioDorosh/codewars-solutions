const checkSpam = (str, spam) => {
    return str.toLowerCase().includes(spam)
};

checkSpam('buy ViAGRa now', 'viagra') // true
checkSpam('innocent rabbit') // false
checkSpam('free xxx', 'xxx') // true