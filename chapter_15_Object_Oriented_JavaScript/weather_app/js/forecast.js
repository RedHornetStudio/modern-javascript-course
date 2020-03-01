class Forecast {
    constructor() {
        this.key = '5LLFldydR4Nar6amYq0p7ZylowVu1TLj';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatheURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async getCity(city) {
        const citySearchQueryParametrs = `?apikey=${this.key}&q=${city}`;

        const citySearchResponse = await fetch(this.cityURI + citySearchQueryParametrs);
        const cities = await citySearchResponse.json();

        return cities[0];
    }
    async getWeather(locationKey) {
        const currentConditionsQueryParametrs = `${locationKey}?apikey=${this.key}`;
    
        const currentConditionsResponse = await fetch(this.weatheURI + currentConditionsQueryParametrs);
        const currentConditions = await currentConditionsResponse.json();
    
        return currentConditions[0];
    }
    async getDetails(city) {
        const cityDetails = await this.getCity(city);
    
        if(!cityDetails) {
            throw new Error('No such city');
        }
    
        const weatherDetails = await this.getWeather(cityDetails.Key);
    
        // return {
        //     cityDetails: cityDetails,
        //     weatherDetails: weatherDetails
        // };
    
        // Object Shorthand Notation
    
        return { cityDetails, weatherDetails }; 
    };
}