/**
 * This function gets a list of positive and negative numbers.
 * It should return an array with two values:
 *   The _count_ of all _positive_ numbers
 *   The _sum_ of all _negative_ numbers
 *
 * @param {number[]} list
 * @returns [number, number]
 */
function countPositivesAndSumNegatives(list) {
    let countPositiveNumbers = 0;
    let sumNegativeNumbers = 0;

    for (let i = 0; i < list.length; i++) {
        const num = list[i];
        // if num is zero, skip
        if (num === 0) {
            continue;
        }

        // if num is positive, increment positives count
        if (num > 0) {
            countPositiveNumbers++;
        }

        // if num is negative, add to sum of negatives
        if (num < 0) {
            sumNegativeNumbers += num;
        }
    }

    return [countPositiveNumbers, sumNegativeNumbers];
}

const exampleList = [5, -3, 7, -2, 1];
console.log(countPositivesAndSumNegatives(exampleList));
