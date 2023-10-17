// TODO Check if its deletable

export const isUndefinedArray = (arr: object[]) => {
	return arr.every((item) => item === undefined)
}
