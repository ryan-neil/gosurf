# GoSurf

This is the new repo for GoSurf.io. This is a React rebuild.

### Tutorials

- [Learn the MERN Stack](https://www.youtube.com/watch?v=-0exw-9YJBo): Traversy Media

### TODO

- [ ] Build out `Swell` component
- [ ] Fetch and render Swell component data from API
- [ ] Look into adding `GridItemHeader` component
- [ ] Look into adding `GridItemBody` component (this may not be reusable from component to component)
- [ ] Cross check data from NOAA and StormGlass for water temp, air temp, and wind consistency
- [ ] Convert mock JSON API to Express API
- [x] Refactor `useLocalStorage` custom hook
- [x] Incorporate new `useLocalStorage` hook into project (Inside app Context)
- [x] Refactor `useFetch` custom hook
- [x] Refactor data fetching architecture into `Forecast` component

## Buoys

### Buoy Wave Height Trend Calculations

Calculation of the significant wave height trend for each buoy is based on performing a simple linear regression to identify whether or not it seems like the data is trending upward or downward. The arbitrary values for determining this are based on looking at the past 24 hours worth of data, if it looks like it is trending upward or downward by a foot.

Logic for the simple linear regression can be found at [simple_linear_regression.js](src/services/simple_linear_regression.js)

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

### Data Sources

- [NDBC - Web Data Guide](http://www.ndbc.noaa.gov/docs/ndbc_web_data_guide.pdf)
- [NDBC - Measurement Descriptions and Units](https://www.ndbc.noaa.gov/measdes.shtml)
- [NDBC - Sensor Observation Service (SOS)](https://sdf.ndbc.noaa.gov/sos/)

Some potential sources of data:

- NDBC Station Selection: https://www.ndbc.noaa.gov/
- Hilo Buoy: https://www.ndbc.noaa.gov/station_page.php?station=51206
- Hilo realtime2 Data (.txt): https://www.ndbc.noaa.gov/data/realtime2/51206.txt
- Hilo realtime2 Data (.spec): https://www.ndbc.noaa.gov/data/realtime2/51206.spec

### Buoys

The following buoys have wave height data:

- 51206 - Hilo
- 51211 - Pearl Harbor
- 51212 - Barbers Point
- 51210 - Kaneohe Bay
- 51201 - Waimea Bay

### Wave Heights

Some potential resources:

- [EMC Operational Wave Models](https://polar.ncep.noaa.gov/waves/index.php): Polar
- [Global Forecast System - Wave](https://polar.ncep.noaa.gov/waves/viewer.shtml?-gfswave-): Polar
- [Nearshore Wave Prediction System](https://polar.ncep.noaa.gov/nwps/): Polar

## Tides

### Current Tide Calculations

The NOAA provides the predictions for significant tide heights (i.e. lowest and highest values) it does not provide a means to determine the "current" tide (that I know of).

### Data Sources

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
