import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: Infinity,
  },
});

export default queryClient;
