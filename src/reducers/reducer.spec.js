import reducer from './reducer';
import api from './../reducers/reducer';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: {}
        })
    })

    it('should handle GET_HOTEL_DATA', () => {
        expect(
            reducer([], {
                type: 'GET_HOTEL_DATA',
                data: api.results
            })
        ).toEqual({
            data: api.results
        })
    })
})