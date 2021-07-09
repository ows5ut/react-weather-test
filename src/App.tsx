import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { CityInput } from './views/CityInput';
import { WeatherWidget } from './views/WeatherWidget';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <CityInput/>
        <WeatherWidget/>
      </MainLayout>
    </div>
  );
}

export default App;
