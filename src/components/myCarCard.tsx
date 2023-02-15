import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import { api } from "../utils/api";
import carPlateImg from "../images/car_plate1.png";
import { useState } from "react";
import { BasicVehicle, TechnicalVehicle } from "../types/Vehicle";
import { useCarData } from "../hooks/carsHook";
import { vehicleRouter } from "../server/api/routers/vehicle";
import { publicProcedure } from "../server/api/trpc";

function MyCarCard() {
  const { data, isLoading, isError, error } = api.vehicle.getData.useQuery({
    license_plate: "",
  });

  return (
    <>
      <Flex h={"54vh"}>
        <Card maxW="sm">
          <CardBody>
            <Text>{data?.basicData?.mispar_rechev}</Text>
            <Image src={carPlateImg.src}></Image>
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </>
  );
}
export default MyCarCard;
