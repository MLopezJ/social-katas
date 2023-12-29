import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { orderArrray } from './orderArrray.js'

describe('orderArrray', () => {
	it(`should order array from smaller to bigger number`, () => {
		const array = [500, 3, 400, 100, 1]
		const result = orderArrray(array)

		assert.equal(result[0], 1)
		assert.equal(result[2], 100)
		assert.equal(result[4], 500)
	})
})

