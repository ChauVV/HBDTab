
import createReducer from '../reducerConfig'

export const counter = createReducer(0, {
    ['COUNTER'] (state, action) {
      return action.payload
    }
})
  