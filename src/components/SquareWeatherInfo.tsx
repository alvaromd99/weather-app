import '../styles/SquareWeatherInfo.css'
import { WeatherData } from '../types/types'

interface SquareWeatherInfoProps {
	day: WeatherData
}

export default function SquareWeatherInfo({ day }: SquareWeatherInfoProps) {
	return <div>{day.dt}</div>
}
