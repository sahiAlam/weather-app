# Weather Application
### Check it out: [https://weather.vercel.app/](https://weather-cabbg9a6y-sahi-s-projects.vercel.app/)

## Overview

This project is a weather application that fetches and displays weather data such as temperature, air pollution, UV index, wind speed, and more, for a specific city or geographical coordinates. It uses data from OpenWeatherMap and OpenMeteo APIs and integrates a map using React-Leaflet with the following features. 


- **Dynamic Weather Data:** Get real-time weather data like temperature, wind speed, humidity, air pollution, UV index, and other details.
- **Map Integration:** The app displays a map of the selected city or coordinates using React-Leaflet.
- **5-Day Forecast / Hourly Forecast:** Shows a 5-day and hourly weather forecast with temperature and other parameters.
- **Interactive UI:** Users can click on large cities to view detailed weather information.
- **Search Any Cities:** Search weather conditions for any city you want.


## Technologies Used 

- **Next.js:** A React framework used to build the application, including server-side rendering and static site generation.
- **React-Leaflet:** A React wrapper for Leaflet.js, used to display maps.
- **Axios:** Promise-based HTTP client for making requests to APIs.
- **TailwindCSS:** Utility-first CSS framework for building responsive UIs.
- **OpenWeatherMap API:** API for fetching weather data.


## Demo/ Walkthrough

1. Getting Started:
When you first load the app, you’ll see a search bar or a list of cities to choose from. When a city is selected, the app will make API calls to fetch the weather data and display it dynamically.

2. Map and City Coordinates:
Once a city is selected, the Mapbox component will update to center the map on the city’s coordinates, and it will animate to that location using map.flyTo(). This provides a smooth user experience.

3. Fetching Data:
The weather data (such as temperature, air pollution, and wind speed) is fetched from the OpenWeatherMap API using Axios. The data is displayed in individual components that update whenever new data is received.

4. UI Components:
The UI components (e.g., Temperature, Wind, Humidity, UvIndex, etc.) are designed to display the relevant weather data. These components are reusable, and data is passed down through props.

## Installation

- **Clone the repository:** git clone https://github.com/sahiAlam/weather-app.git
- **Navigate into the project folder:** cd weather-app
- **Install dependencies:** npm install
- **Create a .env file in the root directory and add your OpenWeatherMap API key:** OPENWEATHERMAP_API_KEY=your_api_key

## File & Folder Structure
![image](https://github.com/user-attachments/assets/21bd419f-3a9f-4207-b624-22a918321f29)



## Some Screenshot

![image](https://github.com/user-attachments/assets/f8411e8f-6d46-43af-b726-149e4e4a6a95)

![image](https://github.com/user-attachments/assets/1275cadd-45d8-4126-a89e-0f6b31200b1d)

![image](https://github.com/user-attachments/assets/59025ce6-7c1e-45aa-9567-de0c62ce6d24)

![image](https://github.com/user-attachments/assets/2d8cd1b2-ebd2-4712-a079-4841cb977ff9)

![image](https://github.com/user-attachments/assets/fb246d7e-3b21-498c-aaa6-2c31a1377b98)



![image](https://github.com/user-attachments/assets/d3b8a7ee-95d9-49b8-bbfb-dbeb04569c0e)

![image](https://github.com/user-attachments/assets/5b58d675-7adb-4c68-a7b2-078f43c25c96)
