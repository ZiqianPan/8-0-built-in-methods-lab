/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
let result = Object.keys(assignments);

//result.push(Object.keys(assignments));

//console.log(Object.keys(assignments));

return result;

}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {
let result = Math.round(score.received/score.max *100);

//console.log(score.received/score.max);

return result;
}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
function getHighestOfTwoScores(score1, score2) {
  
  let score1Perc = Math.round(score1.received/score1.max *100);
  let score2Perc  = Math.round(score2.received/score2.max *100);
  //console.log(score1Perc);

  return Math.max(score1Perc,score2Perc);
  // if (score1Perc > score2Perc){
  //   result = score1Perc;
  // } else {
  //   result = score2Perc;
  // }

//return result;
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
