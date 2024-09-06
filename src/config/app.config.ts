export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
  port: parseInt(process.env.PORT, 10) || 3000,
  default_limit: parseInt(process.env.DEFAULT_LIMIT, 10) || 10,
});
