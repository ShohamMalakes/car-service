import { z } from "zod";
import type { BasicDataRes, TechnicalVehicleRes } from "../../../types/Vehicle";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const vehicleRouter = createTRPCRouter({
  getData: publicProcedure
    .input(z.object({ license_plate: z.string() }))
    .query(async ({ input }) => {
      const basicDataRes = await fetch(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${input.license_plate}`
      );
      const basicData = (await basicDataRes.json()) as BasicDataRes;

      let degem_cd = "";
      let degem_nm = "";
      let shnat_yitzur = "";

      if (basicData && basicData.result && basicData.result.records[0]) {
        degem_cd = basicData.result.records[0].degem_cd;
        degem_nm = basicData.result.records[0].degem_nm;
        shnat_yitzur = basicData.result.records[0].shnat_yitzur;
      }

      const technicalDataRes = await fetch(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=142afde2-6228-49f9-8a29-9b6c3a0cbe40&filters={"degem_cd": "${degem_cd}", "degem_nm": "${degem_nm}", "shnat_yitzur": "${shnat_yitzur}"}`,
        {
          method: "POST",
        }
      );

      const technicalData =
        (await technicalDataRes.json()) as TechnicalVehicleRes;

      console.log(technicalData);

      return {
        basicData: basicData.result.records[0],
        technicalData: technicalData.result.records[0],
      };
    }),
});
