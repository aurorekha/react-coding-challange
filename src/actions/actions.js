import api from '../api/data.json';

export const getHotelData = () => {
    return {
        type: 'GET_HOTEL_DATA',
        data: api.results
    }
}
