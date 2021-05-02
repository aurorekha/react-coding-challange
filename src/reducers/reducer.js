const initialState = {
    data: {}
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_HOTEL_DATA': {
            return {
                ...state,
                data: action.data
            }
        }

        default:
            return state
    }

}

export default reducer;