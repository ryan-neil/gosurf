// get environment variable from .env file
const getEnvironmentVariable = (environmentVariable) => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];

  if (!unvalidatedEnvironmentVariable) {
    throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

// define the environment variables object
const envConfig = {
  NODE_ENV: getEnvironmentVariable('NODE_ENV'),
  PORT: getEnvironmentVariable('PORT'),
  DATABASE: getEnvironmentVariable('DATABASE'),
  API_KEY: getEnvironmentVariable('API_KEY'),
};

module.exports = envConfig;
