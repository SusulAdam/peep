import * as React from "react";
import { Provider } from "react-redux";
import { Navigation } from "./src/components";
import { store } from "./src/redux/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
