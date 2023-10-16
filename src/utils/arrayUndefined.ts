export const isUndefinedArray = (arr: object[]) => {
	return arr.every((item) => item === undefined)
}
