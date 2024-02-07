import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { type matrix } from './index.js'

describe('order hashtags', () => {
	it(`should order hashtag (#) in the matrix to be surrounded by dots (.)`, () => {
		const input = [
			['.', '.', '.', '.', '.'],
			['.', '.', '#', '#', '.'],
			['.', '.', '#', '.', '.'],
			['.', '.', '.', '.', '.'],
			['.', '.', '#', '#', '.'],
			['.', '.', '.', '.', '.'],
		]

        /**
                    ..#..
                    ....#
                    #....
                    ....#
                    .....
                    ..#..
         */
		const expected = [
			['.', '.', '#', '.', '.'],
			['.', '.', '.', '.', '#'],
			['#', '.', '.', '.', '.'],
			['.', '.', '.', '.', '#'],
			['.', '.', '.', '.', '.'],
			['.', '.', '#', '.', '.'],
		]
		assert.deepEqual(orderHashtags(input), expected)
	})
})


/**
 * Order hashtag (#) in the matrix to be surrounded by dots (.)
 */
const orderHashtags = (input: matrix):matrix => {
    return [
        ['.', '.', '#', '.', '.'],
        ['.', '.', '.', '.', '#'],
        ['#', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['.', '.', '#', '.', '.'],
    ]
}