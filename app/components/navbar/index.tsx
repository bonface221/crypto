import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <HStack py="20px" justify="space-between">
      <Flex align="center" gap={3}>
        <Image src="/logo.svg" alt="logo" width="50" height="50" />
        <Text fontWeight={700} fontSize="24px">
          Crypto
        </Text>
      </Flex>
      <Flex
        fontSize="18px"
        fontStyle="normal"
        color="brand.white"
        fontWeight={600}
        gap="32px"
      >
        <Link href="">Buy/Sell</Link>
        <Link href="">Grow</Link>
        <Link href="">Business</Link>
        <Link href="">Support</Link>
      </Flex>
      <Flex gap="12px" align="center">
        <Button
          borderRadius="10px"
          border="1px solid #ffff"
          p="12px 21px"
          fontSize="16px"
          fontWeight={600}
          lineHeight="16px"
          bg="transparent"
          color="brand.white"
        >
          Sign in
        </Button>
        <Button
          borderRadius="10px"
          color="brand.white"
          bg="brand.gradient"
          p="12px 21px"
          fontSize="16px"
          fontWeight={600}
          lineHeight="16px"
        >
          Sign up
        </Button>
      </Flex>
    </HStack>
  );
};

export default Navbar;
