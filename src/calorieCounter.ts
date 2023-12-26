/**
 * Select elve whith more calories
 */
export const calorieCounter = (txt: string) => {
    const readFromPath = '' // get txt
    const calories = [11000, 6000, 4000,  10000, 24000] // read form text and transform to number
    const result = calories.reduce((previus, current) => {
        if (previus > current) return previus
        return current
    })
    return result
}