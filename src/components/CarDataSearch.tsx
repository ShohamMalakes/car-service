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

function CarDataSearch() {
  const [carNumber, setCarNumber] = useState<string>();
  const [carData, setCarData] = useState<BasicVehicle>();

  const { data, refetch } = api.vehicle.getData.useQuery(
    {
      license_plate: carNumber!,
    },
    {
      onSuccess(response) {
        setCarData(response.basicData);
      },
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const carNumberLenghth = carNumber?.length;
  return (
    <>
      <Flex justify={"center"}>
        <Box
          boxSize={"sm"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Input
            w={"90%"}
            h={"21.5%"}
            min={5}
            max={8}
            textColor={"black"}
            value={carNumber}
            textAlign={"center"}
            bgImage={carPlateImg.src}
            fontSize={"3xl"}
            placeholder={"12-345-67"}
            _placeholder={{ color: "black" }}
            fontWeight={"bold"}
            focusBorderColor={"none"}
            id={"carNumber"}
            onChange={(e) => setCarNumber(e.target.value)}
          ></Input>
          <Button
            isDisabled={
              !carNumber || carNumberLenghth! < 5 || carNumberLenghth! > 8
            }
            onClick={refetch}
          >
            מצא רכב
          </Button>
          {(carNumberLenghth! < 5 || carNumberLenghth! > 8) && (
            <Text>מספר רכב צריך להיות בין 5-8 תווים</Text>
          )}
          <Button isDisabled>הוסף לרכבים שלי</Button>
        </Box>
      </Flex>
      <Flex
        h={"55%"}
        w={"100%"}
        // bg={"red"}
        border={"2px"}
        borderRadius={"4px"}
        dir={"rtl"}
        justifyContent={"space-around"}
        overflowX={"hidden"}
      >
        {/* <ScaleFade
              initialScale={0.9}
              in={inViewport}
              whileHover={{ scale: 1.1 }}
            > */}
        <HStack spacing={"6em"}>
          <Card boxSize={"md"} bg={"gray.500"} p={"5"}>
            <Heading textAlign={"center"}>מפרט טכני ואבזור</Heading>
            <Grid
              p={"5"}
              h={"100%"}
              justifyContent={"center"}
              textAlign={"center"}
              templateRows="repeat(5,1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem>
                <Text>דגם מנוע</Text>
                <Text>{carData?.degem_manoa}</Text>
              </GridItem>
              <GridItem>
                <Text>סוג דלק</Text>
                <Text>{carData?.sug_delek_nm}</Text>
              </GridItem>
              <GridItem>
                <Text>צמיג קדמי</Text>
                <Text>{carData?.zmig_kidmi}</Text>
              </GridItem>
              <GridItem>
                <Text>צמיג אחורי</Text>
                <Text>{carData?.zmig_ahori}</Text>
              </GridItem>
            </Grid>
          </Card>
          <Card boxSize={"md"} bg={"gray.500"} p={"5"}>
            <Heading textAlign={"center"}> פרטי הרכב</Heading>
            <Grid
              p={"5"}
              h={"100%"}
              justifyContent={"center"}
              textAlign={"center"}
              templateRows="repeat(5,1fr)"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem>
                <Text>יצרן</Text>
                <Text>{carData?.tozeret_nm}</Text>
              </GridItem>
              <GridItem>
                <Text>דגם</Text>
                <Text>{carData?.kinuy_mishari}</Text>
              </GridItem>
              <GridItem>
                <Text>שנת ייצור</Text>
                <Text>{carData?.shnat_yitzur}</Text>
              </GridItem>
              <GridItem>
                <Text>רמת גימור</Text>
                <Text>{carData?.ramat_gimur}</Text>
              </GridItem>
              <GridItem>
                <Text>תאריך מבחן אחרון</Text>
                <Text>{carData?.mivchan_acharon_dt}</Text>
              </GridItem>
              <GridItem>
                <Text>תוקף רישוי</Text>
                <Text>{carData?.tokef_dt}</Text>
              </GridItem>
              <GridItem>
                <Text>בעלות</Text>
                <Text>{carData?.baalut}</Text>
              </GridItem>
              <GridItem>
                <Text>מספר שלדה</Text>
                <Text>{carData?.misgeret}</Text>
              </GridItem>
              <GridItem>
                <Text>מספר רכב</Text>
                <Text>{carData?.mispar_rechev}</Text>
              </GridItem>
              <GridItem>
                <Text>קוד דגם</Text>
                <Text>{carData?.degem_nm}</Text>
              </GridItem>
              <GridItem>
                <Text>קוד משרד התחבורה</Text>
                <Text>{carData?.tozeret_cd}</Text>
              </GridItem>
            </Grid>
          </Card>
          <Card boxSize={"md"} bg={"green"}>
            3
          </Card>
        </HStack>
        {/* </ScaleFade> */}

        <GridItem>
          <Text></Text>
          <Text>{carData?.degem_cd}</Text>
        </GridItem>
        <GridItem>
          <Text></Text>
          <Text>{carData?.horaat_rishum}</Text>
        </GridItem>
        <GridItem>
          <Text>קבוצת זיהום</Text>
          <Text>{carData?.kvutzat_zihum}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.moed_aliya_lakvish}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.ramat_eivzur_betihuty}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.rank}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.sug_degem}</Text>
        </GridItem>
        <GridItem>
          <Text>{carData?.tzeva_cd}</Text>
        </GridItem>
        <GridItem>
          <Text>צבע הרכב</Text>
          <Text>{carData?.tzeva_rechev}</Text>
        </GridItem>
      </Flex>
    </>
  );
}

export default CarDataSearch;
