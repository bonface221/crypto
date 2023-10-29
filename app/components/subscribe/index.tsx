import {
  Box,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Subscribe = () => {
  return (
    <Flex
      justify="center"
      align="center"
      pt="50px"
      pb={{ base: "50px", sm: "70px", md: "120px" }}
    >
      <Stack maxW="700px" gap="32px" align="center">
        <Heading
          color="brand.white"
          textAlign="center"
          fontSize={{ base: "30px", sm: "50px" }}
          fontWeight={900}
          lineHeight={{ base: "40px", sm: "65px" }}
          fontStyle="normal"
        >
          Receive transmissions
        </Heading>
        <Flex gap={1} align="center">
          <Text textAlign="center">
            <Box as="span" color="brand.gray">
              Unsubscribe at any time.
            </Box>{" "}
            Privacy policy↗
          </Text>
          <Text></Text>
        </Flex>
        <InputGroup
          maxW="304px"
          border="1px solid linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)"
        >
          <InputRightElement pointerEvents="none">
            <Image
              src="/subscribe-arrow.svg"
              alt="subscribe-arrow"
              width={24}
              height={24}
            />
          </InputRightElement>
          <Input
            backdropFilter=" blur(20px)"
            placeholder="Email Address"
            border="1px solid #18C8FF"
          />
        </InputGroup>
      </Stack>
    </Flex>
  );
};

export default Subscribe;
