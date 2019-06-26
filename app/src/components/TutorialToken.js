import React from 'react'
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";

import {
    Card,
    Box,
    Flex,
    Text,
    Heading,
    Input,
    Button
} from 'rimble-ui'

const { ContractData, ContractForm } = newContextComponents;

export default () => (
    <DrizzleContext.Consumer>
        {drizzleContext => {
            const { drizzle, drizzleState, initialized } = drizzleContext;
            if (!initialized) {
                return "Loading...";
            }

            const { accounts } = drizzleState;
            return (
                <Box mb={20}>
                    <Card bg="#fff">
                        <Heading.h4>TutorialToken Contract</Heading.h4>
                        <Text.p>
                            Here we have a form with custom, friendly labels. Also note the
                            token symbol will not display a loading indicator. We've
                            suppressed it with the <code>hideIndicator</code> prop because we
                            know this variable is constant.
                        </Text.p>

                        <Flex mt={2}>
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                >
                                    Total Supply:
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                    color="red"
                                >&nbsp;
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="TutorialToken"
                                        method="totalSupply"
                                        methodArgs={[{ from: accounts[0] }]}
                                    />{" "}
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="TutorialToken"
                                        method="symbol"
                                        hideIndicator
                                    />
                                </Text>
                            </Box>
                        </Flex>

                        <Flex mt={2}>
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                >
                                    My Balance:
                            </Text>
                            </Box>
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                    color="red"
                                >&nbsp;
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="TutorialToken"
                                        method="balanceOf"
                                        methodArgs={[accounts[0]]}
                                    />
                                </Text>
                            </Box>
                        </Flex>

                        <Flex
                            mt={2}
                            flexBasis="auto"
                            flexDirection="column"
                        >
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                >
                                    Send Tokens:
                            </Text>
                            </Box>
                            <Box>
                                <Text>
                                    <ContractForm
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="TutorialToken"
                                        method="transfer"
                                        labels={["To Address", "Amount to Send"]}
                                        render={({ inputs, inputTypes, state, handleInputChange, handleSubmit }) => (
                                            <form onSubmit={handleSubmit}>
                                                {inputs.map((input, index) => (
                                                    <Input
                                                        key={input.name}
                                                        type={inputTypes[index]}
                                                        name={input.name}
                                                        value={state[input.name]}
                                                        placeholder="" //how to populate placeholders in form with multiple fields?
                                                        onChange={handleInputChange}
                                                        mr={10}
                                                    />
                                                ))}
                                                <Button
                                                    icon="Send"
                                                    iconOnly
                                                    key="submit"
                                                    type="button"
                                                    onClick={handleSubmit}
                                                    position="relative"
                                                    top={8}
                                                />
                                            </form>
                                        )}
                                    />
                                </Text>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
            );
        }}
    </DrizzleContext.Consumer>
);
