import '../styles/FiveDaysWeatherInfo.css'
import { WeatherData } from '../types/types'
import SquareWeatherInfo from './SquareWeatherInfo'

interface FiveDaysWeatherInfoProps {
	day2: WeatherData[]
	day3: WeatherData[]
	day4: WeatherData[]
	day5: WeatherData[]
	day6: WeatherData[]
	today: number | undefined
}

export default function FiveDaysWeatherInfo({
	day2,
	day3,
	day4,
	day5,
	day6,
}: FiveDaysWeatherInfoProps) {
	const weatherArray = [day2[4], day3[4], day4[4], day5[4], day6[4]]

	function isNotUndefinedArray(arr: object[]) {
		return arr.every((item) => item !== undefined)
	}

	return (
		<div className='five-days-cont'>
			{isNotUndefinedArray(weatherArray) !== undefined &&
				weatherArray.map((day, index) => (
					<SquareWeatherInfo key={index} day={day} />
				))}
		</div>
	)
}
