import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const CTA = () => {
  return (
    <Box>
      <Flex py={{ base: "60px", sm: "140px" }} justify="center" align="center">
        <Stack
          maxW="700px"
          align="center"
          gap={{ base: "16px", sm: "22px" }}
          zIndex={999}
        >
          <Heading
            color="brand.white"
            textAlign="center"
            fontSize={{ base: "30px", sm: "60px" }}
            fontWeight={900}
            lineHeight={{ base: "40px", sm: "70px" }}
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
      </Flex>
    </Box>
  );
};

export default CTA;
