import { Link, Box, Flex, Button, Image } from "@chakra-ui/react";
import carServiceLogo from "../images/car_service_logo1.png";
import { useUser } from "@auth0/nextjs-auth0/client";
function Navbar() {
  const { user } = useUser();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="teal.500"
      color="white"
      h={"9vh"}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 1)"
    >
      <Flex h={"5vh"} align="center" mr={5}>
        <Image h={"150px"} src={carServiceLogo.src}></Image>
      </Flex>

      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <a href="/api/auth/logout">Logout</a>
      )}
      {/* <Box display={{ base: "block", md: "none" }} onClick={() => {}}></Box> */}
      {/* 
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
      </Box> */}

      <Box>
        <Button alignSelf={"center"} bg="transparent" border="1px">
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
}
export default Navbar;
