import '../styles/WeatherInfo.css'
import { CurrenWeatherData } from '../types/types'
import { getFormatDate } from '../utils/formatDate'
import { getIcons } from '../utils/getIcon'
import pinSvg from '../assets/pin.svg'
import locationSvg from '../assets/location.svg'

interface WeatherInfoProps {
	data: CurrenWeatherData
	handleClick: () => void
}

export default function WeatherInfo({ data, handleClick }: WeatherInfoProps) {
	const { weather, main, name, dt } = data

	return (
		<div className='city-info'>
			<div className='search-btn'>
				<button className='btn places' onClick={handleClick}>
					Search for places
				</button>
				<button className='btn icon'>
					<img src={locationSvg} alt='Location svg' />
				</button>
			</div>
			<div className='image'>
				<img
					src={`../../weather-app-master/${getIcons(weather[0].icon)}.png`}
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
