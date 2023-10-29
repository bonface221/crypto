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

const footerLinks = {
  company: ["About", "Careers", "Press", "News", "Merch"],
  privacy: [
    "Privacy Policy and Terms of Service",
    "CoinFlip Privacy Policy",
    "CoinFlip Biometrics Privacy Policy",
    "CoinFlip Financial Privacy Notice",
    "CoinFlip Terms of Service",
    "CoinFlip Trade Desk Terms of Service",
  ],
};

const Footer = () => {
  return (
    <Box as="footer" pos="relative">
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        mx={{ base: "15px", sm: "40px", md: "70px", lg: "90px", xl: "130px" }}
        py="100px"
      >
        <Stack align="flex-start" gap="32px">
          <Text color="brand.gray">
            CoinFlip, the world&apos;s leading bitcoin ATM operator, makes it so
            flippin&apos; easy to buy and sell bitcoin via cash, card, or bank
            transfer.
          </Text>
          <Text color="brand.gray">
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
          <Text color="brand.gray">© 2021 GPD Holdings, LLC FinCEN MSB</Text>
        </Stack>
        <Stack align="center" gap="24px">
          <Text color="brand.gray" fontWeight={600}>
            Company
          </Text>
          {footerLinks.company.map((link) => (
            <Text color="brand.gray" key={link}>
              {link}
            </Text>
          ))}
        </Stack>
        <Stack align="center">
          <Stack gap="24px">
            <Text color="brand.gray" fontWeight={600}>
              Privacy Policy and Terms of Service
            </Text>
            {footerLinks.privacy.map((link) => (
              <Text color="brand.gray" key={link}>
                {link}
              </Text>
            ))}
          </Stack>
        </Stack>
      </SimpleGrid>

      <Box pos="absolute" transform="translate(0%,0%)" bottom={0} left={0}>
        <Image
          src="/footer-overlay.svg"
          alt="cta-4-gradient"
          width={562}
          height={830}
          layout="responsive"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default Footer;
