import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { calorieCounter } from "./calorieCounter.js"

describe('calorieCounter', () => {
    it(`should select the top 3 elves whith more calories and sum the total of it`, async () => {
        const path = 'example.txt'
        assert.equal(await calorieCounter(path), 45000)
    })
})

