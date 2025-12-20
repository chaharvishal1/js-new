const marvel_hero = ["Spiderman", "Thor", "Ironman"]

const dc_hero = ["Superman", "Batman", "Flash"]

// console.log(dc_hero, marvel_hero);


// marvel_hero.push(dc_hero)

// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const all_new_heros =  marvel_hero.concat(dc_hero)

const all_heros = [...marvel_hero, ...dc_hero]

// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11]]]

const real_another_array = another_array.flat(Infinity)


// console.log(real_another_array);


console.log(Array.isArray("Vishal"));

console.log(Array.from("Vishal Chahar"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))








