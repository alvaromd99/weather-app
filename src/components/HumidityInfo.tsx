import '../styles/HumidityInfo.css'

interface HumidityInfoProps {
	humidity: number
}

export default function HumidityInfo({ humidity }: HumidityInfoProps) {
	console.log(humidity)

	return (
		<div className='container humidity'>
			<div>Humidity</div>
			<div className='humidity-number'>
				<span>54</span>
				{' %'}
			</div>
			<div>
				<div className='bar-numbers'>
					<p>0</p>
					<p>50</p>
					<p>100</p>
				</div>
				<div className='bar'>
					<div className='progress' style={{ width: `${humidity}%` }}></div>
				</div>
			</div>
		</div>
	)
}
