import './App.css'
import { useState } from 'react'
import { useWeatherData } from './hooks/useCurrentWeatherData'
import { use5DayWeatherData } from './hooks/use5DayWeatherData'
import WeatherInfo from './components/WeatherInfo'
import FiveDaysWeatherInfo from './components/FiveDaysWeatherInfo'
import TodaysHighlight from './components/TodaysHighlight'
import SearchCountry from './components/SearchCountry'

// TODO Look the 5 days weather fetch and more (no 5 return, just the arr)

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
