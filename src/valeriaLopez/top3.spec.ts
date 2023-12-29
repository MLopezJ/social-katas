import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('top3', () => {
	for (const [list, number, expected] of [
        // empty array
        [[], 100, [100]],
		// arrray with less than 3 numbers (no comparation needed)
        [[1, 500], 100, [1, 500, 100]],

        // no comparation is needed
		[[1, 2, 3], 0, [1, 2, 3]],
	] as [number[], number, number[]][]) {
		void it(`should return a list with the 3 higher elements`, () => {
			assert.deepEqual(top3(list, number), expected)
		})
	}
})

/**
 * Given a number and a list, should return a list with the 3 higher numbers in total
 */
const top3 = (list: number[], number: number) => {
	if (list.length < 3) return [...list, number]

    const isNewNumberLower = list.some(element => number < element)
   
    // new number is lower than the rest of elements, so comparation is not needed
    if (isNewNumberLower === true) return list 
}
