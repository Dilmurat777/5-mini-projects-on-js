const allCountries = document.getElementById('countries');
const btnIcon = document.getElementById('btnIcon');
const darkModeBtn = document.querySelector('.btn');
const title = document.getElementById('title')
const search = document.getElementById('search')


const loadCountries = () => {
	fetch('https://restcountries.com/v3.1/all')
		.then((res) => res.json())
		.then((data) => {
			countriesHTML = data
			displayCountries(data)
		});
};

const displayCountries = (country) => {
	const countriesHTML = country.map((country) => getCountries(country));
	allCountries.innerHTML = countriesHTML.join(' ');
};

search.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase();
	const filterData = countriesHTML.filter((country) => {
		return (
			country.name.common.toLowerCase().includes(searchString)
			
		)
	}) 
	displayCountries(filterData)
})



const getCountries = (country) => {
	console.log(country)
	return `
			<div class='country-item'>
					<img src=${country.flags.png} />

					<div class='country-details'>
						<h2>${country.name.common}</h2>
						<h5>Population: ${country.population}</h5>
						<h5>Region: ${country.region}</h5>
						<h5>Capital: ${country.capital}</h5>
					</div>
			</div>
	`;
};

function darkMode() {
	const body = document.body;
	const wasDarkMode = localStorage.getItem('darkMode') === 'true';

	localStorage.setItem('darkMode', !wasDarkMode);
	body.classList.toggle('dark-mode', !wasDarkMode);
}

darkModeBtn.addEventListener('click', function () {
	if (document.body.classList.contains('dark-mode')) {
		btnIcon.src = './assets/sun-regular.svg';
		title.innerHTML = '<h4>Light Mode</h4>'
	} else {
		btnIcon.src = './assets/moon.svg';
		title.innerHTML = '<h4>Dark Mode</h4>'
	}
	darkMode();
});


function onLoad() {
	document.body.classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true');
}

document.addEventListener('DOMContentLoaded', onLoad);

loadCountries();

