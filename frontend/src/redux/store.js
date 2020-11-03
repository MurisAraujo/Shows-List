import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import editShowReducer from './editShow/editShowReducer';
import editModalReducer from './editModal/editModalReducer';
import contentUpdateReducer from './contentUpdate/contentUpdateReducer';
import createModalReducer from './createModal/createModalReducer';


const rootReducer = combineReducers({
  editShow: editShowReducer,
  modalVisi: editModalReducer,
  update: contentUpdateReducer,
  createModal: createModalReducer,
});

const persistConfig = {
  key: 'primary',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);