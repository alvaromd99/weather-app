import './App.css'
import WeatherInfo from './components/WeatherInfo'
import { useWeatherData } from './hooks/useCurrentWeatherData'
import { use5DayWeatherData } from './hooks/use5DayWeatherData'
import FiveDaysWeatherInfo from './components/FiveDaysWeatherInfo'
import TodaysHighlight from './components/TodaysHighlight'
import { useState } from 'react'
import SearchCountry from './components/SearchCountry'

// TODO Make the app work

function App() {
	const [country, setCountry] = useState('Helsinki')
	const [isSearchActive, setIsSearchActive] = useState(false)
	const { loading, currentData, today } = useWeatherData(country)
	const { day2Data, day3Data, day4Data, day5Data, day6Data } =
		use5DayWeatherData(today.current, country)

	const toggleActive = () => {
		setIsSearchActive(!isSearchActive)
	}

	const updateCountry = (country: string) => {
		setCountry(country)
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
				{currentData !== undefined && (
					<FiveDaysWeatherInfo
						day2={day2Data}
						day3={day3Data}
						day4={day4Data}
						day5={day5Data}
						day6={day6Data}
					/>
				)}
				{currentData !== undefined && <TodaysHighlight data={currentData} />}
			</div>
		</div>
	)
}

export default App
