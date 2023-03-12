
function changeTextBtn(btn) {
    // TODO: add the conditions logic so the text always goes
    // Show -> Hide
    // Hide -> Show

    if (btn.innerHTML == 'Show') {
        btn.innerHTML = 'Hide';
            
    } else if (btn.innerHTML == 'Hide'){
        btn.innerHTML = 'Show';
    }
    

    return btn
    
}




// ----- ex 13 -----
function offersQuantity() {
    let imgWeekOffer = document.querySelectorAll('#weekOffersRow img').length;
    console.log(imgWeekOffer);
    
    let imgWelcomeSummer = document.querySelectorAll('#welcomeSummerRow img').length;
    console.log(imgWelcomeSummer);

    let imgJustForToday = document.querySelectorAll('#justForTodayRow img').length;
    console.log(imgJustForToday);

    let imgLastMinuteOffer = document.querySelectorAll('#lastMinuteOffer img').length;
    console.log(imgLastMinuteOffer);
    
    let totalOffers = imgWeekOffer + imgWelcomeSummer + imgJustForToday + imgLastMinuteOffer;
    
    let spanText = document.querySelector('#jumbotron div span');
    
    return spanText.innerText = 'We have '+ totalOffers + ' new offers waiting for you';
}

console.log(offersQuantity());



// ----- ex 16 -----

function addHot () {
    
    let summerCards = document.querySelectorAll('#welcomeSummer .container .card');

    for (card of summerCards) {

       card.append(document.createElement('span').appendChild(document.createTextNode('HOT')));
       
       console.log(card)
        
    }
     
    return summerCards;
     
} 

console.log(addHot());


// ----- ex 17 -----

function removeCards () {
    let cards = document.querySelectorAll('.row img, .card');
    console.log(cards);

    for (card of cards) {
        card.remove();
    }
    return cards
} 

// console.log(removeCards());