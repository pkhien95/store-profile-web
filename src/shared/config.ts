const config: any = {
  development: {
    API_URL: process.env.API_URL || 'http://localhost:3001',
    IMGUR_CLIENT_ID: '20776f84ce20651'
  },
  production: {
    API_URL: process.env.API_URL,
    IMGUR_CLIENT_ID: '20776f84ce20651'
  }
}

export default config[process.env.NODE_ENV || 'development']
