import { userRouter } from "@/server/api/routers/user";
import { classRouter } from "@/server/api/routers/class";
import { studentRouter } from "@/server/api/routers/student";
import { rewardRouter } from "@/server/api/routers/reward";

import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  class: classRouter,
  student: studentRouter,
  reward: rewardRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
