const imageTypes = (type) => {
    const imageType = {
        bug: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/120px-Pok%C3%A9mon_Bug_Type_Icon.svg.png",
        dark: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/120px-Pok%C3%A9mon_Dark_Type_Icon.svg.png",
        dragon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/120px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png",
        electric: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/120px-Pok%C3%A9mon_Electric_Type_Icon.svg.png",
        fairy: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/120px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png",
        fighting: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/120px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png",
        fire: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/120px-Pok%C3%A9mon_Fire_Type_Icon.svg.png",
        flying: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/120px-Pok%C3%A9mon_Flying_Type_Icon.svg.png",
        grass: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/120px-Pok%C3%A9mon_Grass_Type_Icon.svg.png",
        ground: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/120px-Pok%C3%A9mon_Ground_Type_Icon.svg.png",
        ghost: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/120px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png",
        ice: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/120px-Pok%C3%A9mon_Ice_Type_Icon.svg.png",
        normal: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/120px-Pok%C3%A9mon_Normal_Type_Icon.svg.png",
        poison: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/120px-Pok%C3%A9mon_Poison_Type_Icon.svg.png",
        psychic: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/120px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png",
        rock: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/120px-Pok%C3%A9mon_Rock_Type_Icon.svg.png",
        steel:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/120px-Pok%C3%A9mon_Steel_Type_Icon.svg.png",
        water: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/120px-Pok%C3%A9mon_Water_Type_Icon.svg.png",
    }

    return imageType[type]
}

const coloursType = (type) => {
    const colours = {
        normal: '#A8A77A',
        fire: '#ee3030',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#58c74c',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

    return colours[type] || '#777';
}

const listTypes = [
    {
        name: 'bug', color: coloursType('bug'), image: imageTypes('bug')
    }, {
        name: 'dark', color: coloursType('dark'), image: imageTypes('dark')
    }, {
        name: 'dragon', color: coloursType('dragon'), image: imageTypes('dragon')
    }, {
        name: 'electric', color: coloursType('electric'), image: imageTypes('electric')
    }, {
        name: 'fairy', color: coloursType('fairy'), image: imageTypes('fairy')
    }, {
        name: 'fighting', color: coloursType('fighting'), image: imageTypes('fighting')
    }, {
        name: 'fire', color: coloursType('fire'), image: imageTypes('fire')
    }, {
        name: 'flying', color: coloursType('flying'), image: imageTypes('flying')
    }, {
        name: 'grass', color: coloursType('grass'), image: imageTypes('grass')
    }, {
        name: 'ground', color: coloursType('ground'), image: imageTypes('ground')
    }, {
        name: 'ice', color: coloursType('ice'), image: imageTypes('ice')
    }, {
        name: 'normal', color: coloursType('normal'), image: imageTypes('normal')
    }, {
        name: 'poison', color: coloursType('poison'), image: imageTypes('poison')
    }, {
        name: 'psychic', color: coloursType('psychic'), image: imageTypes('psychic')
    }, {
        name: 'rock', color: coloursType('rock'), image: imageTypes('rock')
    }, {
        name: 'steel', color: coloursType('steel'), image: imageTypes('steel')
    }, {
        name: 'water', color: coloursType('water'), image: imageTypes('water')
    }
]

const capitalize = (text) => {
    return text[0].toUpperCase() + text.substring(1)
}

module.exports = {
    imageTypes,
    coloursType,
    capitalize,
    listTypes,
}
