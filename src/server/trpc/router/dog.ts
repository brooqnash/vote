import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const dogRouter = router({
  create: publicProcedure
    .input(z.object({ id: z.string(), breed: z.string(), url: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const dog = await ctx.prisma.dog.create({
        data: {
          id: input.id,
          breed: input.breed,
          url: input.url,
        },
      });

      return dog;
    }),
  find: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.dog.findUnique({ where: { id: input.id } });
    }),
  increment: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma
        .$executeRaw`UPDATE Dog SET votes = votes + 1 WHERE id = ${input.id}`;
    }),
});
