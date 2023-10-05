import { useEffect, useState } from 'react'
import './App.css'
import WeatherInfo from './components/WeatherInfo'
import { WeatherData } from './types/types'

function App() {
	const [data, setData] = useState<WeatherData[]>([])

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
				setData(responseData)
			} catch (err) {
				console.error(err)
			}
		}

		fetchData()
	}, [])

	console.log(data)

	return (
		<div className='App'>
			<WeatherInfo />
		</div>
	)
}

export default App
