import axios from "axios";

const weatherRequest = (place = "oakland,ca") => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`
      );

      resolve(request.data.main.temp);
    } catch (err) {
      reject(err);
    }
  });
};

export default weatherRequest;
