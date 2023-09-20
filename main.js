let input = "hello";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

//i = iterating through input.
//j = iterating through vowels array.
for (let i = 0; i < input.length; i++)
{ //opens outer loop.
  //if below: doubles e or u before looping through vowels array.
  //essentially makes original resultArray longer. 
  if (input[i] === "e" || input[i] === "u")
  {
    resultArray.push(input[i]);
  } //close if statement

  for (let j = 0; j < vowels.length; j++)
  { //opens nested loop.
    if (input[i] === vowels[j])
    {
      resultArray.push(input[i]);
    } //close if statement.
  } //closes nested loop.
} //closes outer loop.

let resultString = resultArray.join("");
console.log(resultString.toUpperCase());

//test case 1: input "hello" should print "EEO" --> passed.
//test case 2: input "turpentine and turtles" should print "UUEEIEEAUUEE" --> passed.
