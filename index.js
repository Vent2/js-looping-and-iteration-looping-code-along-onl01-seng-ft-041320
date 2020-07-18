// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow`);
    }

    return gifts;
}


const cardNames = ["Ada", "Brendan", "Ali"]

function writeCards(cardNames, event) {
    let cards = []
    for (let i = 0; i < cardNames.length; i++) {
        cards.push(`Thank you, ${cardNames[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(i) {
    while (i > 0) {
        console.log(i);
        i -= 1;
    }
    console.log(i);
}