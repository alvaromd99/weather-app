import './App.css'
import WeatherInfo from './components/WeatherInfo'
import { useWeatherData } from './hooks/useCurrentWeatherData'
import { use5DayWeatherData } from './hooks/use5DayWeatherData'
import FiveDaysWeatherInfo from './components/FiveDaysWeatherInfo'

function App() {
	const { loading, currentData, today } = useWeatherData()
	const { day2Data, day3Data, day4Data, day5Data, day6Data } =
		use5DayWeatherData(today.current)

	return (
		<div className='App'>
			{loading && <h1>Loading...</h1>}
			<div className='aside'>
				{currentData !== undefined ? <WeatherInfo data={currentData} /> : null}
			</div>
			<div className='main'>
				{currentData !== undefined ? (
					<FiveDaysWeatherInfo
						day2={day2Data}
						day3={day3Data}
						day4={day4Data}
						day5={day5Data}
						day6={day6Data}
					/>
				) : null}
			</div>
		</div>
	)
}

export default App
