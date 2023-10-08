import '../styles/WeatherInfo.css'
import { CurrenWeatherData } from '../types/types'
import { getFormatDate } from '../utils/main'

interface WeatherInfoProps {
	data: CurrenWeatherData
}

export default function WeatherInfo({ data }: WeatherInfoProps) {
	const { weather, main, name, dt } = data

	return (
		<div className='city-info'>
			<div className='image'>
				<img
					src='../../weather-app-master/LightCloud.png'
					alt='Image related to the weather'
				/>
			</div>
			<div className='temperature'>{main.temp}</div>
			<div className='weather-type'>{weather[0].main}</div>
			<div className='date-location-cont'>
				<div className='date'>{`Today · ${getFormatDate(dt)}`}</div>
				<div className='location'>{name}</div>
			</div>
		</div>
	)
}
