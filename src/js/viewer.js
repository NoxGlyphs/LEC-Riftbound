export function setupViewer(gallery) {
    const viewer = document.getElementById('viewer');
    const viewerImage = document.getElementById('viewer-image');
    const closeButton = document.getElementById('close-viewer');
    const prevButton = document.getElementById('viewer-prev');
    const nextButton = document.getElementById('viewer-next');
    const viewerGallery = document.getElementById('viewer-gallery');

    const cards = Array.from(gallery.getElementsByClassName('card'));

    let currentIndex = 0;

    function showCard(index) {
        currentIndex = index;

        const image = cards[currentIndex].querySelector('img');

        viewerImage.src = image.src;
        viewerImage.alt = image.alt;
    }

    function setupThumbnails() {
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

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            setupThumbnails();
            showCard(index);
            viewer.showModal();
        });
    });

    prevButton.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(newIndex);
        console.log('Previous button clicked. New index:', newIndex);
    });

    nextButton.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % cards.length;
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