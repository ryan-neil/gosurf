# ⚙️ App Configuration

### Table of Contents

1. [⚡️ Get started](#⚡️-get-started)
2. [🧐 What's inside?](#🧐-whats-inside)
3. [🗂️ Repo Folder Breakdown](#🗂️-repo-folder-breakdown)
4. [🌊 Forecasting](#🌊-repo-folder-breakdown)
5. [🌱 API Configuration](#🌱-api-configuration)
6. [🖋️ Contributing](#🖋️-contributing)

### Todo:

#### Frontend:

- [ ] Add: "bathymetry" (sea floor) and "exposure" (how exposed the break is) to all spots in database
- [ ] Fix: Swell data needs to show "current" primary swell conditions and "current" secondary swell conditions, not the averages
- [ ] Research: "services" folder in React (all API logic)
- [ ] Research: look into wget replacement
- [ ] Research: linear wave theory
- [ ] Update: project flow map to represent new architecture
- [ ] Add: unit testing - (https://en.wikipedia.org/wiki/Unit_testing)
- [ ] Fix: convert mock JSON API to Express API
- [ ] Fix: App loading styles (skeleton loaders)
- [ ] Bug/Linter: 'react/jsx-no-constructed-context-values' (look into useMemo hook for context)
- [ ] Bug: wind hourly API call returns; up-until-current wind data, not predictions
- [ ] Bug: when navigating back to `Home` page hero image disappears
- [ ] Fix: consolidate StormGlass API calls (`Wave`, `Swell`) into `Forecast` component for fewer API calls
- [ ] Fix: components as props design pattern for reusable Chart component (`<Chart type={<Bar />} />`)
- [ ] Check: cross check data from NOAA and StormGlass for water temp, air temp, and wind consistency
- [ ] Feat: mobile search (`Search` page) (WeBull mobile search example)
  - [ ] Feat/Add: recent searches
- [ ] Feat: "Favorites" feature (`Favorites` page)
- [x] Check: look into React Query for all data fetching ([React Query Docs](https://react-query.tanstack.com/overview))
- [x] Test: spots API error checks in components (`SearchBar`/`Forecast`)
- [x] Bug/Style: `<p>` elements getting styles from unknown origin
- [x] Add: linting (Air bnb ESLint)
- [x] Add: error boundaries - (https://www.youtube.com/watch?v=w4sxsz7AO70)
- [x] Add: `Profile` component icon in `Header`
- [x] Add: chartjs data labels - (https://chartjs-plugin-datalabels.netlify.app/), (https://medium.com/youth-jobbing/how-to-use-react-with-chart-js-and-plugins-d7eb958eebaf)
- [x] Update: optimize images to webp format
- [x] Style/Add: build `HeroContent` section for `Home` page
- [x] Style/Add: build `About` section for `Home` page
- [x] Update: folder structure, separate out components into individual folders - (https://www.robinwieruch.de/react-folder-structure/)
- [x] Style/Add: build `HeroImage` section for `Home` page
- [x] Style/Add: add Forecast component background header (absolute positioning)
- [x] Style/Add: `Favorites` star icon to `ForecastHeading` component
- [x] Style/Logic: `Swell` component `LineChart` to show secondary swell line as a different color
- [x] Style: inside `LineChart` add styling and colors in the datasets array object
- [x] Style/Logic: charts theme colors for styling (use styled-components?)
- [x] Build: out `Chart` component for:
  - [x] `Wave` component
  - [x] `Tides` component
  - [x] `Wind` component
  - [x] `Swell` component
- [x] Fix: charts x-axis times shortened (6 AM)
- [x] Fix: `windBody` and `swellBody` components with `.map()` looping logic
- [x] Fix: Check in `Forecast` component if `spot` is true and only then render `Container` component, else render `FetchError` component
- [x] Add: gather Chart x and y axis data from `Wave`, `Tides`, `Wind` and `Swell` component (values array and times array)
- [x] Add: individual card body components to `Wave`, `Tides`, `Wind`, and `Swell` components (i.e. `WaveBody`, `TidesBody`)
- [x] Add: `GridItemHeader` component
- [x] Build: out `Swell` component
- [x] Add: fetch and render Swell component data from API
- [x] Fix: `useLocalStorage` custom hook
- [x] Add: `useLocalStorage` hook into project (Inside app Context)
- [x] Fix: `useFetch` custom hook
- [x] Fix: data fetching architecture into `Forecast` component

#### Backend:

- [ ] Check: MERN app crash course ([Tutorial](https://www.youtube.com/watch?v=I7EDAR2GRVo))
- [ ] Check: Express with React and building custom API's
- [ ] Build: start building out backend
- [ ] Build: replace mock spots API with Express.js API

### Resources:

- _Standalone Components_: Fetch and render in same component.
- _HOC Components_: Fetch and render are separated into 2 components (_"Container"_ and _"Presentation"_).
- [React Data Fetching Patterns](https://nordschool.com/react-data-fetching/)
- [Thoughts on React Hooks, Redux, and Separation of Concerns](https://blog.isquaredsoftware.com/2019/07/blogged-answers-thoughts-on-hooks/)
- [Hooks, HOCs, and Tradeoffs](https://blog.isquaredsoftware.com/2019/09/presentation-hooks-hocs-tradeoffs/)
- [The Evolution of Redux Testing Approaches](https://blog.isquaredsoftware.com/2021/06/the-evolution-of-redux-testing-approaches/)
- [How To Create And Test Custom Hooks In React](https://vhudyma-blog.eu/2020-07-11-how-to-create-and-test-custom-hooks-in-react/)

<br>

# ⚡️ Get started

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

<br>

# 🧐 What's inside?

A quick look at the files and directories you'll see in the repo.

#### Built with:

- MongoDB
- [Express](https://expressjs.com/): Backend things.
- React.js
  - [Chart.js](https://www.chartjs.org/): All application charts.
  - [styled-components](https://styled-components.com/): All application styles.
- Node.js

<br>

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

<br>

# 🗂️ Repo Folder Breakdown

_Out of date..._

/`src`/`config`: This **folder** contains information regarding all API's and how to accessing them. As well as all other developer specific application configuration. This folder doesn't contain any logic.

/`src`/`public`: This **folder** contains all the client facing code (images, style sheets, frontend javascript, etc.).

/`src`/`routes`: This **folder** consists of all of our application routing logic.

/`src`/`views`: This **folder** consists of all the different app "views" or pages to be displayed.

/`src`/`server.js`: This **file** has all of the application server logic, like starting the server, routes to use, view engine to render, etc.

<br>

# 🌊 Forecasting

Weather forecasting is all probabilistic statistics.

Resources:

- [Surf Forecasting Help:](https://magicseaweed.com/help/) Magicseaweed

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

<br>

# 🌱 API Configuration

Resources:

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

# 🖋️ Contributing

#### To the project source code?

Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.

#### Want to add a surf spot?

Can't find a surf spot? Help us add it! Open an issue and leave us some data about the surf spot.

#### Example data:

```json
{
  "name": "Bay Front",
  "id": 0,
  "lat": 19.7283,
  "lon": -155.0848,
  "timezone": "Pacific/Honolulu",
  "timezone_offset": -36000,
  "location": {
    "city": "Hilo",
    "state": "Hawai'i",
    "county": "Big Island",
    "country": "United States"
  },
  "idealConditions": {
    "swellDirection": "NE",
    "wind": "S",
    "surfHeight": "3ft to 6ft",
    "tide": "Low"
  }
}
```

[Back to Top](#table-of-contents)

<br>

---

### License

[MIT](https://github.com/ryan-neil/gosurf/blob/master/LICENSE) © [Ryan Neil](https://github.com/ryan-neil)
