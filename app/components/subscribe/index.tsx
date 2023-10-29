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
    <Flex justify="center" align="center" pt="50px" pb="120px">
      <Stack maxW="700px" gap="32px" align="center">
        <Heading
          color="brand.white"
          textAlign="center"
          fontSize="50px"
          fontWeight={900}
          lineHeight="65px"
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
            // boxShadow="0px 2px 2px 0px rgba(255, 255, 255, 0.15) inset, 0px 0px 30px 0px rgba(255, 255, 255, 0.05) inset"
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
