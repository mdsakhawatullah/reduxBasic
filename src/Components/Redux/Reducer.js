
import alldata from '../Book/fakeData.json'
const inititalState = {
    readingList: [],
    discoverList: alldata,
    finishedList: []
}

const bookReducer = (state = inititalState, action) => {
    switch(action.type) {
        case 'ADD_TO_READING_LIST':{
            const newState = {
                ...state,
                readingList: [...state.readingList, action.payload]
            }
            return newState
        }
        case 'REMOVE_FROM_READING_LIST':{
            const newState = {
                ...state,
                readingList: state.readingList.filter(book => book.id !== action.payload.id)
            
            }
            return newState
        }
        default : {
            return state
        }
    }

}
export default bookReducer;