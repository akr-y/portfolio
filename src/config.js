
const environment = {
  development: {
    host: `http://${window.location.hostname}`,
    contentfulSpaceId: '6kvcslnxig7z',
    contentfulApiHost: 'preview.contentful.com',
    accessToken: '2117cbdcf8f95b3752db49e9498c0f562db830ffc0d6a672517b8e74ed89125a'
  },
  production: {
    host: `http://${window.location.hostname}`,
    contentfulSpaceId: '6kvcslnxig7z',
    contentfulApiHost: 'www.contentful.com',
    accessToken: 'c8209bea8875a1fedb62df3228f991291cc8f7228d2e2a6307c2ab159e24e7a5'
  }
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign(environment)
