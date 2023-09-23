# Multilingual React Weather App

This is a React app that displays weather information fetched from the OpenWeather API. It includes the next four days weather forecast and supports multiple languages using i18next for internationalization. The app also utilizes React Router DOM for routing and Context API for state management.

## Features

- Fetches weather data from the OpenWeather API.
- Displays current weather information.
- Displays weather forecast for the next four days.
- Supports multiple languages using i18next for internationalization.
- Uses React Router DOM for navigation.
- Utilizes Context API for state management.

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js (v14.0.0 or above)
- npm (v6.14.0 or above)

## Installation

1. Clone or download the repository:

```
git clone https://github.com/iamjailan/Weather.git
```

2. Navigate to the project directory:

```
cd react-weather-app
```

3. Install the dependencies:

```
npm install
```

4. Obtain an API key from OpenWeather. Create a free account and generate an API key.


6. Run the development server:

```
npm run dev
```

7. Open your browser and visit `http://localhost:5173` to view the app.

## Internationalization

The app supports multiple languages using i18next. You can find the language files in the `src/locales` directory. The translations for each language are stored in separate JSON files. To add or modify translations, update the respective JSON file for the desired language.

The current language is determined based on the user's browser settings. If the translation for that language is available, it will be displayed. Otherwise, the app will fallback to the default language.

## Usage

The app displays the current weather information on the home page. You can navigate to the forecast page to view the weather forecast for the next four days.

To switch languages, use the language selector provided in the app. The content will update dynamically based on the selected language.

---

Feel free to modify and customize the README file according to your project's specific details and requirements, including additional information or instructions related to i18next and multilingual support.