module.exports = {
    API_URL: process.env.API_URL || 'http://localhost:10000/api',
    DATABASE: process.env.DATABASE || 'mongodb+srv://arailes:OAGpjqCtI9uYhEPk@agoravaicluster33.4f6mahg.mongodb.net/',
    APP_PATH: process.env.APP_PATH || '/usr/src/app',
    CONFIG_PATH: process.env.CONFIG_PATH || '/usr/src/app/config',
    HTTPS_KEY: process.env.HTTPS_KEY || 'config/easytrage-key.pem',
    HTTPS_CERT: process.env.HTTPS_CERT || 'config/easytrage-cert.pem',
    JWT_SECRET: process.env.JWT_SECRET || 'changeme_jwt_secret'
}
