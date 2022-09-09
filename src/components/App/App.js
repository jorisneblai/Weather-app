import './App.css';

import WeatherWidget from '../Weather/WeatherWidget';

function App() {
  return (
    <div className="App">
      <WeatherWidget city="Paris" code="75001" />
      <WeatherWidget city="Savines-le-Lac" code="05160" />
      <WeatherWidget city="Bussy-Saint-Georges" code="77600" />
      <WeatherWidget city="Nîmes" code="30000" />
      <WeatherWidget city="Montpellier" code="34000" />
    </div>
  );
}

export default App;
