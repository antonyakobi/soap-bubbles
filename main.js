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


// print score and get high score

function getBestScores(array, maxValue) {
    const bestSolutions = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxValue) {
            bestSolutions.push(i)
        }
    }
    return bestSolutions
}

function printAndGetHighScore(array) {
    let output 
    let highScore = 0
    for (let i = 0; i < array.length; i++) {
        output = "Bubble solution #" + i + " score: " + array[i]
        console.log(output);
        if (highScore < array[i]) {
            highScore = array[i]
        }
    }
    return highScore
}

// print score and get high score
const highScore = printAndGetHighScore(scores)
console.log("bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);


// get best scores
const bestSolutions = getBestScores (scores, highScore)
console.log("Solutons with highest score: " + bestSolutions);
