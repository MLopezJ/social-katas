import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { calorieCounter } from "./calorieCounter"

describe('calorieCounter', () => {
    it(`should select the elve whith more calories`, () => {
        const path = ''
        assert.equal(calorieCounter(path), 24000)
    })
})

