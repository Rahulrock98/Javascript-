const marvel_heros =["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //it will combine both value


// const  allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros); // it will also add the value and it is recomended method

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("rahul"));
console.log(Array.from("rahul"));
console.log(Array.from({name: "rahul"})); // intresting to remember

 const score1 = 100
 const score2 = 200
 const score3 = 300
  
 console.log(Array.of(score1,score2,score3)); // it will make array 