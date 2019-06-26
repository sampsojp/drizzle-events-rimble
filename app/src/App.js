import React, { Component } from "react";
import { Drizzle } from 'drizzle';
import { DrizzleContext } from "drizzle-react";

import drizzleOptions from "./drizzleOptions";
import Container from "./Container";

const drizzle = new Drizzle(drizzleOptions);

class App extends Component {
  render() {
    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <Container />
      </DrizzleContext.Provider>
    );
  }
}

export default App;
