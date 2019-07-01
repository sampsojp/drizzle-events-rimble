import React from "react";
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";

import {
    Card,
    Box,
    Text,
    Heading,
    Pill
} from "rimble-ui";

const { ContractData } = newContextComponents;

const renderString2 = data => (
    <Text.p>
        This is the current value of String 2:
        <Text.span
            bold
            fontWeight="700"
        >&nbsp;
            {data}
        </Text.span>
    </Text.p>
);

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
                        <Heading.h4>ComplexStorage Contract</Heading.h4>
                        <Text.p>
                            This contract shows data types with additional considerations.
                            Note in the code the strings below are converted from bytes to
                            UTF-8 strings and the device data struct is iterated as a list.
                        </Text.p>

                        <Card
                            borderRadius={2}
                            bg="#f7f7fb"
                        >
                            <Box>
                                <Pill
                                    bold
                                    fontWeight="700"
                                >
                                    String 1
                                </Pill>
                            </Box>
                            <Box>
                                <Text>
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="ComplexStorage"
                                        method="string1"
                                        toUtf8
                                        render={data => (
                                            <Text.p>
                                                This is the current value of String 1:
                                                <Text.span
                                                    bold
                                                    fontWeight="700"
                                                >&nbsp;
                                                    {data}
                                                </Text.span>
                                            </Text.p>
                                        )}
                                    />
                                </Text>
                            </Box>
                        </Card>

                        <Card
                            borderRadius={2}
                            bg="#f7f7fb"
                        >
                            <Box>
                                <Pill
                                    bold
                                    fontWeight="700"
                                >
                                    String 2
                                </Pill>
                            </Box>
                            <Box>
                                <Text>
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="ComplexStorage"
                                        method="string2"
                                        toUtf8
                                        render={renderString2}
                                    />
                                </Text>
                            </Box>
                        </Card>

                        <Card
                            borderRadius={2}
                            bg="#f7f7fb"
                        >
                            <Box>
                                <Pill
                                    bold
                                    fontWeight="700"
                                >
                                    Single Device Data
                                </Pill>
                            </Box>
                            <Box>
                                <Text>
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="ComplexStorage"
                                        method="singleDD"
                                        render={displayData => {
                                            var i = 0;
                                            const displayObjectProps = [];
                                            Object.keys(displayData).forEach(key => {
                                                if (i !== key) {
                                                    displayObjectProps.push(
                                                        <li key={i}>
                                                            Element {i} has key: {key}
                                                            <br />
                                                            and value: {`${displayData[key]}`}
                                                        </li>
                                                    );
                                                }

                                                i++;
                                            });
                                            return <ol>{displayObjectProps}</ol>;
                                        }}
                                    />
                                </Text>
                            </Box>
                        </Card>

                        <Card
                            borderRadius={2}
                            bg="#f7f7fb"
                        >
                            <Box>
                                <Pill
                                    bold
                                    fontWeight="700"
                                >
                                    Array of UInts
                                </Pill>
                            </Box>
                            <Box>
                                <Text>
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="ComplexStorage"
                                        method="getUintarray"
                                        render={displayData => (
                                            <ol>
                                                {displayData.map(v => (
                                                    <li key={v}>
                                                        value: {v}
                                                    </li>
                                                ))}
                                            </ol>
                                        )}
                                    />
                                </Text>
                            </Box>
                        </Card>

                    </Card>
                </Box>
            );
        }}
    </DrizzleContext.Consumer>
);
