import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";
import CarDataSearch from "../components/CarDataSearch";
import Navbar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import Login from "../components/Login";

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <Navbar />
        <CarDataSearch />
        {/* <Login /> */}
      </Box>
    </>
  );
};

export default Home;
