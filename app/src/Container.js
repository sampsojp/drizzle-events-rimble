import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";

import { Flex, Box, ThemeProvider, theme } from "rimble-ui";

import Header from "./components/Header";
import ActiveAccount from "./components/ActiveAccount";
import SimpleStorage from "./components/SimpleStorage";
import TutorialToken from "./components/TutorialToken";
import ComplexStorage from "./components/ComplexStorage";

const dappTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'salmon',
  },
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider  theme={dappTheme}>
        <Flex px={30} flexBasis="auto" flexDirection="column">
          <Box>
            <Header />
          </Box>
          <Box>
            <ActiveAccount />
          </Box>
          <Box>
            <SimpleStorage />
          </Box>
          <ToastContainer />
          <Box>
            <TutorialToken />
          </Box>
          <Box>
            <ComplexStorage />
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}
