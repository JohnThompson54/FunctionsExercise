// Function Exercise

// 1
function spookyGhost(){
    console.log(`Boo!`);
}
spookyGhost();

console.log("================");

// 2
function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
    // or console.log(goal, goal, goal, goal);
}
candy(`Get Candy`);

console.log(`===============`);

// 3
function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
        console.log(`ARH-WOOO!`);
    }
}
werewolf(`Full`, `Moon`)

// using a Ternary
// console.log((a === `Full`  && b === `Moon`) ? `ARH-WOOO!`: null;

console.log(`==============`);

// 4
function halloween(){
    return `October 31st`;
}
halloween();

console.log(`===========`);

// 5

function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    }
    else if (pieces < 31){
        return false;
    }
}
console.log(isEnoughCandy(31));
console.log(isEnoughCandy(8));
console.log(isEnoughCandy(88));

// using a Ternary
// return (pieces >= 31) ? true: false;

// 6

function candyCounter(nums){
    let total = 0;
    for(i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total;
}
candyCounter([1, 2, 3]);

// 7

const hauntedMansion = function(){
    console.log(`Welcome, foolish mortals, to the Haunted Mansion!`);
}
hauntedMansion();

console.log(`===========`);

// 8

ghostbusters = () => `Who You Gonna Call?`;

console.log(ghostbusters());

console.log("============");

// 9
// no

// 10
// yes

// 11a
const constumes = ["Ghost", "Princess", "Pirate"];

// 11b

const upperCostumes = constumes.map(i => i.toUpperCase());

// using a Declaration Function
// const upperCostumes = costumes.map(function(i){
 //  return i.toUpperCase();
// });
console.log(upperCostumes); // [ 'GHOST', 'PRINCESS', 'PIRATE' ]

console.log("==========");

// BONUS
// 12a
const stephenKingMovies = [
  "The Shining",
  "Christine",
  "It",
  "The Mist",
  "Creepshow",
  "Pet Sematary"
];

// 12b
const twoMovies = stephenKingMovies.filter(i => i.length === 9);
console.log(twoMovies); //  'Christine', 'Creepshow' ]

console.log("=========");

// 13a
const halloweenSongs1 = ["Monster Mash", "Thriller"];

// 13b
const halloweenSongs2 = [
  "I Put A Spell On You",
  "This Is Halloween",
  "Ghostbusters"
];

// 13c
halloweenJukeBox = songs => {
  const random = Math.floor(Math.random() * songs.length);
  console.log(songs[random]);
}

// 13d
halloweenJukeBox(halloweenSongs1); // Random item/song from the halloweenSongs1 array
halloweenJukeBox(halloweenSongs2); // Random item/song from the halloweenSongs2 array

console.log("=========");

// 14
caps = string => {
  let newString = "";
  for (i = 0; i < string.length; i++){
    if (i % 2 === 0){
      newString = newString + string[i].toUpperCase();
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
}

console.log(caps(`Hey`)); // HeY
console.log(caps(`Halloween`)); // HaLlOwEeN

// Using the substring method (Returns part of the string between the start and end indexes that are specified. Also, if a second index is not specified the the rest of the string is included)
// caps = string => {
//   for (i = 0; i < string.length; i += 2){
//     string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
//   }
//   return string;
// }

// This example accounts for multi word string arguments (AKA Strings with spaces)...
/*
caps = string => {
  let newString = ``;
  let num = 0;
  for (letter of string){
    if (letter !== " "){
      if (num % 2 === 0){
        newString += letter.toUpperCase();
        num++;
      } else {
        newString += letter.toLowerCase();
        num++;
      }
    } else {
      newString += letter;
    }
  }
  return newString;
}
*/

console.log(caps(`Happy Halloween`));





