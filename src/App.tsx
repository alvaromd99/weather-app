import './App.css'
import WeatherInfo from './components/WeatherInfo'
import { useWeatherData } from './hooks/useCurrentWeatherData'
import { use5DayWeatherData } from './hooks/use5DayWeatherData'
import FiveDaysWeatherInfo from './components/FiveDaysWeatherInfo'
import TodaysHighlight from './components/TodaysHighlight'
import { useState } from 'react'

// TODO Make the app work

function App() {
	const { loading, currentData, today } = useWeatherData()
	const { day2Data, day3Data, day4Data, day5Data, day6Data } =
		use5DayWeatherData(today.current)
	const [isSearchActive, setIsSearchActive] = useState(false)

	const toggleActive = () => {
		setIsSearchActive(!isSearchActive)
	}
	return (
		<div className='App'>
			{loading && <h1>Loading...</h1>}
			<div className='aside'>
				{currentData !== undefined && (
					<WeatherInfo data={currentData} handleClick={toggleActive} />
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
