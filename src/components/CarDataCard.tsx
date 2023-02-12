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
import React, { useEffect, useRef, useState } from "react";
import { BasicVehicle, TechnicalVehicle } from "../types/Vehicle";
import { api } from "../utils/api";
import carPlateImg from "../images/car_plate1.png";
import { AnimatePresence, motion } from "framer-motion";

function CarDataCard() {
  const [carNumber, setCarNumber] = useState<string>();
  const [carData, setCarData] = useState<BasicVehicle>();
  const [technicalCarData, setTechnicalCarData] = useState<TechnicalVehicle>();
  const MotionFlex = motion(Flex);
  const cards = [
    <>
      <MotionFlex
        minW="700x"
        h="50vh"
        borderRadius={"md"}
        flexDir={"column"}
        bg={"gray.500"}
        p={"5"}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Heading textAlign={"center"}>מפרט טכני ואבזור</Heading>
        <Grid
          p={"5"}
          h={"100%"}
          justifyContent={"center"}
          textAlign={"center"}
          templateRows="repeat(9,1fr)"
          templateColumns="repeat(2, 1fr)"
          overflowY={"scroll"}
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
          <GridItem>
            <Text>תיבת הילוכים</Text>
            {carData && (
              <Text>
                {technicalCarData?.automatic_ind === "0" ? "ידנית" : "אוטומטית"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>נפח מנוע</Text>
            <Text>{technicalCarData?.nefah_manoa}</Text>
          </GridItem>
          <GridItem>
            <Text>כוח סוס</Text>
            <Text>{technicalCarData?.koah_sus}</Text>
          </GridItem>
          <GridItem>
            <Text>הנעה</Text>
            <Text>{technicalCarData?.hanaa_nm}</Text>
          </GridItem>
          <GridItem>
            <Text>טכנולוגיית הנעה</Text>
            <Text>{technicalCarData?.technologiat_hanaa_nm}</Text>
          </GridItem>
          <GridItem>
            <Text>מספר חלונות חשמל</Text>
            <Text>{technicalCarData?.mispar_halonot_hashmal}</Text>
          </GridItem>
          <GridItem>
            <Text>חלון בגג</Text>
            {carData && (
              <Text>
                {technicalCarData?.halon_bagg_ind === "0" ? "אין" : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text> חישוקי סגסוגת</Text>
            {carData && (
              <Text>
                {technicalCarData?.galgaley_sagsoget_kala_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>חיישני לחץ אוויר</Text>
            {carData && (
              <Text>
                {technicalCarData?.hayshaney_lahatz_avir_batzmigim_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>מצלמת רוורס מקורית</Text>
            {carData && (
              <Text>
                {technicalCarData?.matzlemat_reverse_ind === "0" ? "אין" : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>מספר דלתות</Text>
            <Text>{technicalCarData?.mispar_dlatot}</Text>
          </GridItem>
          <GridItem>
            <Text>משקל כולל</Text>
            <Text>{technicalCarData?.mishkal_kolel}</Text>
          </GridItem>
          <GridItem>
            <Text>כושר גרירה בלי בלמים</Text>
            <Text>{technicalCarData?.kosher_grira_bli_blamim}</Text>
          </GridItem>
          <GridItem>
            <Text>כושר גרירה עם בלמים</Text>
            <Text>{technicalCarData?.kosher_grira_im_blamim}</Text>
          </GridItem>
        </Grid>
      </MotionFlex>
      <MotionFlex
        // w={"full"}
        // h={"50vh"}
        minW="700x"
        h="50vh"
        borderRadius={"md"}
        flexDir={"column"}
        bg={"gray.500"}
        p={"5"}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Heading textAlign={"center"}> פרטי הרכב</Heading>
        <Grid
          p={"5"}
          h={"100%"}
          justifyContent={"center"}
          textAlign={"center"}
          templateRows="repeat(6,1fr)"
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
          <GridItem>
            <Text>צבע הרכב</Text>
            <Text>{carData?.tzeva_rechev}</Text>
          </GridItem>
        </Grid>
      </MotionFlex>
      <MotionFlex
        // w={"35wh"}
        // h={"50vh"}
        minW="700x"
        h="50vh"
        borderRadius={"md"}
        flexDir={"column"}
        bg={"gray.500"}
        p={"5"}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Heading textAlign={"center"}>מערכות בטיחות</Heading>
        <Grid
          p={"5"}
          h={"100%"}
          justifyContent={"center"}
          textAlign={"center"}
          templateRows="repeat(3,1fr)"
          templateColumns="repeat(2, 1fr)"
        >
          <GridItem>
            <Text>מספר כריות אוויר</Text>
            <Text>{technicalCarData?.mispar_kariot_avir}</Text>
          </GridItem>
          <GridItem>
            <Text>מערכת ABS</Text>
            {carData && (
              <Text>{technicalCarData?.abs_ind === "0" ? "אין" : "יש"}</Text>
            )}
          </GridItem>
          <GridItem>
            <Text>בקרת סטייה מנטיב</Text>
            {carData && (
              <Text>
                {technicalCarData?.bakarat_stiya_menativ_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>בקרת יציבות</Text>
            {carData && (
              <Text>
                {technicalCarData?.bakarat_yatzivut_ind === "0" ? "אין" : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>מערכת לניטור מרחק מלפנים</Text>
            {carData && (
              <Text>
                {technicalCarData?.nitur_merhak_milfanim_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>בקרת שיוט אדפטיבית</Text>
            {carData && (
              <Text>
                {technicalCarData?.bakarat_shyut_adaptivit_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
        </Grid>
      </MotionFlex>
    </>,
  ];

  return (
    <>
      {/* {carData && technicalCarData && ( */}
      <AnimatePresence>
        <Flex
          h={"55vh"}
          //   w={"200wh"}
          // bg={"red"}
          border={"2px"}
          borderRadius={"4px"}
          dir={"rtl"}
          justifyContent={"space-around"}
          //   overflowX={"scroll"}
        >
          <HStack
            px="100px"
            spacing={"100px"}
            overflowX={"scroll"}
            w={"full"}
          ></HStack>
          {cards}
        </Flex>
      </AnimatePresence>
      {/* )} */}
    </>
  );
}

export default CarDataCard;
