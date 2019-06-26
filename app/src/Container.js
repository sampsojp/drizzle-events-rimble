import React, { Component, } from 'react';

import {
  Flex,
  Box,
  ThemeProvider
} from 'rimble-ui';

import Header from "./components/Header"
import ActiveAccount from "./components/ActiveAccount"
import SimpleStorage from "./components/SimpleStorage"
import TutorialToken from './components/TutorialToken';
import ComplexStorage from './components/ComplexStorage';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Flex
          px={30}
          flexBasis="auto"
          flexDirection="column"
        >
          <Box>
            <Header />
          </Box>
          <Box>
            <ActiveAccount />
          </Box>
          <Box>
            <SimpleStorage />
          </Box>
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
