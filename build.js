import fs from 'fs';
import prettier from 'prettier';
import renderTeam from './src/build/renderTeam.js';

const teams = JSON.parse(fs.readFileSync('./src/data/teams.json', 'utf-8'));
const players = JSON.parse(fs.readFileSync('./src/data/players.json', 'utf-8'));
const layout = fs.readFileSync('./src/layout.html', 'utf-8');

const cardsHtml = teams.map((team) => {
    const roster = players.filter(player => player.team === team.name);

    if (roster.length != 6) {
        throw new Error(`Data ERROR: team "${team.name}" has ${roster.length} cards instead of 6 (5 lanes + legend card). Check /src/data/players.json`);
    }
    
    return renderTeam(team, roster)
}).join('\n');

const finalHtml = layout.replace('<!--CARDS-->', cardsHtml);
const formattedHtml = await prettier.format(finalHtml, {
    parser: 'html'
});

fs.mkdirSync('./dist', { recursive: true });

fs.writeFileSync('./dist/index.html', formattedHtml, 'utf-8');

fs.cpSync('./src/css', './dist/css', { recursive: true });
fs.cpSync('./src/js', './dist/js', { recursive: true });
fs.cpSync('./src/assets', './dist/assets', { recursive: true });

console.log('Build completed and saved to /dist');