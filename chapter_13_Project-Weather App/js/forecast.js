// const aPIKey = '5LLFldydR4Nar6amYq0p7ZylowVu1TLj';

// const getWeather = async (city) => {

//     const citySearchResourceURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const citySearchQueryParametrs = `?apikey=${aPIKey}&q=${city}`;

//     const citySearchResponse = await fetch(citySearchResourceURL + citySearchQueryParametrs);
//     const cities = await citySearchResponse.json();
    
//     const locationKey = cities[0].Key;

//     const currentConditionsResourceURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const currentConditionsQueryParametrs = `${locationKey}?apikey=${aPIKey}`;

//     const currentConditionsResponse = await fetch(currentConditionsResourceURL + currentConditionsQueryParametrs);
//     const currentConditions = await currentConditionsResponse.json();

//     return currentConditions[0];

// };

// getCity('riga').then(city => {
//     return getWeather(city.Key);
// }).then(currentCondition =>{
//     console.log(currentCondition);
// }).catch(err => {
//     console.log(err);
// });

/////////////////////////////////////////////////////////////////

const aPIKey = '5LLFldydR4Nar6amYq0p7ZylowVu1TLj';

const getWeather = async (locationKey) => {

    const currentConditionsResourceURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const currentConditionsQueryParametrs = `${locationKey}?apikey=${aPIKey}`;

    const currentConditionsResponse = await fetch(currentConditionsResourceURL + currentConditionsQueryParametrs);
    const currentConditions = await currentConditionsResponse.json();

    return currentConditions[0];

};

const getCity = async (city) => {

    const citySearchResourceURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const citySearchQueryParametrs = `?apikey=${aPIKey}&q=${city}`;

    const citySearchResponse = await fetch(citySearchResourceURL + citySearchQueryParametrs);
    const cities = await citySearchResponse.json();

    return cities[0];

};

// const cityName = document.querySelector('.details h5');
// const weatherCondition = document.querySelector('.details div');
// const temp = document.querySelector('.details span');
// const changeLocation = document.querySelector('.change-location');

// changeLocation.addEventListener('submit', e => {
//     e.preventDefault();
//     getCity(e.target.city.value.trim()).then(city => {
//         if(city) {
//             console.log(city);
//             cityName.textContent = city.LocalizedName;
//             return getWeather(city.Key);
//         } else {
//             console.log('No such city');
//             cityName.textContent = 'City name';
//         }
//     }).then(currentCondition => {
//         if(currentCondition) {
//             weatherCondition.textContent = currentCondition.WeatherText;
//             temp.textContent = currentCondition.Temperature.Metric.Value;
//         } else {
//             weatherCondition.textContent = 'Weather condition';
//         }
//     }).catch(err => {
//         console.log(err);
//         if(err.message === "Cannot read property 'Key' of undefined") {
//             console.log('No such city');
//         }
//     });
// });