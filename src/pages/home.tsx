import React from 'react';

import {
  useCitySearch,
  useWeather,
} from '../hooks/useWeather';

import WeatherCard from '../components/common/WeatherCard';

const Home: React.FC = () => {
  // Busca de cidades
  const {
    query,
    setQuery,
    suggestions,
    isSearching,
    error,
  } = useCitySearch();

  // Dados do clima
  const {
    weather,
    city,
    loadWeather,
    isLoading,
  } = useWeather();

  return (
    <div style={{ padding: '20px' }}>
      <h1>🌦️ Clima Click</h1>

      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Digite o nome da cidade..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '20px',
        }}
      />

      {/* Loading da busca */}
      {isSearching && (
        <p>Buscando cidades...</p>
      )}

      {/* Erro */}
      {error && (
        <p
          style={{
            color: 'red',
            fontWeight: 'bold',
          }}
        >
          Cidade não encontrada.
          Tente novamente!
        </p>
      )}

      {/* Sugestões */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
        }}
      >
        {suggestions.map((cidade) => (
          <li
            key={cidade.id}
            onClick={() =>
              loadWeather(cidade)
            }
            style={{
              cursor: 'pointer',
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            {cidade.name},
            {' '}
            {cidade.admin1}
            {' - '}
            {cidade.country}
          </li>
        ))}
      </ul>

      {/* Loading do clima */}
      {isLoading && (
        <p>Carregando clima...</p>
      )}

      {/* Weather Card */}
      {weather && city && (
        <div style={{ marginTop: '30px' }}>
          <WeatherCard
            city={city.name}
            temperature={Math.round(
              weather.current.temperature_2m
            )}
            condition="Clima atual"
          />
        </div>
      )}
    </div>
  );
};

export default Home;