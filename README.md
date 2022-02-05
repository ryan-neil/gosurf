# GoSurf

This is the new repo for GoSurf.io. This is a React rebuild.

### App Breakdown
  1. Create `useFetch` hook for all app data fetching
  2. Inside `App` component, (this logic could maybe be a custom hook?) check if spots data exists in local storage
      * If data exists, use local storage data as the default state
      * If data does not exist, fetch the surf spots from internal database with `useFetch` hook (`http://localhost:5001/spots`)
  3. Inside `SearchBar` component, check if spots data exists in local storage
      * If data exists, use local storage data as the default state
      * If data does not exist, fetch the surf spots from internal database with `useFetch` hook (`http://localhost:5001/spots`)
  4. Handle search logic: when user searches a surf spot, use the data state to filter matching words. When the user makes a selection, navigate to the Forecast page with the users' selected surf spot slug in the url parameters
  5. Inside `Forecast` page, check if spots data exists in local storage
      * If data exists, use local storage data as the default state
      * If data does not exist, fetch the surf spots from internal database with `useFetch` hook (`http://localhost:5001/spots`)
  6. Inside the `Forecast` page, get the surf spot parameter "slug" and use the data state to filter for the spot that matches the "slug" in the params
  7. Inside `Forecast` page, fetch the OpenWeather API with the filtered spot objects "latitude" and "longitude" values
  8. Use the returned data to set the forecast heading (spot name, spot county, and spot state)
  9. Pass the returned OpenWeather data to the `Banner` component
  10. Inside the `Banner` component, render elements with the data from OpenWeather

Resource:
  * [update on unmounted component](https://www.youtube.com/watch?v=W6AJ-gRupCs)