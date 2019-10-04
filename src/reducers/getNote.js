const initialState = {
    newNote: []
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case 'ADD_NOTE':
        return {...state, newNote: action.payload}

        default:
        return state
    }
}