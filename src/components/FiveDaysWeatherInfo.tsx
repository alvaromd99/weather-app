import '../styles/FiveDaysWeatherInfo.css'
import { WeatherData } from '../types/types'
import SquareWeatherInfo from './SquareWeatherInfo'

interface FiveDaysWeatherInfoProps {
	day2: WeatherData[]
	day3: WeatherData[]
	day4: WeatherData[]
	day5: WeatherData[]
	day6: WeatherData[]
}

export default function FiveDaysWeatherInfo({
	day2,
	day3,
	day4,
	day5,
	day6,
}: FiveDaysWeatherInfoProps) {
	const weatherArray = [
		day2[4],
		day3[4],
		day4[4],
		day5[4],
		day6[4] !== undefined ? day6[4] : day6[2],
	]

	function isUndefinedArray(arr: object[]) {
		return arr.every((item) => item === undefined)
	}

	console.log(weatherArray)

	console.log(isUndefinedArray(weatherArray))

	return (
		<div className='five-days-cont'>
			{!isUndefinedArray(weatherArray) &&
				weatherArray.map((day, index) => (
					<SquareWeatherInfo key={index} index={index} day={day} />
				))}
		</div>
	)
}
