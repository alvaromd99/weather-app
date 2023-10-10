import { CurrenWeatherData } from '../types/types'
import '../styles/TodaysHighlight.css'
import WindInfo from './WindInfo'
import HumidityInfo from './HumidityInfo'
import VisibilityPressureInfo from './VisibilityPressureInfo'

interface TodaysHighlightProps {
	data: CurrenWeatherData
}

export default function TodaysHighlight({ data }: TodaysHighlightProps) {
	const windSpeed = data.wind.speed
	const visibility = data.visibility
	const humidity = data.main.humidity
	const pressure = data.main.pressure

	return (
		<div className='highlights'>
			<h1>Today's Highlights</h1>
			<div className='content'>
				<WindInfo />
				<HumidityInfo />
				<VisibilityPressureInfo
					title={'Visibility'}
					unit={'metres'}
					className={'visibility'}
					number={visibility}
				/>
				<VisibilityPressureInfo
					title={'Air pressure'}
					unit={'mb'}
					className={'pressure'}
					number={pressure}
				/>
			</div>
		</div>
	)
}
