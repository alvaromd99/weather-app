import '../styles/WeatherInfo.css'
import { CurrenWeatherData } from '../types/types'

interface WeatherInfoProps {
	data: CurrenWeatherData
}

export default function WeatherInfo({ data }: WeatherInfoProps) {
	const { weather, main, name, dt } = data

	const fecha = new Date(dt * 1000)

	const fechaFormateada = fecha.toLocaleString() // Esto dará como resultado una cadena de texto con la fecha y hora en formato local

	console.log(fechaFormateada)

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
			<div className='location'>{name}</div>
		</div>
	)
}
