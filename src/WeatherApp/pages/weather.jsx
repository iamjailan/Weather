import { useContext } from "react";
import "./weather.css";
import { AppContext } from "../context/context";
import { useTranslation } from "react-i18next";
import { TiWeatherWindy } from "react-icons/ti";
import { IoUmbrellaOutline } from "react-icons/io5";

export default function Weather() {
  const {
    theme,
    handleWeatherForm,
    cityValue,
    setCityValue,
    weatherData,
    loading,
    showError,
    emptyInput,
    nextDayData,
    getDayName,
  } = useContext(AppContext);
  const { t } = useTranslation();
  if (loading) {
    return (
      <h1 className={theme ? "loading dark" : "loading"}>{t("loading")}</h1>
    );
  }
  const convertKelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  return (
    <main className={theme ? "weather dark" : "weather"}>
      <form onSubmit={handleWeatherForm} className="weather-form">
        <label>{t("city")}</label>
        <input
          type="text"
          placeholder={t("p_city")}
          value={cityValue}
          onChange={(e) => setCityValue(e.target.value)}
        />
        {emptyInput && <p className="form-alert">{t("home_empty_form")}</p>}
        <button type="submit">{t("get_weather")}</button>
      </form>
      {weatherData ? null : <p className="empty-size"></p>}
      {showError ? (
        <div className="loading-error">
          <h1>{t("no_internet")}</h1>
        </div>
      ) : (
        weatherData && (
          <div className="weather-main">
            <div className="weather-details">
              <h4 className="weather-title">
                {t("right_now")}{" "}
                <span className="city-name"> {weatherData.name}</span>,{" "}
                {weatherData.weather[0].description}
              </h4>
              <section>
                <img
                  className="weather-image"
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                />
                <div className="weather-degree">
                  <h1>{convertKelvinToCelsius(weatherData.main.temp)}°C</h1>
                  <div className="h-l-degree">
                    <p className="deg">
                      {convertKelvinToCelsius(weatherData.main.temp_min)}°C /
                    </p>
                    <p className="deg">
                      {convertKelvinToCelsius(weatherData.main.temp_max)}°C
                    </p>
                  </div>
                </div>
                <div className="weather-rain">
                  <div className="mph">
                    <p>
                      <TiWeatherWindy />
                    </p>
                    <p>
                      {weatherData.wind.speed}
                      <span>mph</span>
                    </p>
                  </div>
                  <div className="rain">
                    <p>
                      <IoUmbrellaOutline />
                    </p>
                    <p>
                      {weatherData.main.humidity}
                      <span>%</span>
                    </p>
                  </div>
                  <div className="module">
                    <p>{weatherData.weather[0].main}</p>
                  </div>
                </div>
              </section>
            </div>
            <main className="next-day-weather">
              {nextDayData.map((day) => {
                return (
                  <div key={day.dt} className="day-details">
                    <img
                      className="day-image"
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    />
                    <div className="day-h-l">
                      <p>
                        {convertKelvinToCelsius(day.main.temp_min)}°C /{" "}
                        {convertKelvinToCelsius(day.main.temp_max)}°C
                      </p>
                    </div>
                    <p className="day">{getDayName(day.dt_txt)}</p>
                  </div>
                );
              })}
            </main>
          </div>
        )
      )}
    </main>
  );
}
