import React, {useState} from 'react'
import axios from 'axios'
import '../css/style.css'
import { useNavigate } from 'react-router-dom'

function weather() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=56dbe5c32bc39d443f34fdafd431f4eb`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  const navigate = useNavigate();

  const handleLogout = (e) =>{
    localStorage.clear();
    navigate('/Login')
    
  }
  

  return (
    
    <div className='app'>
      <header>
         <div>Latitude: {data.coord ? <p>{data.coord.lat.toFixed(3)}</p> : null}</div>
         <div>Longitude: {data.coord ? <p>{data.coord.lon.toFixed(3)}</p> : null}</div>
      <div className='search-wrapper'>
      <input className='search'
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
          <img src={require('../images/search.svg')} alt="search icon" />
          <button type="submit" />
      </div>
                      <div className="logout" >
                        <input type="submit" className= "Logout" value="Logout" onClick={handleLogout}/>
                      </div>
      </header>
      <div className='container' >
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          </div>
          {data.name !== undefined &&
          <div className='bottom'>
             <div className='feels'>
             {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p >Feels like</p>
             </div>
             <div className='humidity'>
             {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
             </div>
             <div className='wind'>
             {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
             </div>
          </div>
          }
        </div>
      </div>
  );
}

export default weather;
