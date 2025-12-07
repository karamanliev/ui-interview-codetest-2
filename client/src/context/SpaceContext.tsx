import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { useQuery } from "@apollo/client/react";
import { GET_USER } from "@/graphql/queries/GetUser";
import type { Space } from "@/types/graphql";

type SpaceContextType = {
  currentSpaceId: string | null;
  setCurrentSpaceId: React.Dispatch<React.SetStateAction<string | null>>;
  spaces: Space[];
};

const SpaceContext = createContext<SpaceContextType | undefined>(undefined);

function SpaceProvider({ children }: PropsWithChildren) {
  const { data } = useQuery(GET_USER);
  const spaces = data?.user?.spaces || [];

  const [selectedSpaceId, setSelectedSpaceId] = useState<string | null>(null);
  const currentSpaceId = selectedSpaceId ?? spaces[0]?.id;

  return (
    <SpaceContext.Provider
      value={{
        currentSpaceId,
        setCurrentSpaceId: setSelectedSpaceId,
        spaces,
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
}

function useSpace() {
  const context = useContext(SpaceContext);

  if (!context) {
    throw new Error("Missing SpaceContext provider!");
  }

  return context;
}

export { SpaceProvider, useSpace };
