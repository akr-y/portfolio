
const environment = {
  development: {
    host: `http://${window.location.hostname}`,
    contentfulSpaceId: '9o41oqhppz7q',
    contentfulApiHost: 'cms-preview.paidy.com'
  },
  production: {
    host: `http://${window.location.hostname}`,
    contentfulSpaceId: '9o41oqhppz7q',
    contentfulApiHost: 'cms.paidy.com'
  }
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign(environment)
