import '../styles/SquareWeatherInfo.css'
import { WeatherData } from '../types/types'
import { getFormatDate } from '../utils/main'

interface SquareWeatherInfoProps {
	day: WeatherData
	index: number
}

export default function SquareWeatherInfo({
	day,
	index,
}: SquareWeatherInfoProps) {
	let formatDate = ''
	if (index === 0) {
		formatDate = 'Tomorrow'
	} else {
		formatDate = getFormatDate(day.dt)
	}

	return (
		<div className='square'>
			<div className='date'>{formatDate}</div>
			<div className='weather-img'>
				<img
					src='../../weather-app-master/HeavyRain.png'
					alt='Tomorrow weather image'
				/>
			</div>
			<div className='temperatures'>
				<span className='max'>{day.main.temp_max}</span>
				<span className='min'>{day.main.temp_min}</span>
			</div>
		</div>
	)
}
