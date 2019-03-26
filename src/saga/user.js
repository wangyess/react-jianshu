import { takeEvery } from 'redux-saga/effects'

function* kks(){
    yield console.log("hello saga")
}

function* watchChange(){
    yield takeEvery('add-item',kks)
}

export const userSaga = [
    watchChange()
]