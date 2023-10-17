import { ChangeEvent, useState } from 'react'
import '../styles/SearchCountry.css'
import exitSvg from '../assets/exit.svg'
import loupeSvg from '../assets/loupe.svg'

interface SearchCountryProps {
	updateCountry: (country: string) => void
	handleClick: () => void
}

export default function SearchCountry({
	updateCountry,
	handleClick,
}: SearchCountryProps) {
	const [inputValue, setInputValue] = useState('')
	const citiesArr = ['London', 'Barcelona', 'Long Beach']

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}

	return (
		<div className='search-container'>
			<button className='exit-btn' onClick={handleClick}>
				<img src={exitSvg} alt='exit btn' />
			</button>
			<div className='form-container'>
				<div className='text-search'>
					<img src={loupeSvg} alt='Loupe' />
					<input
						name='search-input'
						className='search-input'
						type='text'
						value={inputValue}
						onChange={handleChange}
						autoComplete='off'
						placeholder='Search city'
					/>
				</div>
				<button
					className='search-btn'
					onClick={() => {
						updateCountry(inputValue)
						handleClick()
					}}>
					Search
				</button>
			</div>
			<div className='shortcuts-container'></div>
		</div>
	)
}
