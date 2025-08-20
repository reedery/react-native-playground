export type WeatherCondition =
  | 'Clear'
  | 'Cloudy'
  | 'Rainy'
  | 'Sunny'
  | 'Snowy'
  | 'Stormy'
  | 'Foggy'
  | 'Windy';

const weatherImageMap: Record<WeatherCondition, any> = {
  Clear: require('../static/img-clear.jpg'),
  Sunny: require('../static/img-sunny.jpg'),
  Cloudy: require('../static/img-cloudy.jpg'),
  Rainy: require('../static/img-rainy.jpg'),
  Snowy: require('../static/img-snowy.jpg'),
  Stormy: require('../static/img-stormy.jpg'),
  Foggy: require('../static/img-foggy.jpg'),
  Windy: require('../static/img-windy.jpg'),
};

/**
 * Returns the appropriate image source for the given weather condition
 * @param weather - The weather condition
 * @returns Image source that can be used with ImageBackground or Image components
 */
const getImageForWeather = (weather: WeatherCondition): any => {
  return weatherImageMap[weather] || weatherImageMap.Clear;
};

export default getImageForWeather;
