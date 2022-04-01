# ⚙️ App Configuration

This is the GoSurf.io backend server.

### Table of Contents

1. [📚 Whats on the Stack](#-whats-on-the-stack)
1. [🐛 Bug Report](#-bug-report)
1. [⚡️ Get Started](#%EF%B8%8F-get-started)
1. [🧐 What's Inside?](#-whats-inside)
1. [🌊 Forecasting](#-forecasting)
1. [🌱 API Configuration](#-api-configuration)
1. [🌿 Netlify](#-netlify)
1. [🖋️ Contributing](#%EF%B8%8F-contributing)

# 📚 Whats on the Stack

- [x] Deploy: Build backend REST API
- [x] Deploy: Connect frontend to backend
- [x] Deploy: Integrate unit tests for main components
- [x] Deploy: Add `Footer` component
- [x] Deploy: Add gif of demo to main README
- [ ] Deploy: Deploy to Netlify
- [ ] Feat: Add mobile `Search` component (WeBull example)
- [ ] Feat: Add `node-cache` to backend server ([npm](https://www.npmjs.com/package/node-cache), [Link](https://www.youtube.com/watch?v=xZ_Rnh1UHTs))
- [ ] Feat: Add `express-rate-limit` to backend server ([npm](https://www.npmjs.com/package/express-rate-limit), [Link](https://www.youtube.com/watch?v=mZ0O7gcS7Yk))
- [ ] Feat: Integrate React Query for all API logic and management
- [ ] Feat: Integrate Rapid API
- [ ] Feat: Set up POST requests
- [ ] Feat: Update MongoDB security
- [ ] Feat: Get buoy data with `wget`
- [ ] Feat: "Favorites" feature (`Favorites` page)

[Back to Top](#table-of-contents)

<br>

# 🐛 Bug Report

- [ ] `Forecast` `Footer` component is not showing background topo image
- [ ] When navigating back to Home page hero image doesn't show up until page refresh
- [ ] Chartjs breaks conditions components unit tests ([StackOverflow issue](https://stackoverflow.com/questions/68146899/failing-test-in-react-by-using-chart-js))
- [ ] `Wind` speed data is up to the hour, not 24 hour predictions

[Back to Top](#table-of-contents)

<br>

# ⚡️ Get Started

(_outdated_)

To get a local version of the application up and running follow these steps:

### Installation

#### 1. Clone the repo:

```bash
git clone https://github.com/ryan-neil/gosurf.git
```

#### 2. Get API keys:

Get _free_ [StormGlass](https://stormglass.io/) API key.

#### 3. Install all required npm packages:

Inside the root directory:

```bash
npm install
```

#### 4. Store API keys:

Input API keys into `.env` file:

```bash
REACT_APP_SG_KEY='ENTER STORMGLASS KEY'
```

#### 5. Run the application:

Start the server:

```bash
npm run server
```

Start the app:

```bash
npm run start
```

[Back to Top](#table-of-contents)

<br>

# 🧐 What's Inside?

(_outdated_)

A quick look at the files and directories you'll see in the repo.

### Built with:

- MongoDB
- [Express](https://expressjs.com/): Backend things.
- React.js
  - [Chart.js](https://www.chartjs.org/): All application charts.
  - [styled-components](https://styled-components.com/): All application styles.
- Node.js

<br>

### Folder structure:

```bash
├── assets
│  └── github repo images
├── public
├── server
│  └── spots api
├── src
│  ├── assets
│  │  └── app icons
│  ├── components
│  │  ├── styles
│  │  │  └── component styles
│  │  ├── Banner.jsx
│  │  ├── Chart.jsx
│  │  ├── FetchError.jsx
│  │  ├── ForecastHeading.jsx
│  │  ├── GridItemHeading.jsx
│  │  ├── Header.jsx
│  │  ├── Loading.jsx
│  │  ├── SearchBar.jsx
│  │  ├── Swell.jsx
│  │  ├── SwellBody.jsx
│  │  ├── Tides.jsx
│  │  ├── TidesBody.jsx
│  │  ├── Wave.jsx
│  │  ├── WaveBody.jsx
│  │  ├── Wind.jsx
│  │  └── WindBody.jsx
│  ├── context
│  │  └── SpotsContext.js
│  ├── helpers
│  │  └── utils.js
│  ├── hooks
│  │  ├── useFetch.js
│  │  └── useLocalStorage.js
│  ├── pages
│  │  ├── Home.js
│  │  ├── Forecast.js
│  │  └── Missing.js
│  ├── App.js
│  └── index.js
└── README.md
```

[Back to Top](#table-of-contents)

<br>

# 🌊 Forecasting

Weather forecasting is all probabilistic statistics.

Resources:

- [Surf Forecasting Help:](https://magicseaweed.com/help/) Magicseaweed
- [Surf Captain Data Q/A:](https://surfcaptain.com/faq) Surf Captain

### NOAA Buoys

Some potential sources of data:

- NDBC Station Selection: https://www.ndbc.noaa.gov/
- NDBC Real-Time Data Directory: https://www.ndbc.noaa.gov/data/realtime2/
- Hilo, HI Buoy: https://www.ndbc.noaa.gov/station_page.php?station=51206
- Hilo, HI realtime2 Data (.txt file): https://www.ndbc.noaa.gov/data/realtime2/51206.txt
- NDBC - Web Data Guide: http://www.ndbc.noaa.gov/docs/ndbc_web_data_guide.pdf
- NDBC - Measurement Descriptions and Units: https://www.ndbc.noaa.gov/measdes.shtml
- NDBC - Sensor Observation Service (SOS): https://sdf.ndbc.noaa.gov/sos/

### NOAA Stations

Some potential sources of data:

- Tides and Currents Web Services: https://tidesandcurrents.noaa.gov/web_services_info.html
- CO-OPS API Reference: https://api.tidesandcurrents.noaa.gov/api/prod/
- Predictions: https://tidesandcurrents.noaa.gov/tide_predictions.html?gid=1399#listing
- Hilo Tides: https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=1617760

## Wave Height

To determine the breaking wave height at a place on shore given the deep water wave height at a buoy, we must do some math to trace the waves motion as it moves towards shallow water and starts to feel the bathymetry of the sea floor.

Unfortunately this is very computationally expensive, so for simple estimation purposes we can round everything off a bit using airy wave theory (linear wave theory).

In order to get truly accurate wave height readings at the shore we must take into account the depths and bathymetry slopes for each specific spot.

- [NOAA - Breaking Waves:](https://oceanexplorer.noaa.gov/edu/learning/9_ocean_waves/activities/breaking_waves.html) NOAA Ocean Explorer
- [NOAA - Waves, Swells, and Seas:](https://www.offshoreblue.com/wx/wx-wave-heights.php) BlueSeas
- [Wave behavior - what affects Wave height?:](http://www.skysailtraining.co.uk/wave_height.htm) Skysail Training
- [Airy Wave Theory:](https://en.wikipedia.org/wiki/Airy_wave_theory) Wikipedia
- [Linear Wave Theory:](https://www.globalspec.com/reference/63553/203279/linear-wave-theory) Globalspec
- [Linear Wave Theory in Python:](https://github.com/mpiannucci/surfpy/blob/master/examples/fetch_buoy_forecast.py) Github
- [Shallow-water wave theory:](http://www.coastalwiki.org/wiki/Shallow-water_wave_theory) Coastal Wiki
- [Python function that runs the calculation:](https://github.com/mpiannucci/surfpy/blob/master/surfpy/swell.py) Github

Some potential resources:

- [EMC Operational Wave Models](https://polar.ncep.noaa.gov/waves/index.php): Polar
- [Global Forecast System - Wave](https://polar.ncep.noaa.gov/waves/viewer.shtml?-gfswave-): Polar
- [Nearshore Wave Prediction System](https://polar.ncep.noaa.gov/nwps/): Polar

### Understanding CORS

Not all NOAA endpoints have CORS support. Specifically, the Buoys and the SurfState do not support this functionality and therefore directly calling the APIs through the browser is not supported. This therefore requires a proxy such as described in the links below:

- https://cors-anywhere.herokuapp.com/
- https://stackoverflow.com/a/43881141

Example `netlify.toml` file for the proxies:

```
[[redirects]]
  from = "/api/*"
  to = "https://www.ndbc.noaa.gov/data/realtime2/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/"
  status = 200
```

## Tides

### Current Tide Calculations

The NOAA provides the predictions for significant tide heights (i.e. lowest and highest values) it does not provide a means to determine the "current" tide (that I know of).

### Hourly Tide Calculations

The NOAA does provide the predictions for significant hourly tide heights over a chosen period of time.

## Wind

Something...

## Swell

Swell is the collection of waves moving away from a storm in the ocean. Although the waves will all be of different size and power and heading in slightly different directions we can tend to talk about averages of all these waves as one discreet swell. This swell as it heads into shallow water at your local beach will make the waves you surf.

The "primary" swell tends to be the one estimated to make the largest and most powerful waves on the beach. This is what the "wave height" calculations are derived from.

### Swell Height

- [Reading Surf Forecasts: Swell Height](https://lazysurfer.app/blog/reading-surf-forecasts-swell-height-911970022082/)

The swell height here is an average of the largest 1/3rd of all waves. Something very much like the average set wave. It's measured from the trough (very lowest point) to peak (very highest point) of each wave.

Generally speaking the larger the swell the larger the waves it'll create. While this should be fairly obvious it's complicated because longer period swells also make larger waves in shallow water and the direction of the swell will also have an effect. ALl of these factors must be taken into account when predicting the conditions.

### Swell Period

- Swell Period Guide ([Magicseaweed](https://magicseaweed.com/help/forecast-table/wave-period-overview))

Swell period is the time it takes for successive waves to pass the same point in seconds.

Together with the wave height, the wave period represents one of the key parameters when it comes to define a sea state. For a given wave height, the larger the period, the more energetic and powerful the swell. In addition, the period plays a crucial role (together with wave height and beach slope) in controlling the wave breaking.

Example:

- 4ft @ 10 seconds = 6ft breaking waves
- 4ft @ 20 seconds = 9ft breaking waves

Doubling the period gives about a 50% increase in the height of the breaking waves from the same sized swell.

### Swell Direction

In order for waves to break on the beach the swell needs to be heading towards it. In other words, the more the swell arrow is pointing straight towards the beach the larger the waves are going to be, all things considered.

For even the most exposed breaks once the swell pushes beyond 90 degrees from the ideal direction the chance of any waves at all rapidly diminishes.

Here's the tricky part, because of course with weather forecasting there are some exceptions. Longer period swells refract (bend) _better_ around obstacles and the precise shape of the sea bed (bathymetry) or other local obstructions can have a major effect on the wave height as some breaks.

## Sunrise/Sunset

- NOAA Calculations: https://www.esrl.noaa.gov/gmd/grad/solcalc/
- NOAA Old Calculator: https://www.esrl.noaa.gov/gmd/grad/solcalc/sunrise.html
- Javascript Library: https://github.com/mourner/suncalc

[Back to Top](#table-of-contents)

<br>

# 🌱 API Configuration

### Resources:

- _node-wget_: A download tool, now supporting http/https resource and http/https proxy ([Github](https://github.com/wuchengwei/node-wget), [npm](https://www.npmjs.com/package/wget)) (used to grab buoy data)

NOAA:

- NOAA CO-OPS API for Data Retrieval - ([NOAA Tides API Docs](https://api.tidesandcurrents.noaa.gov/api/prod/))
  - NOAA CO-OPS API Response Help - ([NOAA Tides API Docs](https://api.tidesandcurrents.noaa.gov/api/prod/responseHelp.html))
- Retrieving Data From National Data Buoy Center API - ([Medium](https://medium.com/@holtan.chase/retrieving-data-from-national-data-buoy-center-api-f94d262c7ea7))
- Buoy Kit Package: FetchBuoy and tide information from government NDBC data using Javascript - ([Github](https://github.com/derekdowling/buoy-kit), [npm](https://www.npmjs.com/package/buoy-kit))
- seebuoy API (NOAA Data) - ([seebuoy](https://www.seebuoy.com/api/))
- Amazing NOAA Repo Resources - (Matthew Iannucci Github)
- Buoy Data Reddit Thread (some really good info here) - ([Reddit](https://www.reddit.com/r/surfing/comments/a3rh3n/for_those_of_you_who_like_to_play_with_buoy_data/))

StormGlass:

- StormGlass API -([Docs](https://docs.stormglass.io/#/), [Github](https://github.com/stormglass))

Surfline:

- Surfline API Exploration - ([Observable](https://observablehq.com/@justingosses/surfline-api-exploration))
- API client for fetching data from the Surfline API v1 and v2 - ([Github](https://github.com/mhelmetag/surflinef))

## Known NOAA APIs

- [CO-OPS API For Data Retrieval:](https://api.tidesandcurrents.noaa.gov/api/prod/) NOAA
- [NDBC Real-Time Data Directory:](https://www.ndbc.noaa.gov/data/realtime2/) NDBC (Not an API, returns .txt files)
- [Climate Data Online: Web Services Documentation:](https://www.ncdc.noaa.gov/cdo-web/webservices/v2) NOAA
- [API Web Service:](https://www.weather.gov/documentation/services-web-api) NWS

### Example Endpoints:

#### Tides (hourly):

```js
// Example parameter data
const today = 20220302; // -> needs to be in this format
const station_id = '1617760';

fetch(
  `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${station_id}&begin_date=${today}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`
);
```

#### Air Temperature (Current):

```js
fetch(
  `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=air_temperature&station=${station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`
);
```

## Other Resources

- Oahu Surf Report: https://github.com/aaronfuj/oahu-surf-report - Extremely helpful for decrypting NOAA buoy data.
- Buoy Kit: https://github.com/derekdowling/buoy-kit - This is a typescript API for the tides which seems really useful. Unfortunately I found out about this after I had mostly finished my own services to do this.
- Meta Surf Report: https://github.com/swrobel/meta-surf-forecast / https://metasurfforecast.com/ - These guys do a good job on consolidating different surf information from different web sites and providing some nice charts on top of them.
- Surfline Example Endpoints:
  - `http://api.surfline.com/v1/forecasts/4991?resources=surf&days=1&getAllSpots=false&units=e&interpolate=true&showOptimal=false`
  - `https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=5842041f4e65fad6a7708dec&days=16&intervalHours=1&maxHeights=true`

[Back to Top](#table-of-contents)

<br>

# 🌿 Netlify

### Resources

- [Create React App on Netlify](https://docs.netlify.com/configure-builds/common-configurations/create-react-app/)
- [Functions overview](https://docs.netlify.com/functions/overview/): Netlify Docs
- [Example Hello World Netlify Lambda Functions App](https://github.com/netlify/example-hello-world-functions): Github
- [How to Deploy Express.js on Netlify](https://www.youtube.com/watch?v=hQAu0YEIF0g&t=15s): Owen Conti Youtube
- [Using Netlify for FullStack Apps](https://blog.bitsrc.io/using-netlify-for-fullstack-apps-9d6a07968523): Medium

[Back to Top](#table-of-contents)

<br>

# 🖋️ Contributing

### To the project source code?

Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.

### Can't find a surf spot?

Shoot me an [email](mailto:josephskycrest@gmail.com?subject=Spot)! I'll be sure to add it to the arsenal.

[Back to Top](#table-of-contents)

<br>

---

### License

[MIT](https://github.com/ryan-neil/gosurf/blob/master/LICENSE) © [Ryan Neil](https://github.com/ryan-neil)
