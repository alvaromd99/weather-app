import '../styles/WeatherInfo.css'
import { CurrenWeatherData } from '../types/types'
import { getFormatDate } from '../utils/main'
import pinSvg from '../assets/pin.svg'

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
			<div className='temperature'>
				<span className='temp-number'>{Math.round(main.temp)}</span>
				<span className='temp-unit'> ºC</span>
			</div>
			<div className='weather-type'>{weather[0].main}</div>
			<div className='date-location-cont'>
				<div className='date'>{`Today  ·  ${getFormatDate(dt)}`}</div>
				<div className='location'>
					<img src={pinSvg} alt='Pin on the map svg' />
					<p>{name}</p>
				</div>
			</div>
		</div>
	)
}
