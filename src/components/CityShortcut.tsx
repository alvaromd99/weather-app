import '../styles/CityShortcut.css'

interface CityShortcutProps {
	name: string
}

export default function CityShortcut({ name }: CityShortcutProps) {
	return <div className='container'>{name}</div>
}
