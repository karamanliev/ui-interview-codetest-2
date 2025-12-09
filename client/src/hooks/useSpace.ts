import SpaceContext from "@/context/SpaceContext";
import { use } from "react";

function useSpace() {
  const context = use(SpaceContext);

  if (!context) {
    throw new Error("Missing SpaceContext provider!");
  }

  return context;
}

export default useSpace;
