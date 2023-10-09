import { useEffect, useState, useRef } from 'react'
import { CurrenWeatherData } from '../types/types'

export function useWeatherData() {
	const [loading, setLoading] = useState(true)
	const [currentData, setCurrentData] = useState<CurrenWeatherData>()

	const today = useRef<number>()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&appid=0e6517a3cada027943a4ce280e2eacd3'
				)
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}
				const responseData = await response.json()

				console.log('ResponseData')
				console.log(responseData)

				const todayDate = new Date(responseData.dt * 1000).getDate()
				today.current = todayDate

				setCurrentData(responseData)
				setLoading(false)
			} catch (err) {
				console.error(err)
			}
		}

		fetchData()
	}, [])

	return { loading, currentData, today }
}
