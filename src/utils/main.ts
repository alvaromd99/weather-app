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

export const fetchCurrentData = async (units: string) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=${units}&appid=0e6517a3cada027943a4ce280e2eacd3`
		)
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}
		const responseData = await response.json()

		return responseData
	} catch (err) {
		console.error(err)
	}
}
