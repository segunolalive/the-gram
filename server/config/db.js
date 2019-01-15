module.exports = {
  development: {
    database: 'mongodb://localhost:27017/photo-share',
    secret: 'dirty_little_secret'
  },
  production: {
    use_env_variable: 'MONGODB_URI'
  }
};
