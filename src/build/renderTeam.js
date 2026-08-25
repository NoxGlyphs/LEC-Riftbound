import renderCard from './renderCard.js';

function renderPlayers(players) {
  const cardsHtml = players
    .map((player) => `<li>${renderCard(player)}</li>`)
    .join('');

  return cardsHtml;
}

export default function renderTeam(team, roster) {


  const teamHtml = `
    <section class="team-section"> 
      <div class="team-header">
        <div class="team-logo-container">
          <img class="team-logo" src="${team.logo}" alt="${team.name} logo" onerror="this.onerror=null; this.src='assets/images/placeholders/placeholder_team_logo.png';">      
        </div>
        <h2>${team.name}</h2>
      </div>  

      <div class="card-gallery" id="${team.name}-gallery">
        <button class="prev">←</button>
        <ul class="card-list">
            ${renderPlayers(roster)}
        </ul>
        <button class="next">→</button>
      </div>

    </section>
  `;

  return teamHtml;
}