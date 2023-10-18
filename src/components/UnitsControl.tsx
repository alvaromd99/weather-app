import '../styles/UnitsControl.css'

interface UnitsControlProps {
	temperature: 'metric' | 'imperial'
	handleClick: () => void
}

export default function UnitsControl({
	temperature,
	handleClick,
}: UnitsControlProps) {
	return (
		<div className='degrees-cont'>
			<button
				className={`degrees ${temperature == 'metric' ? 'active' : ''}`}
				onClick={handleClick}>
				ºC
			</button>
			<button
				className={`degrees ${temperature == 'metric' ? '' : 'active'}`}
				onClick={handleClick}>
				ºF
			</button>
		</div>
	)
}
