import { ChangeEvent, FunctionComponent, HTMLAttributes, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { selectWeather, setCity } from '../../slices/weatherSlice';
import './CityInput.css';
import { getWeather } from './CityInput.thunk';

export const CityInput: FunctionComponent<HTMLAttributes<HTMLElement>> = () => {

  const selectedCity = useAppSelector(selectWeather).city;
  const dispatch = useAppDispatch();

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(event.target.value))
  }

  useEffect(() => {
    if (selectedCity) {
      dispatch(getWeather(selectedCity))
    }
  }, [dispatch, selectedCity])
  return <div className="CityInput">
    <h3>Enter city name:</h3>
    <input
      onChange = {handleCityChange}
      value = {selectedCity}
    />
  </div>
}