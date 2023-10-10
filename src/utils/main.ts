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

const cardinalDirections = [
	{ name: 'North', min: 0, max: 45 },
	{ name: 'Northeast', min: 45, max: 135 },
	{ name: 'East', min: 135, max: 225 },
	{ name: 'Southeast', min: 225, max: 315 },
	{ name: 'South', min: 315, max: 360 },
	{ name: 'Southwest', min: 225, max: 315 },
	{ name: 'West', min: 135, max: 225 },
	{ name: 'Northwest', min: 45, max: 135 },
]

export const getFormatDate = (dateTime: number) => {
	const date = new Date(dateTime * 1000) // x1000 to convert it into miliSeconds

	const formatDate = `${daysOfWeekShort[date.getDay()]}, ${date.getDate()} ${
		shortMonths[date.getMonth()]
	}`

	return formatDate
}

function degreesToCardinal(degrees: number) {
	for (const direction of cardinalDirections) {
		if (degrees >= direction.min && degrees < direction.max) {
			return direction.name
		}
	}
	return 'Wind'
}

// Example usage:
const windDirectionDegrees = 45 // Replace with your wind direction in degrees
const cardinalDirection = degreesToCardinal(windDirectionDegrees)
console.log(`Wind is coming from the ${cardinalDirection}`)
