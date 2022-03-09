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
const envVariables = {
  nodeEnv: getEnvironmentVariable('NODE_ENV'),
  port: getEnvironmentVariable('PORT'),
  mongoURI: getEnvironmentVariable('MONGO_URI'),
};

module.exports = envVariables;
