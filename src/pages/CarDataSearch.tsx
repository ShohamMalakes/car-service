import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  ScaleFade,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BasicVehicle, TechnicalVehicle } from "../types/Vehicle";
import { api } from "../utils/api";
import carPlateImg from "../images/car_plate1.png";
import { AnimatePresence, motion } from "framer-motion";
import CarDataCard from "../components/CarDataCard";

function CarDataSearch() {
  const [carNumber, setCarNumber] = useState<string>();
  const [carData, setCarData] = useState<BasicVehicle>();
  const [technicalCarData, setTechnicalCarData] = useState<TechnicalVehicle>();
  const MotionFlex = motion(Flex);

  const { data, refetch } = api.vehicle.getData.useQuery(
    {
      license_plate: carNumber!,
    },
    {
      onSuccess(response) {
        setCarData(response.basicData);
        setTechnicalCarData(response.technicalData);
      },
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const carNumberLength = carNumber?.length;
  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        h={"37vh"}
      >
        <Input
          w={"346px"}
          h={"81px"}
          min={5}
          max={8}
          textColor={"black"}
          value={carNumber}
          textAlign={"center"}
          bgImage={carPlateImg.src}
          fontSize={"5xl"}
          placeholder={"12-345-67"}
          _placeholder={{ color: "black", opacity: 0.5 }}
          fontWeight={"bold"}
          focusBorderColor={"none"}
          autoComplete={"off"}
          id={"carNumber"}
          onChange={(e) => setCarNumber(e.target.value)}
        ></Input>
        <Flex h={"30%"} w={"100%"} gap={"10%"} justifyContent={"center"}>
          <Button
            bgColor={"blue.500"}
            color={"#FEFFFF"}
            isDisabled={
              !carNumber || carNumberLength! < 5 || carNumberLength! > 8
            }
            onClick={refetch}
          >
            מצא רכב
          </Button>
          <Button isDisabled bgColor={"blue.500"} color={"#FEFFFF"}>
            הוסף לרכבים שלי
          </Button>
        </Flex>
        {(carNumberLength! < 5 || carNumberLength! > 7) && (
          <Text color={"#FEFFFF"}>מספר רכב צריך להיות בין 5-8 תווים</Text>
        )}
      </Flex>
      {carData && technicalCarData && (
        <CarDataCard carData={carData} technicalCarData={technicalCarData} />
      )}
    </>
  );
}

export default CarDataSearch;
