import { createStore , combineReducers,applyMiddleware, compose} from 'redux'
import {userSigninReducer} from './reducers/userReducers'
import thunk from'redux-thunk'
const Cookie = require('js-cookie')

const userInfo = Cookie.getJSON('userInfo') || null;


const initialState = {
    userSignin: { userInfo },
}
const reducer = combineReducers({
    userSignin: userSigninReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))
)
export default store