import { ChangeEvent, useState } from 'react'
import '../styles/SearchCountry.css'

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
		console.log(e.currentTarget.value)
	}

	return (
		<div className='search-container'>
			<button className='exit-btn' onClick={handleClick}>
				Go back
			</button>
			<input
				name='search-input'
				className='search-input'
				type='text'
				value={inputValue}
				onChange={handleChange}
			/>
			<button className='search-btn' onClick={() => updateCountry(inputValue)}>
				Search
			</button>
		</div>
	)
}
