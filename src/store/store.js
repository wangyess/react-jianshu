import { createStore ,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '../saga/saga'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(sagaMiddleware,logger)
))

sagaMiddleware.run(rootSaga)

export default store