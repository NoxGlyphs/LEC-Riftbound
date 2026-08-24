export default function renderCard(player) {
  return `
    <div class="card">
      <img
                data-original="assets/images/placeholders/placeholder_card.png"
                src="assets/images/placeholders/placeholder_card.png"
              />
      <h3 class="card-name">${player.name}</h3>
    </div>
  `;
}


{/* <img
              data-original="assets/images/placeholders/placeholder_card.png"
              src="assets/images/placeholders/placeholder_card.png"
            />


<img class="card-art" src="assets/${player.art}" alt="${player.name}"> */}
