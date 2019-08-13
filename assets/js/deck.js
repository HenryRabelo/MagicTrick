function newDeck() {
    var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["diamonds", "hearts", "spades", "clubs"];
    var deck = new Array();

    for (var i = 0; i < suits.length; i++)
        for (var x = 0; x < cards.length; x++) {
            var card = {Value: cards[x], Suit: suits[i]};
            deck.push(card);
        }

    return deck;
}

function shuffle(deck) {
    // Switches the values of two random cards 1000 times.
    for (var i = 0; i < 1000; i++) {

        var positionA = Math.floor((Math.random() * deck.length));
        var positionB = Math.floor((Math.random() * deck.length));
        var tmp = deck[positionA];

        deck[positionA] = deck[positionB];
        deck[positionB] = tmp;
    }
}

function cut(startPoint, cardNumber, deck) {
    // Receives a start point and a number of cards to push,
    // creates a new pile of cards from the chosen deck.
    var cut = new Array();

    for (var i = startPoint; i < (startPoint + cardNumber); i++)
        cut.push(deck[i]);

    return cut;
}

function dealCards(pileTop, pileMiddle, pileBottom, deck) {
    // Splits the chosen deck vertically, into three piles of your choice.
    var stackOrder = 1;
    var position = 0;

    for (var i = 0; i < deck.length; i++) {
        switch (stackOrder) {
            case (1):
                pileTop[position] = deck[i];
                break;
            case (2):
                pileMiddle[position] = deck[i];
                break;
            case (3):
                pileBottom[position] = deck[i];
                position++;
                stackOrder = 0;
                break;
        }

        stackOrder++;
    }
}

function stackPiles(pileChosen, pileTop, pileBottom, cardNumber) {
    // Stacks three chosen piles into a new stack of cards.
    var stack = new Array();
    var stackOrder = 1;

    for (var j = 0; j < 3; j++) {

        for (var i = 0; i < cardNumber; i++)
            switch (stackOrder) {
                case (1):
                    stack.push(pileTop[i]);
                    break;
                case (2):
                    stack.push(pileChosen[i]);
                    break;
                case (3):
                    stack.push(pileBottom[i]);
                    break;
            }

        stackOrder++;
    }

    return stack;
}

function renderDeck(deck) {
    document.getElementById('deck').innerHTML = '';

    for (var i = 0; i < deck.length; i++) {
        var card = document.createElement("div");
        var icon = '';
        switch (deck[i].Suit) {
            case ('hearts'):
                icon = '&hearts;';
                break;
            case ('spades'):
                icon = '&spades;';
                break;
            case ('diamonds'):
                icon = '&diams;';
                break;
            case ('clubs'):
                icon = '&clubs;';
                break;
        }

        card.innerHTML = deck[i].Value + '' + icon;
        card.className = 'card';
        document.getElementById("deck").appendChild(card);
    }
}