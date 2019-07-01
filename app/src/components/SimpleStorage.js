import React from "react";
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    Button,
    Card,
    Box,
    Flex,
    Text,
    Heading,
    Input,
    Checkbox
} from "rimble-ui";

const { ContractData, ContractForm } = newContextComponents;

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return "Loading...";
      }

      return (
        <Box mb={20}>
          <Card bg="#fff">
            <ToastContainer />
            <Heading.h4>SimpleStorage Contract</Heading.h4>
            <Text.p>
              These examples show a simple ContractData component with no
              arguments, a custom rendered ContractForm to set the value, as
              well as viewing and setting a boolean value.
            </Text.p>

            <Flex mt={2}>
              <Box>
                <Text 
                    bold 
                    fontWeight="700"
                >
                  Current stored value:
                </Text>
              </Box>
              <Box>
                  <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract="SimpleStorage"
                    method="storedData"
                    render={data => <Text
                                      bold
                                      fontWeight="700"
                                      color="red">&nbsp;{data}
                                    </Text>}
                  />
              </Box>
            </Flex>

            <Flex mb={4}>
              <Box>
                <ContractForm
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  contract="SimpleStorage"
                  method="set"
                  render={({
                    inputs,
                    inputTypes,
                    state,
                    handleInputChange,
                    handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                      {inputs.map((input, index) => (
                        <Input
                          key={input.name}
                          type={inputTypes[index]}
                          name={input.name}
                          value={state[input.name]}
                          placeholder="Input new value here"
                          onChange={handleInputChange}
                          mr={10}
                        />
                      ))}
                      <Button
                        icon="Send"
                        key="submit"
                        type="button"
                        onClick={handleSubmit}
                        position="relative"
                        top={8}
                      >
                        Submit
                      </Button>
                    </form>
                  )}
                />
              </Box>
            </Flex>

            <Flex mb={10}>
              <Box>
                <Text bold fontWeight="700">
                  Current stored boolean value:{" "}
                </Text>
              </Box>
              <Box>
                <Text bold fontWeight="700" color="red">
                  &nbsp;
                  <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract="SimpleStorage"
                    method="storedBool"
                  />
                </Text>
              </Box>
            </Flex>

            <Flex flexBasis="auto" flexDirection="row">
              <Box mr={2}>
                <Text bold fontWeight="700">
                  Set boolean value:{" "}
                </Text>
              </Box>
              <Box>
                <ContractForm
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  contract="SimpleStorage"
                  method="setBool"
                  render={({
                    inputs,
                    inputTypes,
                    state,
                    handleInputChange,
                    handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                      {inputs.map((input, index) => (
                        <Checkbox
                          key={input.name}
                          type={inputTypes[index]}
                          name={input.name}
                          value={state[input.name]}
                          onChange={handleInputChange}
                        />
                      ))}
                      <Button
                        icon="Send"
                        iconOnly
                        key="submit"
                        type="button"
                        onClick={handleSubmit}
                        position="relative"
                        size="small"
                      >
                        Submit
                      </Button>
                    </form>
                  )}
                />
              </Box>
            </Flex>
          </Card>
        </Box>
      );
    }}
  </DrizzleContext.Consumer>
);
