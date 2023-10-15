import '../styles/SearchCountry.css'

export default function SearchCountry() {
	return (
		<div className='search-container'>
			<form onSubmit={() => console.log('hello')}>
				<input type='text' />
				<input type='submit' />
			</form>
		</div>
	)
}
