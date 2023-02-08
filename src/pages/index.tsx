import { type NextPage } from "next";
import { useEffect } from "react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const data = api.vehicle.getData.useQuery({ license_plate: "4430086" });

  useEffect(() => {
    console.log(data.data);
  }, [data]);

  return (
    <>
      <button>call me</button>
    </>
  );
};

export default Home;

