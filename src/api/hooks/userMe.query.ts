import { useQuery } from "react-query";
import { get } from "./userMe.api";
export function useGet() {
  return useQuery({
    queryKey: ["userMe"],
    queryFn: get,
  });
}
