import { router } from "../trpc";
import { dogRouter } from "./dog";

export const appRouter = router({
  dog: dogRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
