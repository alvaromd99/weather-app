import './App.css'
import { useState } from 'react'
import { useWeatherData } from './hooks/useCurrentWeatherData'
import { use5DayWeatherData } from './hooks/use5DayWeatherData'
import WeatherInfo from './components/WeatherInfo'
import FiveDaysWeatherInfo from './components/FiveDaysWeatherInfo'
import TodaysHighlight from './components/TodaysHighlight'
import SearchCountry from './components/SearchCountry'
import UnitsControl from './components/UnitsControl'

function App() {
	const [country, setCountry] = useState('Helsinki')
	const [isSearchActive, setIsSearchActive] = useState(false)
	const [temperature, setTemperature] = useState<'metric' | 'imperial'>(
		'metric'
	)
	const { loading, currentData, today } = useWeatherData({
		country,
		temperature,
	})
	const { weatherArray } = use5DayWeatherData(
		today.current,
		country,
		temperature
	)

	const toggleActive = () => {
		setIsSearchActive(!isSearchActive)
	}

	const updateCountry = (country: string) => {
		setCountry(country)
	}

	const handleTempChange = () => {
		temperature === 'metric'
			? setTemperature('imperial')
			: setTemperature('metric')
	}

	return (
		<div className='App'>
			{loading && <h1>Loading...</h1>}
			<div className='aside'>
				{currentData && !isSearchActive && (
					<WeatherInfo
						data={currentData}
						handleClick={toggleActive}
						units={temperature}
					/>
				)}
				{isSearchActive && (
					<SearchCountry
						updateCountry={updateCountry}
						handleClick={toggleActive}
					/>
				)}
			</div>
			<div className='main'>
				<UnitsControl
					temperature={temperature}
					handleClick={handleTempChange}
				/>
				<FiveDaysWeatherInfo weatherArray={weatherArray} />
				{currentData && (
					<TodaysHighlight data={currentData} units={temperature} />
				)}
			</div>
		</div>
	)
}

export default App
