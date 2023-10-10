import '../styles/SquareWeatherInfo.css'
import { WeatherData } from '../types/types'
import { getFormatDate } from '../utils/main'

interface SquareWeatherInfoProps {
	day: WeatherData
}

export default function SquareWeatherInfo({ day }: SquareWeatherInfoProps) {
	const formatDate = getFormatDate(day.dt)
	console.log(formatDate)

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
