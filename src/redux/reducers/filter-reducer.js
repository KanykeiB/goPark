import { FILTER_EVENT } from "../types/types"

export const TYPE_OF_FILTER = {
    SHOW_EXHIBITIONS: 'SHOW_EXHIBITIONS',
    SHOW_TOURNAMENTS: 'SHOW_TOURNAMENTS',
    SHOW_LECTURES: 'SHOW_LECTURES',
    SHOW_CLEAN_UP: 'SHOW_CLEAN_UP',
    SHOW_SPORTS: 'SHOW_SPORTS',
    SHOW_FOR_KIDS: 'SHOW_FOR_KIDS',
    SHOW_EXCURSIONS: 'SHOW_EXCURSIONS',
    SHOW_ALL: 'SHOW_ALL'
}
const initialState = TYPE_OF_FILTER.SHOW_ALL

const filterReducer = (state=initialState, action)=>{
    switch(action.type){
        case FILTER_EVENT:
            return action.payload
            default: return state
    }
}
export default filterReducer