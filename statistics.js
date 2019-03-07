
import * as math from './math.js'

/**
 * @param {Array<number>} arr Array of values
 * @return {number?} Returns null if the array is empty
 */
export const median = arr => arr.length === 0 ? null : (arr[math.floor((arr.length - 1) / 2)] + arr[math.ceil((arr.length - 1) / 2)]) / 2

export const average = arr => arr.reduce(math.add, 0) / arr.length
