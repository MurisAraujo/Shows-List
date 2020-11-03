import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { GlobalStyle } from "./GlobalStyle";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}

export default App;
