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

    // add number to list
    list.push(number)
    // order list
    const newList = orderArrray(list)
    // pick last 3 elements
    const result = newList.slice(-3)
    return result
}