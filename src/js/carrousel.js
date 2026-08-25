
export function setupCarrousel(gallery) {
    const cardList = gallery.querySelector('.card-list');
    const cards = gallery.getElementsByClassName('card');
    const cardCount = cards.length;

    const randomOffset = Math.floor(Math.random() * cardCount);

    for (let i = 0; i < cardCount; i++) {
        cards[i].classList.add(`card-position${(i + randomOffset) % cardCount}`);
        // aqui mejor cambiar los estilos con js directamente
    }

    function moveRight() {
        const cardWidth = cards[0].offsetWidth;
        const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight) || 0;

        cardList.scrollBy({
            left: cardWidth + cardMargin,
            behavior: 'smooth'
        });
    }

    function moveLeft() {
        const cardWidth = cards[0].offsetWidth;
        const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight) || 0;
        cardList.scrollBy({
            left: -(cardWidth + cardMargin),
            behavior: 'smooth'
        });
    }
        
    const nextButton = gallery.querySelector('.next');
    const prevButton = gallery.querySelector('.prev');

    nextButton.addEventListener('click', moveRight);

    prevButton.addEventListener('click', moveLeft);
}