import '../styles/FiveDaysWeatherInfo.css'
import { WeatherData } from '../types/types'
import SquareWeatherInfo from './SquareWeatherInfo'

interface FiveDaysWeatherInfoProps {
	weatherArray: WeatherData[]
}

export default function FiveDaysWeatherInfo({
	weatherArray,
}: FiveDaysWeatherInfoProps) {
	return (
		<div className='five-days-cont'>
			{weatherArray.map((day, index) => (
				<SquareWeatherInfo key={index} index={index} day={day} />
			))}
		</div>
	)
}
