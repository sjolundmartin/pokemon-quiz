export const load = async () => {
  return {
    pokemon: pokemonList,
    items: {
      pokeBall: {
        name: 'Poké ball',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
      }
    }
  };
};

const pokemonList = [
  {
    id: 1,
    name: 'bulbasaur',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
    id: 2,
    name: 'ivysaur',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  },
  {
    id: 3,
    name: 'venusaur',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
  },
  {
    id: 4,
    name: 'charmander',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  },
  {
    id: 5,
    name: 'charmeleon',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
  },
  {
    id: 6,
    name: 'charizard',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
  },
  {
    id: 7,
    name: 'squirtle',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
  },
  {
    id: 8,
    name: 'wartortle',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
  },
  {
    id: 9,
    name: 'blastoise',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
  },
  {
    id: 10,
    name: 'caterpie',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'
  },
  {
    id: 11,
    name: 'metapod',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'
  },
  {
    id: 12,
    name: 'butterfree',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'
  },
  {
    id: 13,
    name: 'weedle',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png'
  },
  {
    id: 14,
    name: 'kakuna',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png'
  },
  {
    id: 15,
    name: 'beedrill',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png'
  },
  {
    id: 16,
    name: 'pidgey',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png'
  },
  {
    id: 17,
    name: 'pidgeotto',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png'
  },
  {
    id: 18,
    name: 'pidgeot',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png'
  },
  {
    id: 19,
    name: 'rattata',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
  },
  {
    id: 20,
    name: 'raticate',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png'
  },
  {
    id: 21,
    name: 'spearow',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png'
  },
  {
    id: 22,
    name: 'fearow',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png'
  },
  {
    id: 23,
    name: 'ekans',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png'
  },
  {
    id: 24,
    name: 'arbok',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png'
  },
  {
    id: 25,
    name: 'pikachu',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  },
  {
    id: 26,
    name: 'raichu',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
  },
  {
    id: 27,
    name: 'sandshrew',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png'
  },
  {
    id: 28,
    name: 'sandslash',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png'
  },
  {
    id: 29,
    name: 'nidoran-f',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png'
  },
  {
    id: 30,
    name: 'nidorina',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png'
  },
  {
    id: 31,
    name: 'nidoqueen',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png'
  },
  {
    id: 32,
    name: 'nidoran-m',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png'
  },
  {
    id: 33,
    name: 'nidorino',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png'
  },
  {
    id: 34,
    name: 'nidoking',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png'
  },
  {
    id: 35,
    name: 'clefairy',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png'
  },
  {
    id: 36,
    name: 'clefable',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png'
  },
  {
    id: 37,
    name: 'vulpix',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png'
  },
  {
    id: 38,
    name: 'ninetales',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png'
  },
  {
    id: 39,
    name: 'jigglypuff',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png'
  },
  {
    id: 40,
    name: 'wigglytuff',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png'
  },
  {
    id: 41,
    name: 'zubat',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png'
  },
  {
    id: 42,
    name: 'golbat',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png'
  },
  {
    id: 43,
    name: 'oddish',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png'
  },
  {
    id: 44,
    name: 'gloom',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png'
  },
  {
    id: 45,
    name: 'vileplume',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png'
  },
  {
    id: 46,
    name: 'paras',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png'
  },
  {
    id: 47,
    name: 'parasect',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png'
  },
  {
    id: 48,
    name: 'venonat',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png'
  },
  {
    id: 49,
    name: 'venomoth',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png'
  },
  {
    id: 50,
    name: 'diglett',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png'
  },
  {
    id: 51,
    name: 'dugtrio',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png'
  },
  {
    id: 52,
    name: 'meowth',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png'
  },
  {
    id: 53,
    name: 'persian',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png'
  },
  {
    id: 54,
    name: 'psyduck',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png'
  },
  {
    id: 55,
    name: 'golduck',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png'
  },
  {
    id: 56,
    name: 'mankey',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png'
  },
  {
    id: 57,
    name: 'primeape',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png'
  },
  {
    id: 58,
    name: 'growlithe',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png'
  },
  {
    id: 59,
    name: 'arcanine',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png'
  },
  {
    id: 60,
    name: 'poliwag',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png'
  },
  {
    id: 61,
    name: 'poliwhirl',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png'
  },
  {
    id: 62,
    name: 'poliwrath',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png'
  },
  {
    id: 63,
    name: 'abra',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png'
  },
  {
    id: 64,
    name: 'kadabra',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png'
  },
  {
    id: 65,
    name: 'alakazam',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png'
  },
  {
    id: 66,
    name: 'machop',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png'
  },
  {
    id: 67,
    name: 'machoke',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png'
  },
  {
    id: 68,
    name: 'machamp',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png'
  },
  {
    id: 69,
    name: 'bellsprout',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png'
  },
  {
    id: 70,
    name: 'weepinbell',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png'
  },
  {
    id: 71,
    name: 'victreebel',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png'
  },
  {
    id: 72,
    name: 'tentacool',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png'
  },
  {
    id: 73,
    name: 'tentacruel',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png'
  },
  {
    id: 74,
    name: 'geodude',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png'
  },
  {
    id: 75,
    name: 'graveler',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png'
  },
  {
    id: 76,
    name: 'golem',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png'
  },
  {
    id: 77,
    name: 'ponyta',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png'
  },
  {
    id: 78,
    name: 'rapidash',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png'
  },
  {
    id: 79,
    name: 'slowpoke',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png'
  },
  {
    id: 80,
    name: 'slowbro',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png'
  },
  {
    id: 81,
    name: 'magnemite',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png'
  },
  {
    id: 82,
    name: 'magneton',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png'
  },
  {
    id: 83,
    name: 'farfetchd',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png'
  },
  {
    id: 84,
    name: 'doduo',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png'
  },
  {
    id: 85,
    name: 'dodrio',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png'
  },
  {
    id: 86,
    name: 'seel',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png'
  },
  {
    id: 87,
    name: 'dewgong',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png'
  },
  {
    id: 88,
    name: 'grimer',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png'
  },
  {
    id: 89,
    name: 'muk',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png'
  },
  {
    id: 90,
    name: 'shellder',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png'
  },
  {
    id: 91,
    name: 'cloyster',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png'
  },
  {
    id: 92,
    name: 'gastly',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png'
  },
  {
    id: 93,
    name: 'haunter',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png'
  },
  {
    id: 94,
    name: 'gengar',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
  },
  {
    id: 95,
    name: 'onix',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png'
  },
  {
    id: 96,
    name: 'drowzee',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png'
  },
  {
    id: 97,
    name: 'hypno',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png'
  },
  {
    id: 98,
    name: 'krabby',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png'
  },
  {
    id: 99,
    name: 'kingler',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png'
  },
  {
    id: 100,
    name: 'voltorb',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png'
  },
  {
    id: 101,
    name: 'electrode',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png'
  },
  {
    id: 102,
    name: 'exeggcute',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png'
  },
  {
    id: 103,
    name: 'exeggutor',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png'
  },
  {
    id: 104,
    name: 'cubone',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png'
  },
  {
    id: 105,
    name: 'marowak',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png'
  },
  {
    id: 106,
    name: 'hitmonlee',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'
  },
  {
    id: 107,
    name: 'hitmonchan',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png'
  },
  {
    id: 108,
    name: 'lickitung',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png'
  },
  {
    id: 109,
    name: 'koffing',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png'
  },
  {
    id: 110,
    name: 'weezing',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png'
  },
  {
    id: 111,
    name: 'rhyhorn',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png'
  },
  {
    id: 112,
    name: 'rhydon',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png'
  },
  {
    id: 113,
    name: 'chansey',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png'
  },
  {
    id: 114,
    name: 'tangela',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png'
  },
  {
    id: 115,
    name: 'kangaskhan',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png'
  },
  {
    id: 116,
    name: 'horsea',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png'
  },
  {
    id: 117,
    name: 'seadra',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png'
  },
  {
    id: 118,
    name: 'goldeen',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png'
  },
  {
    id: 119,
    name: 'seaking',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png'
  },
  {
    id: 120,
    name: 'staryu',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png'
  },
  {
    id: 121,
    name: 'starmie',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png'
  },
  {
    id: 122,
    name: 'mr-mime',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png'
  },
  {
    id: 123,
    name: 'scyther',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png'
  },
  {
    id: 124,
    name: 'jynx',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png'
  },
  {
    id: 125,
    name: 'electabuzz',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png'
  },
  {
    id: 126,
    name: 'magmar',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png'
  },
  {
    id: 127,
    name: 'pinsir',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png'
  },
  {
    id: 128,
    name: 'tauros',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png'
  },
  {
    id: 129,
    name: 'magikarp',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png'
  },
  {
    id: 130,
    name: 'gyarados',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png'
  },
  {
    id: 131,
    name: 'lapras',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png'
  },
  {
    id: 132,
    name: 'ditto',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
  },
  {
    id: 133,
    name: 'eevee',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
  },
  {
    id: 134,
    name: 'vaporeon',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png'
  },
  {
    id: 135,
    name: 'jolteon',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png'
  },
  {
    id: 136,
    name: 'flareon',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png'
  },
  {
    id: 137,
    name: 'porygon',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png'
  },
  {
    id: 138,
    name: 'omanyte',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png'
  },
  {
    id: 139,
    name: 'omastar',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png'
  },
  {
    id: 140,
    name: 'kabuto',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png'
  },
  {
    id: 141,
    name: 'kabutops',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png'
  },
  {
    id: 142,
    name: 'aerodactyl',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png'
  },
  {
    id: 143,
    name: 'snorlax',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png'
  },
  {
    id: 144,
    name: 'articuno',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'
  },
  {
    id: 145,
    name: 'zapdos',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png'
  },
  {
    id: 146,
    name: 'moltres',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png'
  },
  {
    id: 147,
    name: 'dratini',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png'
  },
  {
    id: 148,
    name: 'dragonair',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png'
  },
  {
    id: 149,
    name: 'dragonite',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png'
  },
  {
    id: 150,
    name: 'mewtwo',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
  },
  {
    id: 151,
    name: 'mew',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'
  }
];
