import React, { Component } from "react";
import { Drizzle } from 'drizzle';
import { DrizzleContext } from "drizzle-react";

import drizzleOptions from "./drizzleOptions";
import Container from "./Container";
import store from './middleware'

const drizzle = new Drizzle(drizzleOptions);

class App extends Component {
  render() {
    return (
      <DrizzleContext.Provider drizzle={drizzle} store={store}>
        <Container />
      </DrizzleContext.Provider>
    );
  }
}

export default App;
