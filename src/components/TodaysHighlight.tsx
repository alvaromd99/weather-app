import { CurrenWeatherData } from '../types/types'
import '../styles/TodaysHighlight.css'

interface TodaysHighlightProps {
	data: CurrenWeatherData
}

export default function TodaysHighlight({ data }: TodaysHighlightProps) {
	return (
		<div className='highlights'>
			<h1>Today's Highlights</h1>
			<div className='content'>
				<div className='container wind'></div>
				<div className='container humidity'></div>
				<div className='container visibility'></div>
				<div className='container pressure'></div>
			</div>
		</div>
	)
}
