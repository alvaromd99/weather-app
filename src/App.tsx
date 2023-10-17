import './App.css'
import { useState } from 'react'
import { useWeatherData } from './hooks/useCurrentWeatherData'
import { use5DayWeatherData } from './hooks/use5DayWeatherData'
import WeatherInfo from './components/WeatherInfo'
import FiveDaysWeatherInfo from './components/FiveDaysWeatherInfo'
import TodaysHighlight from './components/TodaysHighlight'
import SearchCountry from './components/SearchCountry'

function App() {
	const [country, setCountry] = useState('Helsinki')
	const [isSearchActive, setIsSearchActive] = useState(true)
	const [temperature, setTemperature] = useState('Celsius')
	const { loading, currentData, today } = useWeatherData(country)
	const { weatherArray } = use5DayWeatherData(today.current, country)

	const toggleActive = () => {
		setIsSearchActive(!isSearchActive)
	}

	const updateCountry = (country: string) => {
		setCountry(country)
	}

	const handleTempChange = () => {
		setTemperature('Celsius')
	}

	return (
		<div className='App'>
			{loading && <h1>Loading...</h1>}
			<div className='aside'>
				{currentData !== undefined && !isSearchActive && (
					<WeatherInfo data={currentData} handleClick={toggleActive} />
				)}
				{isSearchActive && (
					<SearchCountry
						updateCountry={updateCountry}
						handleClick={toggleActive}
					/>
				)}
			</div>
			<div className='main'>
				<div className='degrees-cont'>
					<button className='degrees' onClick={handleTempChange}>
						ºC
					</button>
					<button className='degrees'>ºF</button>
				</div>
				<FiveDaysWeatherInfo weatherArray={weatherArray} />

				{currentData !== undefined && <TodaysHighlight data={currentData} />}
			</div>
		</div>
	)
}

export default App
