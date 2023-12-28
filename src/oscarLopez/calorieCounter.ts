import { read } from './read'

/**
 * Sum numbers in array
 */
const sum = (input: number[]) =>
	input.reduce((previous, current) => {
		return previous + current
	})
	
/**
 * Select elve whith more calories
 */
export const calorieCounter = async (txt: string) => {
	const readFromPath = await read(txt)
	// add undefined at the end of the array
	readFromPath.push(undefined)

	const x = readFromPath.reduce(
		(previous, current) => {
			if (current === undefined) {
				const result = sum(previous.accumulator)
				//console.log({result})
				return {
					numbers: [...previous.numbers, result],
					accumulator: [],
				}
			}

			return {
				numbers: previous.numbers,
				accumulator: [current, ...previous.accumulator],
			}
		},
		{ numbers: [], accumulator: [] },
	)

	const calories = x.numbers //[11000, 6000, 4000, 10000, 24000] // read form text and transform to number
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
