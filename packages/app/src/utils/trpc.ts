import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "churp-api";

export const { useQuery, useMutation, useInfiniteQuery, ...trpc } =
  createReactQueryHooks<AppRouter>();
