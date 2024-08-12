// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let i = 1
while (i <= 10) {
  console.log(i)
  i++
}



// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40
// let x=20
// while(x<=40){
//   console.log(x)
//   x++
// }



// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let user = prompt("enter a positive number")
user = parseInt(user)
while (user > 0) {
  console.log(user)
  user--
}



// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.
let user2 = prompt("Enter another positive interger")
user2 = parseInt(user2)

let sum = 0
let counter = 1


while (sum<=user2) {
  sum += counter
  counter += 1
}
console.log("The sum of all number from 1 to ", user2, "is", sum)


// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").
let pass = "pizza"
let passworld = prompt("enter a passworld")

while (passworld != pass) {
  passworld = prompt("try again another passworld")

} if (passworld === pass) {
  console.log("correct")
}





// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




