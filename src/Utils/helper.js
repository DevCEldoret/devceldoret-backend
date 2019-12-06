// eslint-disable-next-line import/no-extraneous-dependencies
import "dotenv/config";

const config = {};

switch (process.env.NODE_ENV) {
  case "production":
    config.PORT = process.env.PORT;
    break;
  case "development":
    config.PORT = process.env.PORT;
    break;
  default:
    config.PORT = process.env.PORT || 4000;
    break;
}

export default config;
