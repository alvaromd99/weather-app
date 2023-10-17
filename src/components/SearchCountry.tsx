import { ChangeEvent, useState } from 'react'
import '../styles/SearchCountry.css'
import exitSvg from '../assets/exit.svg'

interface SearchCountryProps {
	updateCountry: (country: string) => void
	handleClick: () => void
}

export default function SearchCountry({
	updateCountry,
	handleClick,
}: SearchCountryProps) {
	const [inputValue, setInputValue] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}

	return (
		<div className='search-container'>
			<button className='exit-btn' onClick={handleClick}>
				<img src={exitSvg} alt='exit btn' />
			</button>
			<input
				name='search-input'
				className='search-input'
				type='text'
				value={inputValue}
				onChange={handleChange}
			/>
			<button
				className='search-btn'
				onClick={() => {
					updateCountry(inputValue)
					handleClick()
				}}>
				Search
			</button>
		</div>
	)
}
