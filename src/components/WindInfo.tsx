import windIcon from '../assets/wind.svg'
import { Wind } from '../types/types'
import '../styles/WindInfo.css'

interface WindInfoProps {
	wind: Wind
}

export default function WindInfo({ wind }: WindInfoProps) {
	return (
		<div className='container wind'>
			<div>Wind Status</div>
			<div className='wind-number'>
				<span>{wind.speed}</span>
				<p>m/s</p>
			</div>
			<div className='wind-direction'>
				<img src={windIcon} alt='wind' />
				<p>South</p>
			</div>
		</div>
	)
}
