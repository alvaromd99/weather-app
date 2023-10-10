import '../styles/VisibilityPressureInfo.css'

interface VisibilityPressureInfoProps {
	title: string
	unit: string
	className: string
	number: number
}

export default function VisibilityPressureInfo({
	title,
	unit,
	className,
	number,
}: VisibilityPressureInfoProps) {
	return (
		<div className={`container ${className}`}>
			<div>{title}</div>
			<div className='numbers'>
				<span>{number}</span>
				<p>{unit}</p>
			</div>
		</div>
	)
}
