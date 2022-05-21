import '../styles/Info.css'

export function ShowInfo({ weather }) {
  return (
    <div className='main-container'>
      <div className='name'>{weather?.location.name}</div>
      <div className='country'>{weather?.location.country}</div>

      <div>
        <div>
          <img 
            className='icon'
            src={`http:${weather?.current.condition.icon}`} 
            width='128'
            alt={weather?.current.condition.text} 
          />
        </div>
        <div>
          <div> 
            <div className='condition'>
            {weather?.current.condition.text}
            </div>
            <div className='temp'>
            {weather?.current.temp_c}°
            </div> 
            <div className='feels-like'>           
            Feels Like: {weather?.current.feelslike_c}°
            </div>
          </div>
        </div>
        <div className='last-updated'>Last Updated: {weather?.current.last_updated}</div>
        <iframe
          title="Mapa" 
          src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d208067.93957945326!2d${weather?.location.lon}92!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle!5e0!3m2!1ses!2sar!4v1652582335544!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`} 
          width="600" 
          height="450" 
          style={{ border:0 }}
          loading="lazy" 
        >
        </iframe>
      </div>

    </div>
  )
}
