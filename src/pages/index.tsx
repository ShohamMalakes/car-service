import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";
import CarDataSearch from "./CarDataSearch";
import Navbar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <Navbar />
        <CarDataSearch />
        {/* <Garage /> */}
      </Box>
    </>
  );
};

export default Home;
