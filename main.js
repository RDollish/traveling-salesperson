// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [ 34, 56, 78, 54, 32, 78 ]
let totalMiles = 0

// Declare a variable to store the total. Initial value is 0.
for (const miles of weeklyMiles){
totalMiles += miles
}

const averageMiles = totalMiles / weeklyMiles.length

// Output the average miles and the total miles to the console
console.log(averageMiles)