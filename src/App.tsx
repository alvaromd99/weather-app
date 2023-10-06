import './App.css'
import { useEffect, useState } from 'react'
import { CurrenWeatherData } from './types/types'
import WeatherInfo from './components/WeatherInfo'

function App() {
	const [currentData, setCurrentData] = useState<CurrenWeatherData>()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=0e6517a3cada027943a4ce280e2eacd3'
				)
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}
				const responseData = await response.json()
				setCurrentData(responseData)
			} catch (err) {
				console.error(err)
			}
		}

		fetchData()
	}, [])

	console.log(currentData)

	return (
		<div className='App'>
			<WeatherInfo />
		</div>
	)
}

export default App
