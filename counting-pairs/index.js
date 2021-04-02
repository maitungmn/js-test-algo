/**
 * Given an integer k and a list of integers, count the number of 
 * distinct valid pairs of integers (a, b) in the list for which a + k = b.
 * Two pairs of integers (a, b) and (c, d) are considered distinct if at
 * least one element of (a, b) does not also belong to (c, d).
 * 
 * Example:
 * n = 4
 * numbers = [1, 1, 1, 2]
 * k = 1
 * 
 * This array has two different valid pairs: (1, 1) and (1, 2). For k = 1,
 * there is only 1 valid pair which satisfies a + k = b: the pair (a, b) = (1, 2).
 * 
 * Function Description
 * Complete the function countPairs in the editor below.
 * 
 * countPairs has the following parameter(s):
 * int numbers[n]: array of integers
 * int k: target different
 * 
 * Returns
 * int: number of valid (a, b) pairs in the numbers array that have a different of k
 * 
 * Constraints
 * + 2 <= n <= 2 * 10^5
 * + 0 <= numbers[i] <= 10^9, where 0 <= i <= n
 * + 0 <= k <= 10^9
 * 
 * Notes:
 * + If you can, please import input.json and try with k = 72007. We expect the runtime of this
 * countPairs function should not be over 1 sec.
 */

function countPairs(arrayOfInt, k) {
}

module.exports = countPairs;