// Iteration 1: Names and Input
let hacker1 = 'Justin'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Jay'
console.log(`The navigator's name is ${hacker2}`)

 // Iteration 2: Conditionals
for (i = 0; i < 1; i++){
  if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else { 
  if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    if(hacker2.length === hacker1.length){
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
  }
  }
}

 // Iteration 3: Loops
let test1 = '';

for(var i=0; i<hacker1.length; i++){
   test1 += hacker1.charAt(i) + ' ';     
   test1 = test1.toUpperCase()
}

console.log(test1);

for (let i = 4; i > hacker2.length; i--){
  console.log(hacker2[i])
}

function reverse(str){
  let reversed = "";
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

reverse(hacker2)