export const fetchAction = (payload) => dispatch => {
    dispatch({
        type: 'FETCH_ACTION',
        payload: payload
    })
}