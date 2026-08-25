export default function renderCard(player) {
  return `
    <figure class="card">
      <img
        data-original="assets/images/placeholders/placeholder_card.png"
        src="assets/images/placeholders/placeholder_card.png"
      />
      <span>${player.name}</span>
    </figure>
  `;
}