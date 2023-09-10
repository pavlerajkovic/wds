let legendsList = ['Wraith', 'Bangalore', 'Mirage', 'Octane', 'Revenant', 'Horizon', 'Fuse', 'Ash',
               'Mad Maggie', 'Gibraltar', 'Caustic', 'Wattson', 'Rampart', 'Newcastle', 'Lifeline',
               'Loba', 'Bloodhound', 'Pathfinder', 'Crypto', 'Valkyrie', 'Seer', 'Vantage', 'Catalyst'];

let gunsList = ['Havoc', 'Flatline', 'Hemlok', 'R-301', 'Alternator', 'Prowler', 'R-99', 'Volt', 'CAR', 'Devotion', 
            'L-STAR', 'Spitfire', 'G7 Scout', 'Triple Take', '30-30 Repeater', 'Charge Rifle', 'Longbow', 
            'Sentinel', 'EVA-8', 'Peacekeeper', 'RE-45', 'Wingman', 'Supply Drop'];

let legends = Array.from(legendsList);
let guns = Array.from(gunsList);

function generateChallenge() {
    let playerOne = document.getElementById('player-one').value;
    let playerTwo = document.getElementById('player-two').value;
    let playerThree = document.getElementById('player-three').value;

    document.getElementById('teammate-one').innerHTML = playerOne;
    document.getElementById('teammate-two').innerHTML = playerTwo;
    document.getElementById('teammate-three').innerHTML = playerThree;

    document.getElementById('teammate-one').style.fontWeight = "normal";
    document.getElementById('teammate-two').style.fontWeight = "normal";
    document.getElementById('teammate-three').style.fontWeight = "normal";

    let players = [playerOne, playerTwo, playerThree];
    let jumpmaster = randomPlayer(players);
    switch(jumpmaster) {
        case playerOne:
            document.getElementById('teammate-one').style.fontWeight = "bold";
            break;
        case playerTwo:
            document.getElementById('teammate-two').style.fontWeight = "bold";
            break;
        case playerThree:
            document.getElementById('teammate-three').style.fontWeight = "bold";
            break;
    }

    if(legends.length<3) legends = Array.from(legendsList);

    let legendOne = randomLegend();
    let legendTwo = randomLegend();
    let legendThree = randomLegend();

    document.getElementById('legend-one').innerHTML = legendOne;
    document.getElementById('legend-two').innerHTML = legendTwo;
    document.getElementById('legend-three').innerHTML = legendThree;

    if(guns.length<3) guns = Array.from(gunsList);

    let primaryOne = randomGun();
    let primaryTwo = randomGun();
    let primaryThree = randomGun();
    
    document.getElementById('primary-one').innerHTML = primaryOne;
    document.getElementById('primary-two').innerHTML = primaryTwo;
    document.getElementById('primary-three').innerHTML = primaryThree;

    if(guns.length<3) guns = Array.from(gunsList);

    let secondaryOne = randomGun();
    let secondaryTwo = randomGun();
    let secondaryThree = randomGun();
    
    document.getElementById('secondary-one').innerHTML = secondaryOne;
    document.getElementById('secondary-two').innerHTML = secondaryTwo;
    document.getElementById('secondary-three').innerHTML = secondaryThree;
}

function randomPlayer(players) {
    let index = Math.floor(Math.random()*players.length);
    let player = players[index];
    return player;
}

function randomLegend() {
    let index = Math.floor(Math.random()*legends.length);
    let legend = legends[index];
    legends.splice(index,1);
    return legend;
}

function randomGun() {
    let index = Math.floor(Math.random()*guns.length);
    let gun = guns[index];
    guns.splice(index,1);
    return gun;
}