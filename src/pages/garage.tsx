import { useUser } from "@auth0/nextjs-auth0/client";
import { Flex, Heading } from "@chakra-ui/react";
import MyCarCard from "../components/myCarCard";
import Navbar from "../components/NavBar";

function Garage() {
  const { user } = useUser();
  return (
    <>
      <Navbar />
      <Flex justify="center" h={"54vh"} dir={"column"}>
        <Flex alignItems={"center"} h={"10vh"}>
          {/* <Heading>GARAGE</Heading> */}
        </Flex>
        <MyCarCard />
      </Flex>
    </>
  );
}
export default Garage;
