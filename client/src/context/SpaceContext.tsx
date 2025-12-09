import type { Space, User } from "@/types/graphql";
import { createContext } from "react";

type SpaceContextType = {
  currentSpaceId: string | undefined;
  setCurrentSpaceId: (spaceId: string | undefined) => void;
  user: User | undefined;
  spaces: Space[];
  isUserLoading: boolean;
};

const SpaceContext = createContext<SpaceContextType | undefined>(undefined);

export default SpaceContext;
