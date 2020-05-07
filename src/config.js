module.exports = {
  PORT: process.env.PORT || 1000,
  NODE_ENV: process.env.NODE_ENV || 'development',

  DATABASE_URL:
    process.env.DATABASE_URL || 'postgresql://postgres@localhost/GasOrders',
};
