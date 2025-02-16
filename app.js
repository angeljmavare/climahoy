const API_KEY = '81aa12d20154b799ff629821f6073142';

const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');


searchInput.addEventListener('input', function () {
    const inputValue = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = '';

    const filteredCities = Object.keys(cityMap).filter(city =>
        city.toLowerCase().includes(inputValue)
    );

    filteredCities.forEach(city => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = city;
        suggestionItem.addEventListener('click', function () {
            searchInput.value = city;
            suggestionsContainer.innerHTML = '';
        });
        suggestionsContainer.appendChild(suggestionItem);
    });
});

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
    const selectedCity = searchInput.value;

    if (!selectedCity) {
        alert('Por favor, ingresa o selecciona una ciudad.');
        return;
    }
    else{
        document.getElementById('searchForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const ciudadSeleccionada = document.getElementById('searchInput').value;
            const buscarCiudad = cityMap[ciudadSeleccionada];
            fetchData(buscarCiudad);
        });
        
        const fetchData = (buscarCiudad) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${buscarCiudad}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => setWeatherData(data));
        }
        
        const setWeatherData = data => {
            const kelvinToCelsius = (kelvin) => kelvin - 273.15;
        
            const weatherDescription = (description) => {
        
                switch (description) {
                    case 'clear sky':
                        return 'Cielo Despejado';
                    case 'few clouds':
                        return 'Pocas Nubes';
                    case 'scattered clouds':
                        return 'Nubes Dispersas';
                    case 'broken clouds':
                        return 'Nubes Fragmentadas';
                    case 'shower rain':
                        return 'Lluvia Ligera';
                    case 'rain':
                        return 'Lluvia';
                    case 'thunderstorm':
                        return 'Tormenta';
                    case 'snow':
                        return 'Nieve';
                    case 'mist':
                        return 'Neblina';
                    case 'haze':
                        return 'Bruma';
                    case 'fog':
                        return 'Niebla';
                    case 'overcast clouds':
                        return 'Nubes Cubiertas';
                    case 'drizzle':
                        return 'Llovizna';
                    case 'light rain':
                        return 'Lluvia Ligera';
                    case 'moderate rain':
                        return 'Lluvia Moderada';
                    case 'heavy intensity rain':
                        return 'Lluvia Intensa';
                    case 'very heavy rain':
                        return 'Lluvia Muy Intensa';
                    case 'extreme rain':
                        return 'Lluvia Extrema';
                    case 'light snow':
                        return 'Nieve Ligera';
                    case 'heavy snow':
                        return 'Nieve Intensa';
                    case 'sleet':
                        return 'Aguanieve';
                    case 'smoke':
                        return 'Humo';
                    case 'sand':
                        return 'Arena';
                    case 'dust':
                        return 'Polvo';
                    case 'tornado':
                        return 'Tornado';
                    case 'squalls':
                        return 'Chubascos Fuertes';
                    default:
                        return 'Descripción Desconocida';
                }
            }
        
            const weatherData = {
                country: countryCode(data.sys.country),
                location: data.name,
                description: weatherDescription(data.weather[0].description),
                humidity: data.main.humidity + '%',
                pressure: data.main.pressure + ' hPa',
                temperature: kelvinToCelsius(data.main.temp).toFixed(2) + ' °C',
                date: new Date().toLocaleString(),
            };
        
            Object.keys(weatherData).forEach(key => {
                document.getElementById(key).textContent = weatherData[key];
            });
        }
    }

    const apiCityFormat = cityMap[selectedCity];
    if (!apiCityFormat) {
        alert('Ciudad no encontrada en la lista.');
        return;
    }
}
);