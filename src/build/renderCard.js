export default function renderCard(player) {
    const miniatureUrl =
        player.images?.miniature ??
        'assets/images/placeholders/placeholder_card.png';

    const fullImageUrl =
        player.images?.full ??
        'assets/images/placeholders/placeholder_card.png';

    return `
        <figure class="card">
            <img
                src="${miniatureUrl}"
                data-original="${fullImageUrl}"
                alt="${player.name} card"
                onerror="this.onerror=null; this.src='assets/images/placeholders/placeholder_card.png';"
            />
            <span>${player.name}</span>
        </figure>
    `;
}