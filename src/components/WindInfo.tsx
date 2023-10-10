import windIcon from '../assets/wind.svg'

export default function WindInfo() {
	return (
		<div className='container wind'>
			<div>Wind Status</div>
			<div>
				<span>50</span>
				{` m/s`}
			</div>
			<div>
				<img src={windIcon} alt='wind' style={{ display: 'inline' }} />
				<p>South</p>
			</div>
		</div>
	)
}
