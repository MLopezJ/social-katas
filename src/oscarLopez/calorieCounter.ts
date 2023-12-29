import { read } from './read'

/**
 * Sum numbers in array
 */
const sum = (input: number[]) =>
	input.reduce((previous, current) => {
		return previous + current
	})

/**
 * Sum consecutive numbers.
 *
 * Batch of numbers are separated by undefined
 */
export const transformLogs = (logs: (number | undefined)[]) => {
	type Accumulator = {
		numbers: number[]
		accumulator: number[]
	}
	// add a separator at the end of the array
	logs.push(undefined)

	const result = logs.reduce(
		(previous: Accumulator, current: number | undefined) => {
			if (current === undefined) {
				const result = sum(previous.accumulator)
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

	return result.numbers
}

/**
 * Select max amount of calories from logs
 */
export const calorieCounter = async (txt: string) => {
	const logs = await read(txt)
	const calories = transformLogs(logs)
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
