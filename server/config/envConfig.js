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
  DATABASE_URI: getEnvironmentVariable('DATABASE_URI'),
  API_KEY: getEnvironmentVariable('API_KEY'),
};

module.exports = envConfig;
