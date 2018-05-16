function getHeroRegister(data) {
    let heroes = [];

    for (let row of data) {
        let heroTokens = row.split(' / ');
        let heroName = heroTokens[0];
        let heroLevel = Number(heroTokens[1]);
        let heroItems = [];

        //check if hero has any items
        if (heroTokens.length > 2){
            heroItems = heroTokens[2].split(', ');
        }

        let hero = createHero(heroName, heroLevel, heroItems );
        heroes.push(hero);
    }

    return JSON.stringify(heroes);

    function createHero(heroName, heroLevel, heroItems) {
        return {
            name : heroName,
            level : heroLevel,
            items : heroItems
        };
    }
}