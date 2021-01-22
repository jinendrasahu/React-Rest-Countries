import './App.css';
import React from 'react';


function App() {

  const countryContainer = document.getElementById('countries');
  const CapitalInput = document.getElementById('capital');
  const RegionInput = document.getElementById('region');
  const NameInput = document.getElementById('name');
  const LanguageInput = document.getElementById('language');
  const DialNumInput = document.getElementById('dialnum');
  const countryDetails = document.getElementById('countryDetails');
  const back = document.getElementById('back');

  FetchCountryFromApi();



  function RenderCountries(countries) {
    countryContainer.innerHTML = '';

    countries.forEach(country => {
      const countryEl = document.createElement('div');
      countryEl.classList.add('card');

      countryEl.innerHTML = `
            <div>
                <img src="${country.flag}" alt="Germany" />
            </div>
            <div class="card-body">
                <h3 class="country-name">${country.name}</h3>
                 <p>
            <b>Dalling Code:</b>
           <span "country-dial">${country.callingCodes}</span>
           
        </p>
                <p >
                    <b>Region:</b>
                    <span "country-region">${country.region}</span>
                </p>
                 <p>
            <b>Languages:</b>
           <span "country-language">${country.languages.map(language => language.name)}</span>
            
        </p>
                <p>
                    <b>Capital:</b>
                   <span "country-capital">${country.capital}</span>
                    
                </p>
            </div>
        `;

      countryEl.addEventListener('click', () => {
        countryDetails.style.display = 'flex';
        CountryDetails(country);
      });

      countryContainer.appendChild(countryEl);
    });
  }
  async function FetchCountryFromApi() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();

    RenderCountries(countries);
  }

  function CountryDetails(country) {
    const detailOfCountry = countryDetails.querySelector('.countryDetails-body');
    const CountryFlag = countryDetails.querySelector('img');
    CountryFlag.src = country.flag;

    detailOfCountry.innerHTML = `
        <h2>${country.name}</h2>
        <p>
        <b>Population:</b>
        ${country.population}
        </p>
        <p>
        <b>Dalling Code:</b>
        ${country.callingCodes}
        </p>
        <p>
            <b>Native Name:</b>
            ${country.nativeName}
        </p>

        <p>
            <b>Region:</b>
            ${country.region}
        </p>
        <p>
            <b>SubRegion:</b>
            ${country.subregion}
            </p>
            <p>
                <b>Languages:</b>
                ${country.languages.map(language => language.name)}
            </p>
        
         <p>
            <b>Latlng:</b>
            ${country.latlng}
        </p>
        <p>
            <b>Sub Region:</b>
            ${country.subregion}
        </p>
         <p>
            <b>Area:</b>
            ${country.area}
            </p>
        <p>
            <b>Currencies:</b>
            ${country.currencies.map(currency => currency.code)}
        </p>
        <p>
            <b>Top Level Domain:</b>
            ${country.topLevelDomain[0]}
        </p>
        <p>
            <b>Capital:</b>
            ${country.capital}
            </p>
    `;
  }





  CapitalInput.addEventListener('input', e => {
    const { value } = e.target;
    const getInnerText = document.querySelectorAll('.country-capital');

    getInnerText.forEach(data => {
      if (data.innerText.toLowerCase().includes(value.toLowerCase())) {
        // .card -> .card-body -> .country-data
        data.parentElement.parentElement.style.display = 'block';
      } else {
        data.parentElement.parentElement.style.display = 'none';
      }
    });
  });

  NameInput.addEventListener('input', e => {
    const { value } = e.target;
    const getInnerText = document.querySelectorAll('.country-name');

    getInnerText.forEach(data => {
      if (data.innerText.toLowerCase().includes(value.toLowerCase())) {
        // .card -> .card-body -> .country-data
        data.parentElement.parentElement.style.display = 'block';
      } else {
        data.parentElement.parentElement.style.display = 'none';
      }
    });
  });
  LanguageInput.addEventListener('input', e => {
    const { value } = e.target;
    const getInnerText = document.querySelectorAll('.country-language');

    getInnerText.forEach(data => {
      if (data.innerText.toLowerCase().includes(value.toLowerCase())) {
        // .card -> .card-body -> .country-data
        data.parentElement.parentElement.style.display = 'block';
      } else {
        data.parentElement.parentElement.style.display = 'none';
      }
    });
  });
  DialNumInput.addEventListener('input', e => {
    const { value } = e.target;
    const getInnerText = document.querySelectorAll('.country-dial');

    getInnerText.forEach(data => {
      if (data.innerText.toLowerCase().includes(value.toLowerCase())) {
        // .card -> .card-body -> .country-data
        data.parentElement.parentElement.style.display = 'block';
      } else {
        data.parentElement.parentElement.style.display = 'none';
      }
    });
  });
  RegionInput.addEventListener('input', e => {
    const { value } = e.target;
    const getInnerText = document.querySelectorAll('.country-region');

    getInnerText.forEach(data => {
      if (data.innerText.toLowerCase().includes(value.toLowerCase())) {
        // .card -> .card-body -> .country-data
        data.parentElement.parentElement.style.display = 'block';
      } else {
        data.parentElement.parentElement.style.display = 'none';
      }
    });
  });
  back.addEventListener('click', () => {
    countryDetails.style.display = 'none';
  });


  return (<>
  </>);
}

export default App;
