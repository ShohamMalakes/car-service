import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";
import CarDataSearch from "../components/CarDataSearch";

const Home: NextPage = () => {
  return (
    <>
      <CarDataSearch />
    </>
  );
};

export default Home;
