"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
  {
    name: "Buy/Sell",
    href: "",
  },
  {
    name: "Grow",
    href: "",
  },
  {
    name: "Business",
    href: "",
  },
  {
    name: "Support",
    href: "",
  },
];

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        display={{ base: "block", lg: "none" }}
        as={RxHamburgerMenu}
        onClick={onOpen}
        w="30px"
        h="30px"
        color="brand.white"
        bg="none"
        _hover={{ background: "none" }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="brand.gray">
          <DrawerCloseButton
            color="red"
            w="48px"
            h="48px"
            _focus={{
              color: "brand.white",
              boxShadow: "none",
              border: "none",
              outline: "none",
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5}>
            <Stack
              direction="column"
              align="flex-start"
              fontWeight="bold"
              lineHeight="44px"
              fontSize="18px"
              fontStyle="normal"
              color="brand.white"
            >
              {navItems.map((item) => (
                <Text
                  key={item.name}
                  as="a"
                  href={item.href}
                  _hover={{
                    color: "brand.main",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onClose();
                  }}
                >
                  {item.name}
                </Text>
              ))}

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
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
