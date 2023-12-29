import { transformLogs } from "src/oscarLopez/calorieCounter.js"
import { read } from "src/oscarLopez/read.js"

/**
 * Select the top 3 elves whith more calories and sum the total of it
 */
export const calorieCounter = async (txt: string) => {
	// read logs
    const logs = await read(txt)

	// sum total amount of calories per elve
	const calories = transformLogs(logs)

	// select top 3 (higher number) from calories
	const top3 = [11000, 24000, 10000]

	// sum of top 3
	const result = top3.reduce((previous, current) => {
		return previous + current
	})

	return result
}
