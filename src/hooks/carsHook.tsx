import {
  QueryClient,
  QueryKey,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
export const useCarData = (key: any) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(key);
};
console.log(useCarData);
