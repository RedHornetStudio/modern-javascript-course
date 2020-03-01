const cityName = document.querySelector('.details h5');
const weatherCondition = document.querySelector('.details div');
const temp = document.querySelector('.details span');
const changeLocation = document.querySelector('.change-location');
const card = document.querySelector('.card');
const noSuchCity = document.querySelector('.no-such-city');
const time = document.querySelector('.card img');
const icon = document.querySelector('.icon img');

const forecast = new Forecast();

const updateUI = details => {
    changeLocation.reset();

    const cityDetails = details.cityDetails;
    const weatherDetails = details.weatherDetails;

    cityName.textContent = cityDetails.LocalizedName;
    weatherCondition.textContent = weatherDetails.WeatherText;
    temp.textContent = weatherDetails.Temperature.Metric.Value;

    iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    
    // Ternary Operator
    let timeSrc = weatherDetails.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    // if(weatherDetails.IsDayTime === true) {
    //     timeSrc = 'img/day.svg';
    // } else {
    //     timeSrc = 'img/night.svg';
    // }
    
    time.setAttribute('src', timeSrc);

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
    if(!noSuchCity.classList.contains('d-none')) {
        noSuchCity.classList.add('d-none');
    }
};

changeLocation.addEventListener('submit', e => {
    e.preventDefault();

    const city = e.target.city.value.trim();

    forecast.getDetails(city).then(details => {
        updateUI(details);

        // store location in local storage
        localStorage.setItem('city', city);
    }).catch(err => {
        if(!card.classList.contains('d-none')) {
            card.classList.add('d-none');
        }

        if(err.message === "No such city" && city !== '') {
            if(noSuchCity.classList.contains('d-none')) {
                noSuchCity.classList.remove('d-none');
            }
        } else if (city === '') {
            if(!noSuchCity.classList.contains('d-none')) {
                noSuchCity.classList.add('d-none');
            }
        } else {
            console.log(err);
        }
    });

});

// get data from local storage
const savedCity = localStorage.getItem('city');
if(savedCity) {
    forecast.getDetails(savedCity).then(details => {
        updateUI(details);
    }).catch(err => {
        if(!card.classList.contains('d-none')) {
            card.classList.add('d-none');
        }

        if(err.message === "No such city" && city !== '') {
            if(noSuchCity.classList.contains('d-none')) {
                noSuchCity.classList.remove('d-none');
            }
        } else if (city === '') {
            if(!noSuchCity.classList.contains('d-none')) {
                noSuchCity.classList.add('d-none');
            }
        } else {
            console.log(err);
        }
    });
}