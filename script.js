// There are two gymanstics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below.
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks.
// Bonus 2: minimum score also applies to draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.


const dolphinsScores = 97 + 112 + 80;
const koalasScores = 109 + 95 + 50;
const noOfCompete = 3;
const avgScoreOfDolphins = dolphinsScores / noOfCompete;
const avgScoreOfKoales = koalasScores / noOfCompete;
console.log(avgScoreOfDolphins, avgScoreOfKoales);

if (avgScoreOfDolphins > avgScoreOfKoales) {
	console.log("Dolphins are the winners!");
} else if (avgScoreOfDolphins === avgScoreOfKoales) {
	console.log("We have a draw!");
} else {
	console.log("Koalas are the Winners!");
}

const minScore = 100;

if (avgScoreOfDolphins > avgScoreOfKoales && avgScoreOfDolphins >= minScore) {
	console.log("Dolphins win!");
} else if (
	avgScoreOfKoales > avgScoreOfDolphins &&
	avgScoreOfKoales >= minScore
) {
	console.log("Koalas win!");
} else if (
	avgScoreOfDolphins === avgScoreOfKoales &&
	avgScoreOfDolphins >= minScore &&
	avgScoreOfKoales >= minScore
) {
	console.log("There was a draw!");
} else {
	console.log("No team wins!");
}