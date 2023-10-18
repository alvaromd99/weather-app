import '../styles/VisibilityPressureInfo.css'

interface VisibilityPressureInfoProps {
	title: string
	className: string
	number: number
	units?: 'metric' | 'imperial'
}

export default function VisibilityPressureInfo({
	title,
	className,
	number,
	units,
}: VisibilityPressureInfoProps) {
	return (
		<div className={`container ${className}`}>
			<div>{title}</div>
			<div className='numbers'>
				<span>{number}</span>
				<p>
					{className === 'pressure'
						? 'mb'
						: units === 'metric'
						? 'metres'
						: 'miles'}
				</p>
			</div>
		</div>
	)
}
