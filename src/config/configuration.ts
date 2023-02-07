export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    mongoDBURL: process.env.MONGODB_URL
  },
});