import { transformLogs } from 'src/oscarLopez/calorieCounter.js'
import { read } from 'src/oscarLopez/read.js'
import { top3 } from './top3.js'

/**
 * Select the top 3 elves whith more calories and sum the total of it
 */
export const calorieCounter = async (txt: string) => {
	// read logs
	const logs = await read(txt)

	// sum total amount of calories per elve
	const calories = transformLogs(logs)

	// select top 3 (higher number) from calories
	const top = calories.reduce((previous: number[], current) => {
		return top3(previous, current)
	}, [])

	// sum of top 3
	const result = top.reduce((previous, current) => {
		return previous + current
	})

	return result
}
