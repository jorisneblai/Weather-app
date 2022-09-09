import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import './WeatherWidget.scss';

function WeatherWidget({ city, code }) {

    const [temperature, setTemperature] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const API_KEY = 'c21a75b667d6f7abb81f118dcf8d4611';
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&appid=${API_KEY}&units=metric`)
          .then((response) => {
            setTemperature(Math.round(response.data.main.temp));
            setIcon(response.data.weather[0].icon);
          });
    
      }, []);

    return (
        <div className="weather">
            <div>
                <div className="weather-city">{city}</div>
                <div className="weather-code">{code}</div>
                <div className="weather-temperature">{temperature}°</div>
            </div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon weather"/>
        </div>

    )
};

WeatherWidget.propTypes = {
    city: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
}

export default WeatherWidget;