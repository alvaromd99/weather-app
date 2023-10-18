import { CurrenWeatherData } from '../types/types'
import '../styles/TodaysHighlight.css'
import WindInfo from './WindInfo'
import HumidityInfo from './HumidityInfo'
import VisibilityPressureInfo from './VisibilityPressureInfo'

interface TodaysHighlightProps {
	data: CurrenWeatherData
	units: 'metric' | 'imperial'
}

export default function TodaysHighlight({ data, units }: TodaysHighlightProps) {
	const visibility = data.visibility
	const pressure = data.main.pressure
	const humidity = data.main.humidity
	const windInfo = data.wind

	return (
		<div className='highlights'>
			<h1>Today's Highlights</h1>
			<div className='content'>
				<WindInfo wind={windInfo} units={units} />
				<HumidityInfo humidity={humidity} />
				<VisibilityPressureInfo
					title={'Visibility'}
					units={units}
					className={'visibility'}
					number={visibility}
				/>
				<VisibilityPressureInfo
					title={'Air pressure'}
					className={'pressure'}
					number={pressure}
				/>
			</div>
		</div>
	)
}
