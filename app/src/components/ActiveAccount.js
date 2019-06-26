import React from 'react'
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";

import {
    Card,
    Box,
    PublicAddress,
    Text,
    Heading
} from 'rimble-ui'

const { AccountData } = newContextComponents;

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
                        <Heading.h4>Active Account</Heading.h4>
                        <AccountData
                            drizzle={drizzle}
                            drizzleState={drizzleState}
                            accountIndex="0"
                            units="ether"
                            precision="3"
                            render={({ address, balance, units }) => (
                                <Box
                                    mt={3}
                                    width={[
                                        1,
                                        1,
                                        0.5
                                    ]}
                                >
                                    <PublicAddress color="red" address={address} />
                                    <Text
                                        bold
                                        fontWeight="700"
                                        ml={1}
                                    >
                                        My Ether:
                                        <Text.span
                                            bold
                                            fontWeight="700"
                                            color="red"
                                        >&nbsp;{balance}</Text.span> {units}
                                    </Text>
                                </Box>
                            )}
                        />
                    </Card>
                </Box>
            );
        }}
    </DrizzleContext.Consumer>
);
