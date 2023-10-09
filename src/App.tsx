import './App.css'
import WeatherInfo from './components/WeatherInfo'
import { useWeatherData } from './hooks/useCurrentWeatherData'
import { use5DayWeatherData } from './hooks/use5DayWeatherData'

function App() {
	const { loading, currentData, today } = useWeatherData()
	const { day2Data, day3Data, day4Data, day5Data, day6Data } =
		use5DayWeatherData(today.current)

	console.log(day2Data)
	console.log(day3Data)
	console.log(day4Data)
	console.log(day5Data)
	console.log(day6Data)

	return (
		<div className='App'>
			{loading && <h1>Loading...</h1>}
			{currentData !== undefined ? <WeatherInfo data={currentData} /> : null}
		</div>
	)
}

export default App
