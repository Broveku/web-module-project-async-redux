import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions"

const initialState = {
    character:  [],
    isFetching: false,
    error: ''

}

export const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_START:
            return({
                ...state,
                isFetching:true
            })
        case FETCH_SUCCESS:
            return({
                ...state,
                character:action.payload,
                isFetching:false
            })
        case FETCH_FAIL:
            return({
                ...state,
                error:action.payload,
                isFetching:false
                
            })
        default:
            return state
    }
}