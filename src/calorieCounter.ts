/**
 * Select elve whith more calories
 */
export const calorieCounter = (txt: string) => {
    const readFromPath = '' // get txt
    const calories = [11000, 6000, 4000,  10000, 24000] // read form text and transform to number
    const max = getMax(calories)
}

/**
 * Get bigger number from list
 */
const getMax = (input: number[]): number => input.reduce((previus, current) => {
    if (previus > current) return previus
    return current
})