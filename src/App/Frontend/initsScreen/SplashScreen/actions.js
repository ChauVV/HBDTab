import { setCounter } from '../../../Backend/Redux/actions/globleActions'


export const tang = (_this) => {
    return (dispatch, getState) => {
        const { counter } = getState()
        
        dispatch(setCounter(counter + 1))
    }
}