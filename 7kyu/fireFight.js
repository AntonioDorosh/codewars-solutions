// const fireFight = (str) => str.replaceAll('Fire', '~~');

const fireFight = (str) => {
    return str.split(' ').map((char) => char === 'Fire' ? '~~' : char).join(' ')
};
fireFight('Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast')

// "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"