import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const CTA = () => {
  return (
    <Box
    // bgImage="/cta-bg.png"
    // bgRepeat="no-repeat"
    // bgPos="100% 50%"
    // bgSize="contain"
    >
      <Flex py="140px" justify="center" align="center">
        <Stack maxW="700px" align="center" gap="16px">
          <Heading
            color="brand.white"
            textAlign="center"
            fontSize="50px"
            fontWeight={900}
            lineHeight="65px"
            fontStyle="normal"
          >
            A cryto mining platform that invest in you
          </Heading>
          <Text color="brand.gray" w="90%" bg="16px" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor
          </Text>
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
      </Flex>
    </Box>
  );
};

export default CTA;
