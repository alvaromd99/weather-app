import '../styles/CityShortcut.css'
import arrowSvg from '../assets/arrowRight.svg'

interface CityShortcutProps {
	name: string
	updateCountry: (country: string) => void
	handleClick: () => void
}

export default function CityShortcut({
	name,
	updateCountry,
	handleClick,
}: CityShortcutProps) {
	return (
		<div
			className='shortcut-list'
			onClick={() => {
				updateCountry(name)
				handleClick()
			}}>
			<p>{name}</p>
			<img src={arrowSvg} alt='Arrow right' />
		</div>
	)
}
