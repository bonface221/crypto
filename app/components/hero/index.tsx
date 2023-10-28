import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Navbar from "../navbar";

const Hero = () => {
  return (
    <Box bgImage="/home-bg.svg" bgSize="cover" backgroundPosition="center">
      <Stack mx="130px" minH="110vh">
        <Navbar />
        <Grid templateRows="repeat(5, auto)" flex="1">
          <GridItem gridRowStart={2} justifySelf="center">
            <Stack maxW="700px" align="center" gap="40px">
              <Heading
                color="brand.white"
                fontSize="85px"
                fontWeight={900}
                lineHeight="110.5px"
                fontStyle="normal"
              >
                We make crypto clear and simple
              </Heading>
              <Button
                borderRadius="10px"
                color="brand.white"
                w="fit-content"
                bg="brand.gradient"
                p="12px 21px"
                fontSize="16px"
                fontWeight={600}
                lineHeight="16px"
              >
                Get Started
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Hero;
