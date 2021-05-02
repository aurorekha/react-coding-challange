import {
    getHotelData
} from './actions';
import api from '../api/data.json';

describe('actions', () => {
    it('should create an action get the hotel data', () => {
        const expectedAction = {
            type: 'GET_HOTEL_DATA',
            data: api.results
        }
        expect(getHotelData()).toEqual(expectedAction)
    })
})