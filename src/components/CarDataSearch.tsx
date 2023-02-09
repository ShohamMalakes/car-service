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
  const [technicalCarData, setTechnicalCarData] = useState<TechnicalVehicle>();

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
              !carNumber || carNumberLength! < 5 || carNumberLength! > 8
            }
            onClick={refetch}
          >
            מצא רכב
          </Button>
          {(carNumberLength! < 5 || carNumberLength! > 8) && (
            <Text>מספר רכב צריך להיות בין 5-8 תווים</Text>
          )}
          <Button isDisabled>הוסף לרכבים שלי</Button>
        </Box>
      </Flex>
      <Flex
        h={"55vh"}
        // w={"200wh"}
        // bg={"red"}
        border={"2px"}
        borderRadius={"4px"}
        dir={"rtl"}
        justifyContent={"space-around"}
        // overflowX={"scroll"}
      >
        {/* <ScaleFade
              initialScale={0.9}
              in={inViewport}
              whileHover={{ scale: 1.1 }}
            > */}
        <HStack spacing={"5%"}>
          <Card w={"35wh"} h={"50vh"} bg={"gray.500"} p={"5"}>
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
                <Text>{technicalCarData?.automatic_ind}</Text>
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
                <Text>{technicalCarData?.halon_bagg_ind}</Text>
              </GridItem>
              <GridItem>
                <Text> חישוקי סגסוגת</Text>
                <Text>{technicalCarData?.galgaley_sagsoget_kala_ind}</Text>
              </GridItem>
              <GridItem>
                <Text>חיישני לחץ אוויר</Text>
                <Text>
                  {technicalCarData?.hayshaney_lahatz_avir_batzmigim_ind}
                </Text>
              </GridItem>
              <GridItem>
                <Text>מצלמת רוורס מקורית</Text>
                <Text>{technicalCarData?.matzlemat_reverse_ind}</Text>
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
          </Card>
          <Card bg={"gray.500"} p={"5"} w={"35wh"} h={"50vh"}>
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
          </Card>
          <Card bg={"gray.500"} p={"5"} w={"350wh"} h={"50vh"}>
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
                <Text>{technicalCarData?.abs_ind === "0" ? "אין" : "יש"}</Text>
              </GridItem>
              <GridItem>
                <Text>בקרת סטייה מנטיב</Text>
                <Text>
                  {technicalCarData?.bakarat_stiya_menativ_ind === "0"
                    ? "אין"
                    : "יש"}
                </Text>
              </GridItem>
              <GridItem>
                <Text>בקרת יציבות</Text>
                <Text>
                  {technicalCarData?.bakarat_yatzivut_ind === "0"
                    ? "אין"
                    : "יש"}
                </Text>
              </GridItem>
              <GridItem>
                <Text>מערכת לניטור מרחק מלפנים</Text>
                <Text>
                  {technicalCarData?.nitur_merhak_milfanim_ind === "0"
                    ? "אין"
                    : "יש"}
                </Text>
              </GridItem>
              <GridItem>
                <Text>בקרת שיוט אדפטיבית</Text>
                <Text>
                  {technicalCarData?.bakarat_shyut_adaptivit_ind === "0"
                    ? "אין"
                    : "יש"}
                </Text>
              </GridItem>
            </Grid>
          </Card>
        </HStack>
        {/* </ScaleFade> */}

        {/* <GridItem>
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
        <GridItem></GridItem> */}
      </Flex>
    </>
  );
}

export default CarDataSearch;
