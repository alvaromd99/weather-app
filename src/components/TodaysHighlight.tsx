import { CurrenWeatherData } from '../types/types'
import '../styles/TodaysHighlight.css'
import WindInfo from './WindInfo'
import HumidityInfo from './HumidityInfo'
import VisibilityPressureInfo from './VisibilityPressureInfo'
import { VISIBILITY_UNIT as visibilityUnit } from '../constants/constants'

interface TodaysHighlightProps {
	data: CurrenWeatherData
}

export default function TodaysHighlight({ data }: TodaysHighlightProps) {
	const visibility = data.visibility
	const pressure = data.main.pressure
	const humidity = data.main.humidity

	console.log(visibilityUnit)

	return (
		<div className='highlights'>
			<h1>Today's Highlights</h1>
			<div className='content'>
				<WindInfo />
				<HumidityInfo humidity={humidity} />
				<VisibilityPressureInfo
					title={'Visibility'}
					unit={visibilityUnit}
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
