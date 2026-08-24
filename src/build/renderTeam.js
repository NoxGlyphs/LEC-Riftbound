import renderCard from './renderCard.js';

function renderPlayers(players) {
  const cardsHtml = players
    .map((player) => `<li>${renderCard(player)}</li>`)
    .join('');

  return cardsHtml;
}

export default function renderTeam(team, roster) {

  const teamHtml = `
    <section> 
      <h3>${team.name}</h3>
      <div class="docs-galley mb-3">
        <ul id="test-gallery1" class="docs-pictures clearfix">
            ${renderPlayers(roster)}
        </ul>
      </div>
    </section>
  `;

  return teamHtml;
}