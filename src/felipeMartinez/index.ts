
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
    // transform data
	const matrix = parser(input)

	// order hash tags
    orderHashtags(matrix)

	// count dots
	return 0
}

/**
 * 
 */
const orderHashtags = (input: matrix) => {
    calculateStep(input)
}

/**
 * 
 */
const calculateStep = (input: matrix, ) => {
 // TODO
}