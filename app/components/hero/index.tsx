import { Box, Button, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import Navbar from "../navbar";

const Hero = () => {
  return (
    <Box
      bgImage="/home-bg.svg"
      bgSize="cover"
      bgRepeat="no-repeat"
      backgroundPosition={{ base: "left", sm: "center top" }}
    >
      <Stack
        mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
        minH={{ base: "85vh", md: "100vh" }}
      >
        <Navbar />
        <Grid templateRows="repeat(7, auto)" flex="1">
          <GridItem gridRowStart={3} justifySelf="center">
            <Stack maxW="700px" align="center" gap="40px">
              <Heading
                color="brand.white"
                textAlign="center"
                fontSize={{ base: "40px", sm: "60px", md: "85px" }}
                fontWeight={900}
                lineHeight={{ base: "60px", md: "110px" }}
                fontStyle="normal"
              >
                We make crypto clear and simple
              </Heading>
              <Button
                borderRadius="10px"
                color="brand.white"
                bg="brand.gradient"
                p="12px 21px"
                fontSize="16px"
                fontWeight={600}
                lineHeight="16px"
                border="1px solid"
                borderColor="transparent"
                _hover={{
                  bg: "transparent",
                  border: "1px solid #ffff",
                }}
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
