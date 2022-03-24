import axios from "axios";
const img : any = {
    i01d: "/icon/01d.png",
    i02d: "/icon/02d.png",
    i03d: "/icon/03d.png",
    i04d: "/icon/04d.png",
    i09d: "/icon/09d.png",
    i10d: "/icon/10d.png",
    i11d: "/icon/11d.png",
    i13d: "/icon/13d.png",
    i50d: "/icon/50d.png",
    i01n: "/icon/01n.png",
    i02n: "/icon/02n.png",
    i03n: "/icon/03n.png",
    i04n: "/icon/04n.png",
    i09n: "/icon/09n.png",
    i10n: "/icon/10n.png",
    i11n: "/icon/11n.png",
    i13n: "/icon/13n.png",
    i50n: "/icon/50n.png"
}

const REACT_APP_API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';
export const fetchCurrentData = async (query: string) => {
  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${REACT_APP_API_KEY}&lang=vi`;

  const {
    data: { name, sys, coord },
  } = await axios.get(cityUrl);

  const currentWeatherData = {
    lat: coord.lat,
    lon: coord.lon,
    city: name,
    country: sys.country,
  };

  return currentWeatherData;
};

export const fetchOneCallData = async (
  lat: string,
  lon: string,
  city: string,
  country: string
) => {
  const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&units=metric&appid=${REACT_APP_API_KEY}&lang=vi`;

  const {
    data: { daily },

    
  } = await axios.get(oneCallUrl);
  console.log(daily);
  const dailyData = daily.map((currentData: any) => {
    return {
      current_temp: currentData.temp.day,
      min_temp: currentData.temp.min,
      max_temp: currentData.temp.max,
      feels_like: currentData.feels_like.day,
      dt: currentData.dt,
      desc: currentData.weather[0].description,
      humidity: currentData.humidity,
      pressure: currentData.pressure,
      wind_speed: currentData.wind_speed,
      icon: currentData.weather[0].icon,
      sunrise: currentData.sunrise,
      sunset: currentData.sunset,
      clouds: currentData.clouds,
      pop: currentData.pop,
      city: city,
      country: country,
      description: currentData.weather[0].description,

    };
  });

  return { dailyData };

};
