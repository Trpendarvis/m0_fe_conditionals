// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// In line 12 you are given an if statement that is strictly equal to 1 meaning if you pick one it will be true and continue if not the code will
// move to the else line. If true the bear will have a hat. On line 16 the } is noting the end of the conditional statement.

// 2. What variable has a new value assigned to it after the first if statement executes?
//BearClothing.

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//It would be a scarf, since the statement is looking for === (strictly equal to 1) so any other number would be the else option.

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
//Between lines 25 and 33 you are given conditional statements that will return code based on your input above being 1 or any other integer.
// If you input 1 the first line will run and you'll find a secret passage out. Any other number will give other options as defined below.

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//If you input 3 the bear will have a scarf and you will run away and be with all the snakes.

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//If doorChoice was equal to 1 the bear would have a hat and you would make the bear cry.

// 7. What is your favorite ending?
// My favorite ending would be the bear wearing a silly little hat so we could become friends
