import '../styles/WindInfo.css'
import { Wind } from '../types/types'
import { WIND_SPEED_UNIT as windUnit } from '../constants/constants'
import { degreesToCardinal } from '../utils/degreesToCardinal'
import compassIcon from '../assets/compass.svg'

interface WindInfoProps {
	wind: Wind
}

export default function WindInfo({ wind }: WindInfoProps) {
	return (
		<div className='container wind'>
			<div>Wind Status</div>
			<div className='wind-number'>
				<span>{wind.speed}</span>
				<p>{windUnit}</p>
			</div>
			<div className='wind-direction'>
				<img src={compassIcon} alt='Wind direction' />
				<p>{degreesToCardinal(wind.deg)}</p>
			</div>
		</div>
	)
}
