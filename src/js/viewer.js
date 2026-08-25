export function setupViewer(galery) {
    const viewer = document.getElementById('viewer');
    const viewerImage = document.getElementById('viewer-image');
    const closeButton = document.getElementById('close-viewer');
    const cards = Array.from(galery.getElementsByClassName('card'));
    // TODO: hacer que el viewer te deje pasar entre imagenes de la misma galery

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // TODO: aqui hay que ver si hay convenio de nombres para la imagen en alta calidad o hay que meterla en un dataset como atributo data-fullimage desde data json
            viewerImage.src = card.querySelector('img').src;
            console.log('card clicked, image src set to:', viewerImage.src);
            viewer.showModal();
        });
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