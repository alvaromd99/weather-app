import '../styles/SquareWeatherInfo.css'
import { WeatherData } from '../types/types'
import { getFormatDate } from '../utils/formatDate'
import { getIcons } from '../utils/getIcon'

interface SquareWeatherInfoProps {
	day: WeatherData
	index: number
}

export default function SquareWeatherInfo({
	day,
	index,
}: SquareWeatherInfoProps) {
	const formatDate = getFormatDate(day.dt)

	return (
		<div className='square'>
			<div className='date'>{index === 0 ? 'Tomorrow' : formatDate}</div>
			<div className='weather-img'>
				<img
					src={`../../weather-app-master/${getIcons(day.weather[0].icon)}.png`}
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
