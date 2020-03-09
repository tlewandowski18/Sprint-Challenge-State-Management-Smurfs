import axios from "axios"

export const fetchSmurfs = () => dispatch => {
    dispatch({type: 'FETCHING_SMURFS_START'})
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({type: 'FETCHING_SMURFS_SUCCESS', payload: res.data})
        })
        .catch(err => {
            dispatch({type: 'FETCHING_SMURFS_FAILURE', payload: err.response})
        })
}