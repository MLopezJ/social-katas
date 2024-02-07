
export type matrix = string[][]

/**
 * Transform data type
 */
export const parser = (input: string): matrix => input.split('\n').map(element => element.split(''))

/**
 * Order hashtag (#) in the matrix to be surrounded by dots (.)
 * and then count the amount of dots in the matrix
 */
export const main = (input: string): number => {
	const matrix = parser(input)
	// order hash tags

	// count dots
	return 0
}
