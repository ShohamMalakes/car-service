import { createTRPCRouter } from "./trpc";
import { vehicleRouter } from "./routers/vehicle";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  vehicle: vehicleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

