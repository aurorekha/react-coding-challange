const initialState = {
   data: Object 
}

const reducer = (state= initialState, action) => {
    // const sortLowToHigh = action.data && action.data.sort((a, b) => 
    //     parseFloat(a.offer.displayPrice.amount) - parseFloat(b.offer.displayPrice.amount))
    // const sortHighToLow = action.data && action.data.sort((a, b) => 
    //     parseFloat(b.offer.displayPrice.amount) - parseFloat(a.offer.displayPrice.amount))
    
        switch(action.type) {
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