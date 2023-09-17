import { useContext } from "react";
import { globalContext } from ".";

export const useGlobalState = () => {
  const values = useContext(globalContext);

  return values;
};
