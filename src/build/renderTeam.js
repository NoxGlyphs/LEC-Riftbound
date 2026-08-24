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
        <h3>${team.name}</h3>
      </div>  

      <div class="docs-galley mb-3">
        <ul id="test-gallery1" class="docs-pictures clearfix">
            ${renderPlayers(roster)}
        </ul>
      </div>
    </section>
  `;

  return teamHtml;
}