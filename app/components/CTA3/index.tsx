import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CTA3 = () => {
  return (
    <Box py={{ base: "70px", sm: "100px" }} position="relative">
      <Box pos="absolute" transform="translate(0%,-60%)" top="50%" right={0}>
        <Image
          src="/cta-3-overlay.svg"
          alt="cta-4-gradient"
          width={590}
          height={1000}
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Flex
        justify="center"
        align="center"
        mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
      >
        <Stack maxW="700px" align="center" gap="16px" zIndex={999}>
          <Heading
            color="brand.white"
            textAlign="center"
            fontSize={{ base: "30px", sm: "50px" }}
            fontWeight={900}
            lineHeight={{ base: "40px", sm: "65px" }}
            fontStyle="normal"
          >
            Buy and sell with the lowest fees in&apos;the industry
          </Heading>
          <Text
            color="brand.gray"
            w="90%"
            bg="16px"
            textAlign="center"
            mb="16px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sit amet
          </Text>
          <Flex align="center" gap="6px">
            <Text color="brand.purple">Learn More</Text>
            <Image src="/arrow-right.svg" alt="arrow" width={24} height={24} />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default CTA3;
