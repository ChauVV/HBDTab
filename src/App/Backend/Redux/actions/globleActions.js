
import { checkStore } from '../reducerConfig'
import { KEYSTORE } from '@/globalConstants'

export function setCounter (couter) {
  checkStore(couter, KEYSTORE.COUNTER)
  return {
    type: 'COUNTER',
    payload: couter
  }
}
