const scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61, 
    46, 31, 57, 52, 44, 18, 
    41, 53, 55, 61, 51, 44];

// Bubble solution #0 score: 60
// Bubble solution #1 score: 50
// Bubble solution #2 score: 60
// bubble tests: 36 
// Highest bubble score: 69
// Solutons with highest score: #11, #18

let i = 0
let output 

// while (i < scores.length) {
//     output = "Bubble solution #" + i + " score: " + scores[i]
//     console.log(output);
//     i = i + 1
// }

for (let i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i]
    console.log(output);
}

console.log("bubble tests: " + scores.length);