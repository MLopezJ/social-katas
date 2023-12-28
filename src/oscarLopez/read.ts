import { readFile } from 'node:fs/promises'
import path from 'node:path'

/**
 * Get tokens from calibrationDocument.txt
 */
export const read = async (file: string) => {
	const baseDir = process.cwd()
	const subDir = (...tree: string[]): string => path.join(baseDir, ...tree)
	return readFile(subDir('src/oscarLopez', file), 'utf-8').then((result) => {
		result.toString().split('\n').map(x => console.log(x.length))
		return result.toString().split('\n')
	})
}