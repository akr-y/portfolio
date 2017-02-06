// import config from 'config'
import _ from 'lodash'

const FETCH_FEATURED_MERCHANTS = 'CMS/FETCH_FEATURED_MERCHANTS'
const FETCH_FEATURED_MERCHANTS_SUCCESS = 'CMS/FETCH_FEATURED_MERCHANTS_SUCCESS'
const FETCH_FEATURED_MERCHANTS_FAIL = 'CMS/FETCH_FEATURED_MERCHANTS_FAIL'

const initialState = {
  fetching: false,
  fetchFeaturedMerchantsSuccess: null,
  fetchFeaturedMerchantsError: null
}

const actionsMap = {
  [FETCH_FEATURED_MERCHANTS]: (state) => {
    return {
      ...state,
      fetching: true,
      fetchFeaturedMerchantsSuccess: null,
      fetchFeaturedMerchantsError: null
    }
  },
  [FETCH_FEATURED_MERCHANTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      fetching: false,
      fetchFeaturedMerchantsSuccess: action.data
    }
  },
  [FETCH_FEATURED_MERCHANTS_FAIL]: (state, action) => {
    return {
      ...state,
      fetching: false,
      fetchFeaturedMerchantsError: action.error
    }
  }
}

export const fetchFeaturedMerchants = () => ({type: FETCH_FEATURED_MERCHANTS})

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
