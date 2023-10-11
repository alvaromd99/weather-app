const weatherTypes = [
	{ icon: '01d', type: 'Clear' },
	{ icon: '01n', type: 'Clear' },
	{ icon: '02d', type: 'LightCloud' },
	{ icon: '02n', type: 'LightCloud' },
	{ icon: '03d', type: 'HeavyCloud' },
	{ icon: '03n', type: 'HeavyCloud' },
	{ icon: '04d', type: 'HeavyCloud' },
	{ icon: '04n', type: 'HeavyCloud' },
	{ icon: '09d', type: 'Shower' },
	{ icon: '09n', type: 'Shower' },
	{ icon: '10d', type: 'HeavyRain' },
	{ icon: '10n', type: 'HeavyRain' },
	{ icon: '11d', type: 'Thunderstorm' },
	{ icon: '11n', type: 'Thunderstorm' },
	{ icon: '13d', type: 'Snow' },
	{ icon: '13n', type: 'Snow' },
	{ icon: '50d', type: 'Mist' },
	{ icon: '50n', type: 'Mist' },
]

export const getIcons = (icon: string) => {
	for (const weatherType of weatherTypes) {
		if (weatherType.icon === icon) {
			return weatherType.type
		}
	}
}
