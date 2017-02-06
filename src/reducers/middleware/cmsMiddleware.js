import contentful from 'contentful'
import config from 'config'

const FETCH_FEATURED_MERCHANTS = 'CMS/FETCH_FEATURED_MERCHANTS'
const FETCH_FEATURED_MERCHANTS_SUCCESS = 'CMS/FETCH_FEATURED_MERCHANTS_SUCCESS'
const FETCH_FEATURED_MERCHANTS_FAIL = 'CMS/FETCH_FEATURED_MERCHANTS_FAIL'

const client = contentful.createClient({
  space: config.contentfulSpaceId,
  accessToken: '_', // JUST SET STRING FOR CONTENTFUL LIBRARY
  host: config.contentfulApiHost
})

export default function cmsMiddleware() {
  return next => action => {
    const {...rest} = action
    next({...rest, type: FETCH_FEATURED_MERCHANTS})
    switch (action.type) {
      case FETCH_FEATURED_MERCHANTS:
        client.getEntries({
          'content_type': 'featuredMerchants'
        })
        .then((result) => {
          if (result.total > 0) {
            const data = result.items
            console.log(data)
            next({...rest, data, type: FETCH_FEATURED_MERCHANTS_SUCCESS})
          } else { next(action) }
        }).catch((error) => {
          console.error('CONTENTFUL API ERROR:', error)
          next({...rest, error, type: FETCH_FEATURED_MERCHANTS_FAIL})
        })
        break
      default:
        next(action)
    }
  }
}
