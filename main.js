// 1. Massivi tərsinə düzün. Massivi parametr kimi qəbul edən və tərs ardıcıllıqla yazılmış
//  eyni elemeconst sentence = [“sense.“, “make”, “all”, “will”, “This”];
// console.log(reverseArray());
//  function reverseArray () {
//     let myArray= ["This", "will", "all", "make", "sense"];
//     return myArray.reverse()
//  }

//  2. Yadplanetliləri salamlayın. Sözlərdən ibarət massivi qəbul edən və konsolda hər bir yadplanetliyə 
// salamlama çıxarmaq üçün dövrdən istifadə edən greetAliens () funksiyasını yazın. Salam belə bir formatda olmalıdır: 
// "Oh powerful [name], we humans offer our unconditional surrender!”
//  Nümunə:

// const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
//  function greetAliens(aliens){
//     aliens.forEach((name) => {
//             console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`)
//     });
//  }



// 3. 2 massivi parametr kimi qəbul edən və onların eyni dəyərli elementlərin konsola çıxaran justCoolStuff () funksiyasını yazın.

// Nümunə:
const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
];
const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
];

let myArray = [];
function justCoolStuff(coolStuff, myStuff) {
    coolStuff.forEach((item1) => {
        myStuff.forEach(item=>{
            if(item1===item){
                myArray.push(item)
            }
        })
    });
 
    return myArray
}
// greetAliens(aliens);

console.log(justCoolStuff(coolStuff, myStuff))

// Nəticə:
// [“skateboards”, “my room”]
