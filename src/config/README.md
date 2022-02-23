# ⚙️ App Configuration

### Table of Contents

1. [⚡️ Get started](#⚡️-get-started)
2. [🧐 What's inside?](#🧐-whats-inside)
3. [🗂️ Repo Folder Breakdown](#🗂️-repo-folder-breakdown)
4. [🌱 API Configuration](#🌱-api-configuration)
5. [🖋️ Contributing](#🖋️-contributing)

### Todo:

- [ ] Add: unit testing (https://en.wikipedia.org/wiki/Unit_testing)
- [ ] Bug: wind hourly API call returns; up-until-current wind data, not predictions
- [ ] Bug: when navigating back to `Home` page hero image disappears
- [ ] Update: consolidate StormGlass API calls (`Wave`, `Swell`) into `Forecast` component for fewer API calls
- [ ] Update: components as props design pattern for reusable Chart component (`<Chart type={<Bar />} />`)
- [ ] Update: convert mock JSON API to Express API
- [ ] Check: cross check data from NOAA and StormGlass for water temp, air temp, and wind consistency
- [ ] Feat: mobile search (`Search` page) (WeBull mobile search example)
  - [ ] Feat/Add: recent searches
- [ ] Feat: "Favorites" feature (`Favorites` page)
- [x] Update: optimize images to webp format
- [x] Style/Add: build `HeroContent` section for `Home` page
- [x] Style/Add: build `About` section for `Home` page
- [x] Update: folder structure, separate out components into individual folders (https://www.robinwieruch.de/react-folder-structure/)
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
- [x] Update: charts x-axis times shortened (6 AM)
- [x] Update: `windBody` and `swellBody` components with `.map()` looping logic
- [x] Update: Check in `Forecast` component if `spot` is true and only then render `Container` component, else render `FetchError` component
- [x] Add: gather Chart x and y axis data from `Wave`, `Tides`, `Wind` and `Swell` component (values array and times array)
- [x] Add: individual card body components to `Wave`, `Tides`, `Wind`, and `Swell` components (i.e. `WaveBody`, `TidesBody`)
- [x] Add: `GridItemHeader` component
- [x] Build: out `Swell` component
- [x] Add: fetch and render Swell component data from API
- [x] Update: `useLocalStorage` custom hook
- [x] Add: `useLocalStorage` hook into project (Inside app Context)
- [x] Update: `useFetch` custom hook
- [x] Update: data fetching architecture into `Forecast` component

### Resources:

- **Standalone Components**: Fetch and render in same component.
- **HOC Components**: Fetch and render are separated into 2 components (_"Container"_ and _"Presentation"_).

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

_Production_ environment:

```bash
npm start
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

# 🌱 API Configuration

## Buoys

#### Buoy Wave Height Trend Calculations

Calculation of the significant wave height trend for each buoy is based on performing a simple linear regression to identify whether or not it seems like the data is trending upward or downward. The arbitrary values for determining this are based on looking at the past 24 hours worth of data, if it looks like it is trending upward or downward by a foot.

Logic for the simple linear regression can be found at [simple_linear_regression.js](src/services/simple_linear_regression.js)

#### Understanding CORS

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

#### Data Sources

- [NDBC - Web Data Guide](http://www.ndbc.noaa.gov/docs/ndbc_web_data_guide.pdf)
- [NDBC - Measurement Descriptions and Units](https://www.ndbc.noaa.gov/measdes.shtml)
- [NDBC - Sensor Observation Service (SOS)](https://sdf.ndbc.noaa.gov/sos/)

Some potential sources of data:

- NDBC Station Selection: https://www.ndbc.noaa.gov/
- Hilo Buoy: https://www.ndbc.noaa.gov/station_page.php?station=51206
- Hilo realtime2 Data (.txt): https://www.ndbc.noaa.gov/data/realtime2/51206.txt
- Hilo realtime2 Data (.spec): https://www.ndbc.noaa.gov/data/realtime2/51206.spec

#### Buoys

The following buoys have wave height data:

- 51206 - Hilo
- 51211 - Pearl Harbor
- 51212 - Barbers Point
- 51210 - Kaneohe Bay
- 51201 - Waimea Bay

## Wave Heights

Some potential resources:

- [EMC Operational Wave Models](https://polar.ncep.noaa.gov/waves/index.php): Polar
- [Global Forecast System - Wave](https://polar.ncep.noaa.gov/waves/viewer.shtml?-gfswave-): Polar
- [Nearshore Wave Prediction System](https://polar.ncep.noaa.gov/nwps/): Polar

## Tides & Wind

#### Current Tide Calculations

The NOAA provides the predictions for significant tide heights (i.e. lowest and highest values) it does not provide a means to determine the "current" tide (that I know of).

#### Data Sources

Some potential sources of information:

- CO-OPS API Reference: https://api.tidesandcurrents.noaa.gov/api/prod/
- Predictions: https://tidesandcurrents.noaa.gov/tide_predictions.html?gid=1399#listing
- Hilo Tides: https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=1617760

## Sunrise/Sunset Calculations

- NOAA Calculations: https://www.esrl.noaa.gov/gmd/grad/solcalc/
- NOAA Old Calculator: https://www.esrl.noaa.gov/gmd/grad/solcalc/sunrise.html
- Javascript Library: https://github.com/mourner/suncalc

## Known NOAA APIs

- https://www.ncdc.noaa.gov/cdo-web/webservices/v2
- https://www.weather.gov/documentation/services-web-api

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
