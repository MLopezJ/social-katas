import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { main } from './index.js'

describe('main', () => {
	it(`should return the amount of dots in matrix after ordering`, () => {
		const input = [
			['.', '.', '.', '.', '.'],
			['.', '.', '#', '#', '.'],
			['.', '.', '#', '.', '.'],
			['.', '.', '.', '.', '.'],
			['.', '.', '#', '#', '.'],
			['.', '.', '.', '.', '.'],
		]
		assert.equal(main(input), 25)
	})
})
