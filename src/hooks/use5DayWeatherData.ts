import { useEffect, useState } from 'react'
import { WeatherData } from '../types/types'

export function use5DayWeatherData(today: number | undefined, country: string) {
	const [day2Data, setDay2Data] = useState<WeatherData[]>([])
	const [day3Data, setDay3Data] = useState<WeatherData[]>([])
	const [day4Data, setDay4Data] = useState<WeatherData[]>([])
	const [day5Data, setDay5Data] = useState<WeatherData[]>([])
	const [day6Data, setDay6Data] = useState<WeatherData[]>([])

	useEffect(() => {
		const fetch5DaysData = async () => {
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?q=${country}&units=metric&appid=0e6517a3cada027943a4ce280e2eacd3`
				)
				if (!response.ok) {
					throw new Error(`Http error! Status: ${response.status}`)
				}
				const responseData = await response.json()

				responseData.list.map((item: WeatherData) => {
					const itemDate = new Date(item.dt * 1000).getDate()
					if (today) {
						if (itemDate === today + 1) {
							setDay2Data((prevState) => {
								return [...prevState, item]
							})
						}
						if (itemDate === today + 2) {
							setDay3Data((prevState) => {
								return [...prevState, item]
							})
						}
						if (itemDate === today + 3) {
							setDay4Data((prevState) => {
								return [...prevState, item]
							})
						}
						if (itemDate === today + 4) {
							setDay5Data((prevState) => {
								return [...prevState, item]
							})
						}
						if (itemDate === today + 5) {
							setDay6Data((prevState) => {
								return [...prevState, item]
							})
						}
					}
				})
			} catch (err) {
				console.log(err)
			}
		}

		fetch5DaysData()
	}, [today, country])

	return { day2Data, day3Data, day4Data, day5Data, day6Data }
}
