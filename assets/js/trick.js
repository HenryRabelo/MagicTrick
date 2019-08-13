var deck = new Array();
var stack = new Array();

var topPile = new Array();
var midPile = new Array();
var botPile = new Array();

var count = 1;

function createPiles() {
    // Creates horizontal piles out of the chosen deck of cards.
    topPile = cut(0, 7, stack);
    midPile = cut(7, 7, stack);
    botPile = cut(14, 7, stack);
}

function newStack() {
    // Deals the cards from the chosen deck of cards
    // and creates a stack of the new order
    dealCards(topPile, midPile, botPile, stack);
    stack = stackPiles(midPile, topPile, botPile, 7);
    renderDeck(stack);
}

function choose(position) {
    createPiles();
    switch (position) {
        case('top'):
            stack = stackPiles(topPile, midPile, botPile, 7);
            break;
        case('mid'):
            stack = stackPiles(midPile, topPile, botPile, 7);
            break;
        case('bot'):
            stack = stackPiles(botPile, topPile, midPile, 7);
            break;
    }
    if (count < 3) {
        newStack();
        count++;
    } else
        revealCard();

}

function revealCard() {
    renderDeck(stack);
    alert(stack[10].Value + " of " + stack[10].Suit);
}

function main() {

    deck = newDeck();
    shuffle(deck);

    stack = cut(0, 21, deck);
    shuffle(stack);

    newStack();

}

window.onload = main;