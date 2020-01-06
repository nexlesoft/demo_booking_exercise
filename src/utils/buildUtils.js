// BUILD TYPES
const dev = {};
dev.buildMode = "DEV";
dev.serverSchema = "https";
dev.serverHost = "chatapi.redhotpie.com.au"; // 'api.server.dev';

const staging = {};
staging.buildMode = "DEV";
staging.serverSchema = "https";
staging.serverHost = "chatapi.redhotpie.com.au"; // 'api.server.dev';

const production = {};
production.buildMode = "PRODUCTION";
production.serverSchema = "https";
production.serverHost = "chatapi.redhotpie.com.au";

//
const buildApp = (build) => {
  switch (build.buildMode) {
    case dev.buildMode:
      return dev;
    case staging.buildMode:
      return production;
    case production.buildMode:
      return production;
    default:
      return dev;
  }
};

const getBuildType = () => {
  if (process.env.NODE_ENV === "staging") {
    return staging;
  } else if (process.env.NODE_ENV === "production") {
    return production;
  }
  return dev;
};

const currentBuild = getBuildType();

export default {
  buildTypes: {
    dev,
    staging,
    production,
    isProduction: (currentBuild.buildMode === production.buildMode),
    isStaging: (currentBuild.buildMode === staging.buildMode),
    isDevelop: (currentBuild.buildMode === dev.buildMode)
  },
  build: buildApp(currentBuild)
};
