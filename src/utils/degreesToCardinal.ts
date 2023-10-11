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

export const degreesToCardinal = (degrees: number) => {
	for (const direction of cardinalDirections) {
		if (degrees >= direction.min && degrees < direction.max) {
			return direction.name
		}
	}
	return 'No specific direction'
}
