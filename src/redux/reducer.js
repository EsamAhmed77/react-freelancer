export default function reducer (state = { carousel: [] , asUsedBy: [],  needWorkDone: [] }, action) {
    switch(action.type) {
        case 'FETCH_CAROUSEL':
            return { ...state, carousel: action.payload }
        case 'FETCH_ASUSEDBY':
            return { ...state, asUsedBy: action.payload }
        case 'FETCH_NEEDWORKDONE':
            return {...state, needWorkDone: action.payload}
        default:
            return state;
    }
}