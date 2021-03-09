import { combineReducers, createStore } from 'redux'
import { BTGameReducer } from './BTGameXucXacReducer';
import { gioHangReducer } from './reducer/GioHangReducer';



const rootReducer = combineReducers({
    gioHangReducer: gioHangReducer,
    BTGameReducer:BTGameReducer,
})

export const store = createStore(rootReducer);