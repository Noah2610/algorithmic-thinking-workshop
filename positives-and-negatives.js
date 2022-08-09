/**
 * This function gets a list of positive and negative numbers.
 * It should print two values:
 *   The _count_ of all _positive_ numbers
 *   The _sum_ of all _negative_ numbers
 *
 * @param {number[]} list
 */
function countPositivesAndSumNegatives(list) {
    let counterPositive = 0;
    let sumNegative = 0;

    // loop through numbers in list
    for (let i = 0; i < list.length; i++) {
        // if positive: count positive numbers
        if (list[i] > 0) {
            counterPositive += 1;
        }

        // if netgative: add negative numbers
        if (list[i] < 0) {
            sumNegative += list[i];
        }
    }

    // output our values
    console.log(counterPositive, sumNegative);

    return [counterPositive, sumNegative];
}

const exampleList = [5, -3, 7, -2, 1];
countPositivesAndSumNegatives(exampleList);
