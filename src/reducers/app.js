// import config from 'config'
import _ from 'lodash'

const FETCH_WORKS = 'CMS/FETCH_WORKS'
const FETCH_WORKS_SUCCESS = 'CMS/FETCH_WORKS_SUCCESS'
const FETCH_WORKS_FAIL = 'CMS/FETCH_WORKS_FAIL'

const initialState = {
  fetching: false,
  fetchWorksSuccess: null,
  fetchWorksError: null
}

const actionsMap = {
  [FETCH_WORKS]: (state) => {
    return {
      ...state,
      fetching: true,
      fetchWorksSuccess: null,
      fetchWorksError: null
    }
  },
  [FETCH_WORKS_SUCCESS]: (state, action) => {
    return {
      ...state,
      fetching: false,
      fetchWorksSuccess: action.data
    }
  },
  [FETCH_WORKS_FAIL]: (state, action) => {
    return {
      ...state,
      fetching: false,
      fetchWorksError: action.error
    }
  }
}

export const fetchWorks = () => ({type: FETCH_WORKS})

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
