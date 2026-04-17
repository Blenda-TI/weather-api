import Link from 'next/link';

interface WeatherCardProps {
  dadosClima: any; 
  mostrarDetalhesExtras?: boolean; 
}

export default function WeatherCard({ dadosClima, mostrarDetalhesExtras = false }: WeatherCardProps) {
  if (!dadosClima) return null;

  const urlDoIcone = `https://openweathermap.org/img/wn/${dadosClima.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{dadosClima.name}</h2>
      <img src={urlDoIcone} alt="Ícone do tempo" />
      
      <p><strong>Temperatura:</strong> {dadosClima.main.temp}°C</p>
      <p><strong>Sensação:</strong> {dadosClima.main.feels_like}°C</p>
      <p className="description">{dadosClima.weather[0].description}</p>

      {mostrarDetalhesExtras && (
        <div className="details-extra">
          <p><strong>Umidade:</strong> {dadosClima.main.humidity}%</p>
          <p><strong>Vento:</strong> {dadosClima.wind.speed} m/s</p>
          <p><strong>País:</strong> {dadosClima.sys.country}</p>
        </div>
      )}

      {!mostrarDetalhesExtras && (
        <Link href={`/cidade/${dadosClima.name}`} className="btn-link">
          Ver detalhes completos
        </Link>
      )}
    </div>
  );
}