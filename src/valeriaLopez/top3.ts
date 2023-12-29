import { orderArrray } from './orderArrray.js'

/**
 * Given a number and a list, should return a list with the 3 higher numbers in total
 * The returned list is ordered from least to greatest
 * 
 */
export const top3 = (list: number[], number: number) => {
	if (list.length < 3) return [...list, number]

    const isNewNumberLower = list.every(element => number < element)
   
    // new number is lower than the rest of elements, so comparation is not needed
    if (isNewNumberLower === true) return list 

    const newList = orderArrray(list) as [number, number, number]
    if (newList[2] < number) newList[2] = number
    if (newList[1] < number) newList[1] = number
    if (newList[0] < number) newList[0] = number

    return newList
}