import '../styles/WindInfo.css'
import { Wind } from '../types/types'
import { degreesToCardinal } from '../utils/degreesToCardinal'
import compassIcon from '../assets/compass.svg'

interface WindInfoProps {
	wind: Wind
	units: 'metric' | 'imperial'
}

export default function WindInfo({ wind, units }: WindInfoProps) {
	return (
		<div className='container wind'>
			<div>Wind Status</div>
			<div className='wind-number'>
				<span>{wind.speed}</span>
				<p>{units === 'metric' ? 'm/s' : 'mph'}</p>
			</div>
			<div className='wind-direction'>
				<img src={compassIcon} alt='Wind direction' />
				<p>{degreesToCardinal(wind.deg)}</p>
			</div>
		</div>
	)
}
