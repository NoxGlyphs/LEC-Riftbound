export function setupViewer(galleries) {
    const viewer = document.getElementById('viewer');
    const viewerImage = document.getElementById('viewer-image');
    const closeButton = document.getElementById('close-viewer');
    const prevButton = document.getElementById('viewer-prev');
    const nextButton = document.getElementById('viewer-next');
    const viewerGallery = document.getElementById('viewer-gallery');

    let currentCards = [];
    let currentIndex = 0;

    function showCard(index, cards = currentCards) {
        currentCards = cards;
        currentIndex = index;

        const image = currentCards[currentIndex].querySelector('img');
        const fallbackSrc = image.currentSrc || image.src;

        viewerImage.onerror = function () {
            this.onerror = null;
            this.src = fallbackSrc;
            this.alt = image.alt;
        };

        viewerImage.removeAttribute('src');
        viewerImage.src = image.dataset.original;
        viewerImage.alt = image.alt;
    }

    function setupThumbnails(cards) {
        viewerGallery.innerHTML = '';

        cards.forEach((card, index) => {
            const image = card.querySelector('img');

            const thumbnail = document.createElement('img');

            thumbnail.src = image.src;
            thumbnail.alt = image.alt;

            thumbnail.addEventListener('click', () => {
                showCard(index);
            });

            viewerGallery.appendChild(thumbnail);
        });
    }

    Array.from(galleries).forEach((gallery) => {
        const cards = Array.from(gallery.getElementsByClassName('card'));

        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                setupThumbnails(cards);
                showCard(index, cards);
                viewer.showModal();
            });
        });
    });

    prevButton.addEventListener('click', () => {
        const newIndex =
            (currentIndex - 1 + currentCards.length) % currentCards.length;
        showCard(newIndex);
        console.log('Previous button clicked. New index:', newIndex);
    });

    nextButton.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % currentCards.length;
        showCard(newIndex);
        console.log('Next button clicked. New index:', newIndex);
    });

    closeButton.addEventListener('click', () => {
        viewer.close();
    });

    viewer.addEventListener('click', (event) => {
        if (event.target === viewer) {
            viewer.close();
        }
    });
}