# jnp-weather

This project was created for the 2023 edition of the "Modern web apps" course
at the University of Warsaw.

Task: _Paweł Gołąb_

Solution: _Karol Wąsowski_

## Before you begin

To run and build the app you need both an API key for
[WeatherAPI](https://www.weatherapi.com) and [Tenor](https://tenor.com). Create a
file under `src/utils/secrets.js` and add the keys like this:

```js
export const WEATHER_API_KEY = 'YOUR_WEATHER_KEY'
export const TENOR_API_KEY = ' YOUR_TENOR_KEY '
```

## Available tasks

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn lint`

The project uses `eslint` to enforce code style. Running this task will check
if the style is correct in all project files located under `src/`.

### `yarn lint-fix`

This task will fix all auto-fixable problems with code style.
