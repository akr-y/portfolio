import contentful from 'contentful'
import config from 'config'

const FETCH_WORKS = 'CMS/FETCH_WORKS'
const FETCH_WORKS_SUCCESS = 'CMS/FETCH_WORKS_SUCCESS'
const FETCH_WORKS_FAIL = 'CMS/FETCH_WORKS_FAIL'

const client = contentful.createClient({
  space: config.contentfulSpaceId,
  accessToken: config.accessToken,
  host: config.contentfulApiHost
})

export default function cmsMiddleware() {
  return next => action => {
    const {...rest} = action
    next({...rest, type: FETCH_WORKS})
    switch (action.type) {
      case FETCH_WORKS:
        client.getEntries({
          'content_type': 'works'
        })
        .then((result) => {
          if (result.total > 0) {
            const data = result.items
            next({...rest, data, type: FETCH_WORKS_SUCCESS})
          } else { next(action) }
        }).catch((error) => {
          console.error('CONTENTFUL API ERROR:', error)
          next({...rest, error, type: FETCH_WORKS_FAIL})
        })
        break
      default:
        next(action)
    }
  }
}
