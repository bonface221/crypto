import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  return (
    <Box as="footer">
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
        py="100px"
      >
        <Stack align="flex-start" gap="32px">
          <Text>
            CoinFlip, the world&apos;s leading bitcoin ATM operator, makes it so
            flippin&apos; easy to buy and sell bitcoin via cash, card, or bank
            transfer.
          </Text>
          <Text>
            Sign up to get the latest in CoinFlip news, discounts, and more.
          </Text>
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
          <Text>© 2021 GPD Holdings, LLC FinCEN MSB</Text>
        </Stack>
        <Stack align="center" gap="32px">
          <Text>Company</Text>
          <Text>About</Text>
          <Text>Careers</Text>
          <Text>Press</Text>
          <Text>News</Text>
          <Text>Merch</Text>
        </Stack>
        <Stack align="center" gap="32px">
          <Stack>
            <Text>Privacy Policy and Terms of Service</Text>
            <Text>CoinFlip Privacy Policy</Text>
            <Text>CoinFlip Biometrics Privacy Policy</Text>
            <Text>CoinFlip Financial Privacy Notice</Text>
            <Text>CoinFlip Terms of Service</Text>
            <Text>CoinFlip Trade Desk Terms of Service</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
