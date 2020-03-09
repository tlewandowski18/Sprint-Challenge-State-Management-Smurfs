const initialState = {
    isLoading: false,
    smurfs: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_SMURFS_START' :
            return {
                ...state,
                isLoading: true
            }
        case 'FETCHING_SMURFS_SUCCESS' :
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case 'FETCHING_SMURFS_FAILURE' :
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default :
            return state
    }
}