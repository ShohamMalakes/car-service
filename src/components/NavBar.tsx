import { Link, Box, Flex, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="teal.500"
      color="white"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 1)"
    >
      <Flex align="center" mr={5}>
        <Link href="#">Your Logo</Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={() => {}}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link href="#" mr={5}>
          Home
        </Link>
        <Link href="#" mr={5}>
          About
        </Link>
        <Link href="#" mr={5}>
          Contact
        </Link>
      </Box>

      <Box>
        <Button bg="transparent" border="1px">
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
}
export default Navbar;
