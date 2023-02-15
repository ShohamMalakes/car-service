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

type Props = {
  carData: BasicVehicle;
  technicalCarData: TechnicalVehicle;
  carNumber: string;
};
const CarDataCard: React.FunctionComponent<Props> = (props) => {
  const MotionFlex = motion(Flex);
  const { data, isLoading, isError, error } = api.vehicle.getData.useQuery({
    license_plate: "",
  });
  const cards = [
    <>
      <MotionFlex
        minW="350px"
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
          // h={"100%"}
          justifyContent={"center"}
          textAlign={"center"}
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#FEFFF",
              borderRadius: "24px",
            },
          }}
          templateRows="repeat(9,1fr)"
          templateColumns="repeat(2, 1fr)"
        >
          <GridItem>
            <Text>דגם מנוע</Text>
            <Text>{props.carData?.degem_manoa}</Text>
          </GridItem>
          <GridItem>
            <Text>סוג דלק</Text>
            <Text>{props.carData?.sug_delek_nm}</Text>
          </GridItem>
          <GridItem>
            <Text>צמיג קדמי</Text>
            <Text>{props.carData?.zmig_kidmi}</Text>
          </GridItem>
          <GridItem>
            <Text>צמיג אחורי</Text>
            <Text>{props.carData?.zmig_ahori}</Text>
          </GridItem>
          <GridItem>
            <Text>תיבת הילוכים</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.automatic_ind === "0"
                  ? "ידנית"
                  : "אוטומטית"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>נפח מנוע</Text>
            <Text>{props.technicalCarData?.nefah_manoa}</Text>
          </GridItem>
          <GridItem>
            <Text>כוח סוס</Text>
            <Text>{props.technicalCarData?.koah_sus}</Text>
          </GridItem>
          <GridItem>
            <Text>הנעה</Text>
            <Text>{props.technicalCarData?.hanaa_nm}</Text>
          </GridItem>
          <GridItem>
            <Text>טכנולוגיית הנעה</Text>
            <Text>{props.technicalCarData?.technologiat_hanaa_nm}</Text>
          </GridItem>
          <GridItem>
            <Text>מספר חלונות חשמל</Text>
            <Text>{props.technicalCarData?.mispar_halonot_hashmal}</Text>
          </GridItem>
          <GridItem>
            <Text>חלון בגג</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.halon_bagg_ind === "0" ? "אין" : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text> חישוקי סגסוגת</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.galgaley_sagsoget_kala_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>חיישני לחץ אוויר</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.hayshaney_lahatz_avir_batzmigim_ind ===
                "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>מצלמת רוורס מקורית</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.matzlemat_reverse_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>מספר דלתות</Text>
            <Text>{props.technicalCarData?.mispar_dlatot}</Text>
          </GridItem>
          <GridItem>
            <Text>משקל כולל</Text>
            <Text>{props.technicalCarData?.mishkal_kolel}</Text>
          </GridItem>
          <GridItem>
            <Text>כושר גרירה בלי בלמים</Text>
            <Text>{props.technicalCarData?.kosher_grira_bli_blamim}</Text>
          </GridItem>
          <GridItem>
            <Text>כושר גרירה עם בלמים</Text>
            <Text>{props.technicalCarData?.kosher_grira_im_blamim}</Text>
          </GridItem>
        </Grid>
      </MotionFlex>
      <MotionFlex
        minW="350px"
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
          // h={"100%"}
          justifyContent={"center"}
          textAlign={"center"}
          overflowY={"auto"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#FEFFF",
              borderRadius: "24px",
            },
          }}
          templateRows="repeat(6,1fr)"
          templateColumns="repeat(2, 1fr)"
        >
          <GridItem>
            <Text>יצרן</Text>
            <Text>{props.carData?.tozeret_nm}</Text>
          </GridItem>
          <GridItem>
            <Text>דגם</Text>
            <Text>{props.carData?.kinuy_mishari}</Text>
          </GridItem>
          <GridItem>
            <Text>שנת ייצור</Text>
            <Text>{props.carData?.shnat_yitzur}</Text>
          </GridItem>
          <GridItem>
            <Text>רמת גימור</Text>
            <Text>{props.carData?.ramat_gimur}</Text>
          </GridItem>
          <GridItem>
            <Text>תאריך מבחן אחרון</Text>
            <Text>{props.carData?.mivchan_acharon_dt}</Text>
          </GridItem>
          <GridItem>
            <Text>תוקף רישוי</Text>
            <Text>{props.carData?.tokef_dt}</Text>
          </GridItem>
          <GridItem>
            <Text>בעלות</Text>
            <Text>{props.carData?.baalut}</Text>
          </GridItem>
          <GridItem>
            <Text>מספר שלדה</Text>
            <Text>{props.carData?.misgeret}</Text>
          </GridItem>
          <GridItem>
            <Text>מספר רכב</Text>
            <Text>{props.carData?.mispar_rechev}</Text>
          </GridItem>
          <GridItem>
            <Text>קוד דגם</Text>
            <Text>{props.carData?.degem_nm}</Text>
          </GridItem>
          <GridItem>
            <Text>קוד משרד התחבורה</Text>
            <Text>{props.carData?.tozeret_cd}</Text>
          </GridItem>
          <GridItem>
            <Text>צבע הרכב</Text>
            <Text>{props.carData?.tzeva_rechev}</Text>
          </GridItem>
        </Grid>
      </MotionFlex>
      <MotionFlex
        minW="350px"
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
            <Text>{props.technicalCarData?.mispar_kariot_avir}</Text>
          </GridItem>
          <GridItem>
            <Text>מערכת ABS</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.abs_ind === "0" ? "אין" : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>בקרת סטייה מנטיב</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.bakarat_stiya_menativ_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>בקרת יציבות</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.bakarat_yatzivut_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>מערכת לניטור מרחק מלפנים</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.nitur_merhak_milfanim_ind === "0"
                  ? "אין"
                  : "יש"}
              </Text>
            )}
          </GridItem>
          <GridItem>
            <Text>בקרת שיוט אדפטיבית</Text>
            {props.carData && (
              <Text>
                {props.technicalCarData?.bakarat_shyut_adaptivit_ind === "0"
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
      <AnimatePresence>
        <Flex h={"54vh"} dir={"rtl"} justifyContent={"space-around"}>
          <HStack
            px="5px"
            overflowX={"-moz-hidden-unscrollable"}
            overflowY={"hidden"}
            spacing={"100px"}
          >
            {cards}
          </HStack>
        </Flex>
      </AnimatePresence>
    </>
  );
};

export default CarDataCard;
