import React from 'react';
import { Box, Card, Heading } from 'rimble-ui';

import logo from "../logo.png";

const Header = () => (
    <Box my={4}>
        <Card
            bg="salmon"
            color="white"
        >
            <img src={logo} alt="drizzle-logo" />
            <Heading.h1>
                Drizzle Examples
            </Heading.h1>
            <Heading.h4>
                Examples of how to get started with Drizzle + Rimble UI design elements.
            </Heading.h4>
        </Card>
    </Box>
);

export default Header;