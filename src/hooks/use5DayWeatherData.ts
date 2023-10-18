import { useEffect, useState } from 'react'
import { WeatherData } from '../types/types'

export function use5DayWeatherData(
	today: number | undefined,
	country: string,
	temperature: 'metric' | 'imperial'
) {
	const [day2Data, setDay2Data] = useState<WeatherData[]>([])
	const [day3Data, setDay3Data] = useState<WeatherData[]>([])
	const [day4Data, setDay4Data] = useState<WeatherData[]>([])
	const [day5Data, setDay5Data] = useState<WeatherData[]>([])
	const [day6Data, setDay6Data] = useState<WeatherData[]>([])

	useEffect(() => {
		// Reset the weather data
		setDay2Data([])
		setDay3Data([])
		setDay4Data([])
		setDay5Data([])
		setDay6Data([])

		const fetch5DaysData = async () => {
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?q=${country}&units=${temperature}&appid=0e6517a3cada027943a4ce280e2eacd3`
				)
				if (!response.ok) {
					throw new Error(`Http error! Status: ${response.status}`)
				}
				const responseData = await response.json()

				responseData.list.map((item: WeatherData) => {
					const itemDate = new Date(item.dt * 1000).getDate()
					if (today) {
						switch (itemDate - today) {
							case 1:
								setDay2Data((prevState) => [...prevState, item])
								break
							case 2:
								setDay3Data((prevState) => [...prevState, item])
								break
							case 3:
								setDay4Data((prevState) => [...prevState, item])
								break
							case 4:
								setDay5Data((prevState) => [...prevState, item])
								break
							case 5:
								setDay6Data((prevState) => [...prevState, item])
								break
							default:
								break
						}
					}
				})
			} catch (err) {
				console.log(err)
			}
		}

		fetch5DaysData()
	}, [today, country, temperature])

	const weatherArray = [
		day2Data[4],
		day3Data[4],
		day4Data[4],
		day5Data[4],
		day6Data[4] !== undefined ? day6Data[4] : day6Data[day6Data.length - 1],
	]

	return { weatherArray }
}
