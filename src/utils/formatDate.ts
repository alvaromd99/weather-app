const daysOfWeekShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const shortMonths = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

export const getFormatDate = (dateTime: number) => {
	const date = new Date(dateTime * 1000) // x1000 to convert it into miliSeconds

	const formatDate = `${daysOfWeekShort[date.getDay()]}, ${date.getDate()} ${
		shortMonths[date.getMonth()]
	}`

	return formatDate
}
