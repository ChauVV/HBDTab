import store from '../lib/electronJsonStorageSync'
import { KEYSTORE } from '../../Utils/globalConstants'

export default function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export const checkStore = (data, KEYSTORE) => {
  console.log('hey ', store)
  store.set(KEYSTORE, data)
}

export const checkLocalStoreToRedux = async (storeRedux, keyStoreNew, action, initData) => {
  let data = await store.get(keyStoreNew)
  if (data.status) {
    typeof (initData) === 'string'
    ? !data.data
      ? storeRedux.dispatch(action(initData))
      : data.data !== initData && storeRedux.dispatch(action(data.data))
    : !data.data ? storeRedux.dispatch(action(initData))
      : typeof (initData) === 'boolean'
        ? data.data && storeRedux.dispatch(action(data.data))
        : typeof (initData) === 'number'
          ? storeRedux.dispatch(action(data.data)) 
          : data.length > 0 && storeRedux.dispatch(action(data.data))
  } else {
    storeRedux.dispatch(action(initData))
  }
}
