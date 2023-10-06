export interface WeatherData {
	dt: number
	main: Main
	weather: Weather[]
	clouds: Clouds
	wind: Wind
	visibility: number
	pop: number
	sys: Sys
	dt_txt: Date
}

export interface CurrenWeatherData {
	coord: Coord
	weather: Weather[]
	base: string
	main: MainCurrentWeather
	visibility: number
	wind: Wind
	clouds: Clouds
	dt: number
	sys: SysCurrentWeather
	timezone: number
	id: number
	name: string
	cod: number
}

export interface Coord {
	lon: number
	lat: number
}

export interface Clouds {
	all: number
}

export interface Main {
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	pressure: number
	sea_level: number
	grnd_level: number
	humidity: number
	temp_kf: number
}

export interface MainCurrentWeather {
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	pressure: number
	humidity: number
}

export interface Sys {
	pod: string
}

export interface SysCurrentWeather {
	type: number
	id: number
	country: string
	sunrise: number
	sunset: number
}

export interface Weather {
	id: number
	main: string
	description: string
	icon: string
}

export interface Wind {
	speed: number
	deg: number
	gust: number
}
