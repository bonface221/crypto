import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CTA3 = () => {
  return (
    <Flex>
      <Stack align="center" gap="16px">
        <Heading
          color="brand.white"
          textAlign="center"
          fontSize="50px"
          fontWeight={900}
          lineHeight="65px"
          fontStyle="normal"
        >
          Buy and sell with the lowest fees in the industry
        </Heading>
        <Text color="brand.gray" w="90%" bg="16px" textAlign="center" mb="16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sit amet
        </Text>
        <Flex align="center" gap="6px">
          <Text color="brand.purple">Learn More</Text>
          <Image src="/arrow-right.svg" alt="arrow" width={24} height={24} />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default CTA3;
