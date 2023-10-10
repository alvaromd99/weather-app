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
			<div>
				<span>{number}</span>
				{`  ${unit}`}
			</div>
		</div>
	)
}
