import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { top3 } from './top3.js'

void describe('top3', () => {
	for (const [list, number, expected] of [
        // empty array
        [[], 100, [100]],
		// arrray with less than 3 numbers (no comparation needed)
        [[1, 500], 100, [1, 500, 100]],
        // no comparation is needed
		[[1, 2, 3], 0, [1, 2, 3]],
        // 
        [[4, 11, 24], 10, [10, 11, 24]],
        [[11, 4, 24], 10, [10, 11, 24]],
        [[11, 24, 4], 10, [10, 11, 24]],
        [[ 6000, 4000, 11000 ], 24000, [6000, 11000, 24000]]
	] as [number[], number, number[]][]) {
		void it(`should return a list with the 3 higher elements`, () => {
			assert.deepEqual(top3(list, number), expected)
		})
	}
})


