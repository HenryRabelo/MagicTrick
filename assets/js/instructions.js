function language() {
  var yes = confirm('Portugês: Deseja ler as instruções em português?\n\
Selecionar "Cancelar" irá gerar as instruções em Inglês.\n\n\
English: Do you wish to read the instructions in portuguese?\n\
Selecting "Cancel" will generate the instructions in English.\n\n');
  if (yes == true) {
    instruct_ptbr();
  } else
    instruct_en();

}

function instruct_ptbr(){
    alert ('               Olá!\n\
Bem-vindo ao truque de mágica!\n\n');
    
    alert ('Antes de começarmos, pode ser bom\n\
revisar como este truque funciona...\n\n');
    
    alert ("Neste truque, você precisará escolher uma carta.\n\
Tenha certeza de lembrá-la, ou o truque não funcionará.\n\
Seja honesto sobre a carta que escolheu.\n\n");
    
    alert ('Depois que a carta foi escolhida, você precisará encontrá-la,\n\
entre as 3 fileiras horizontais. Simplesmente clique no botão\n\
indicando em qual fileira a sua carta está. Depois disto, as cartas\n\
serão reorganizadas e você precisará encontrar a sua carta novamente.\n\
Este processo será repetido 3 vezes.\n\n');
    
    alert ('Finalmente, depois de encontrar sua carta, você será informado\n\
qual carta você escolheu. E tudo isso sem nem ter clicado nela...\n\
Impressionante, não acha? Caso você queira jogar novamente, basta clicar\n\
em "Start!", na barra de menu no topo da página.\n\n');
}

function instruct_en(){
    alert ('               Hello!\n\
Welcome to the magic trick!\n\n');
    
    alert ('Before we begin, it might be good\n\
to review how this trick works...\n\n');
    
    alert ("In this trick, you will need to choose a card.\n\
Be sure to remember it, or the trick won't work.\n\
Also, be truthful about what card you chose.\n\n");
    
    alert ('After the card is chosen, you need to locate where it is,\n\
amid the 3 horizontal rows. Simply click on the button\n\
indicating in which row your card is in. After that, the cards\n\
will be rearranged and you will need to locate your card again.\n\
This process will be repeated 3 times.\n\n');
    
    alert ('Finally, after you have found your card, you will be notified which\n\
card you have chosen. And all that without even clicking on it...\n\
Impressive, huh? If you wish to play again, all you have to do is click\n\
on "Start", at the top menu bar of this page.\n\n');
}