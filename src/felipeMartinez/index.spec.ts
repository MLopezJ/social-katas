import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { main, parser } from './index.js'

/*
describe('main', () => {
	it(`should return the amount of dots in matrix after ordering`, () => {
		const input = `.....
..##.
..#..
.....
..##.
.....`
		assert.equal(main(input), 25)
	})
})
*/

describe('parser', () => {
	it(`should transform data type of input`, () => {
		const input = `.....
..##.
..#..
.....
..##.
.....`

		const expected = [
			['.', '.', '.', '.', '.'],
			['.', '.', '#', '#', '.'],
			['.', '.', '#', '.', '.'],
			['.', '.', '.', '.', '.'],
			['.', '.', '#', '#', '.'],
			['.', '.', '.', '.', '.'],
		]
		assert.deepEqual(parser(input), expected)
	})
})
