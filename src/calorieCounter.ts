import { read } from "./read"

/**
 * Select elve whith more calories
 */
export const calorieCounter = async (txt: string) => {
	const readFromPath = await read(txt)
	const calories = [11000, 6000, 4000, 10000, 24000] // read form text and transform to number
	const max = getMax(calories)
    return max
}

/**
 * Get bigger number from list
 */
const getMax = (input: number[]): number =>
	input.reduce((previus, current) => {
		if (previus > current) return previus
		return current
	})
