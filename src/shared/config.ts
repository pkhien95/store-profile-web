const config: any = {
  development: {
    API_URL: process.env.API_URL || 'http://localhost:3001'
  },
  production: {
    API_URL: process.env.API_URL
  }
}

export default config[process.env.RACK_ENV || 'development']
