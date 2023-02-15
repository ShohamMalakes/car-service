import {
  Link,
  Box,
  Flex,
  Button,
  Image,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
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
      <Flex
        h={"5vh"}
        align="center"
        mr={5}
        bg={"black"}
        w={"140px"}
        borderRadius={"4px"}
      >
        <Link
          href="/"
          style={{ textDecoration: "none" }}
          alignSelf={"center"}
          bg="transparent"
        >
          <Image h={"150px"} src={carServiceLogo.src}></Image>
        </Link>
      </Flex>

      {!user ? (
        <Link
          href="/api/auth/login"
          style={{ textDecoration: "none" }}
          alignSelf={"center"}
          bg="transparent"
        >
          <Button border={"2px"}>התחבר</Button>
        </Link>
      ) : (
        <>
          <Menu direction="rtl">
            <MenuButton as={Button} colorScheme="none">
              <Avatar src={user.picture}></Avatar>
            </MenuButton>
            <MenuList dir="rtl">
              <MenuGroup title={user.name}>
                <MenuItem>פרופיל</MenuItem>
                <Link
                  href="/garage"
                  style={{ textDecoration: "none" }}
                  alignSelf={"center"}
                  bg="transparent"
                >
                  <MenuItem>הרכבים שלי</MenuItem>
                </Link>
                <Link
                  href="/"
                  style={{ textDecoration: "none" }}
                  alignSelf={"center"}
                  bg="transparent"
                >
                  <MenuItem>חיפוש רכב</MenuItem>
                </Link>
                <MenuDivider />
                <Link
                  href="/api/auth/logout"
                  style={{ textDecoration: "none" }}
                  alignSelf={"center"}
                  bg="transparent"
                >
                  <MenuItem>התנתק </MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </Menu>
        </>
      )}
    </Flex>
    // </Flex>
  );
}
export default Navbar;
