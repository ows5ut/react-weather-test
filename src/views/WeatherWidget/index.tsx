import { FunctionComponent, HTMLAttributes } from 'react';
import { Loader } from '../../components/loader';
import { useAppSelector } from '../../redux';
import { selectWeather } from '../../slices/weatherSlice';
import './WeatherWidget.css';

export const WeatherWidget: FunctionComponent<HTMLAttributes<HTMLElement>> = () => {

  const { weather, error, loading, city } = useAppSelector(selectWeather);
  return <div className="WeatherWidget">
    {city 
    ? 
    <div className="container">
        <div>
            {!loading && !error && weather.name && <p>The Weather in {weather.name}</p>}
            <div className="weather">
              {!loading ? (
                !error 
                ?
                  <>
                  <h1>{weather.main?.temp && Math.floor(weather.main?.temp)}</h1>
                  <h2>{weather.weather && weather.weather[0].main}</h2>
                  </>
                :
                  <h1>{error.message}</h1>
                )
                :
                <Loader/>
              }
            </div>
        </div>
      </div>
    : null }
  </div>
}