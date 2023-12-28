import { readFile } from 'node:fs/promises'
import path from 'node:path'

/**
 * read file and transform string to number or undefined depending of the case
 */
export const read = async (file: string): Promise<(number | undefined)[]> => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/oscarLopez', file), 'utf-8').then((result) => {
		const data = result.toString().split('\n').map(x => {
			if (x.length > 0) return Number(x)
			return undefined
		})
		return data
	})
}