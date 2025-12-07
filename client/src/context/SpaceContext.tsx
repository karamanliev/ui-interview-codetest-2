import { createContext, use, useState, type PropsWithChildren } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_USER } from "@/graphql/queries/GetUser";
import type { Space, User } from "@/types/graphql";

type SpaceContextType = {
  currentSpaceId: string | undefined;
  setCurrentSpaceId: (spaceId: string | undefined) => void;
  user: User | undefined;
  spaces: Space[];
  isUserLoading: boolean;
};

const SpaceContext = createContext<SpaceContextType | undefined>(undefined);

function SpaceProvider({ children }: PropsWithChildren) {
  const { data, loading: isUserLoading, error } = useQuery(GET_USER);
  const user = data?.user;
  const spaces = data?.user?.spaces || [];

  const [selectedSpaceId, setSelectedSpaceId] = useState<string | undefined>(
    undefined,
  );
  const currentSpaceId =
    selectedSpaceId !== undefined ? selectedSpaceId : spaces[0]?.id;

  // TODO: Create an error component (MUI Snackbar?)
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <SpaceContext
      value={{
        currentSpaceId,
        setCurrentSpaceId: setSelectedSpaceId,
        user,
        spaces,
        isUserLoading,
      }}
    >
      {children}
    </SpaceContext>
  );
}

function useSpace() {
  const context = use(SpaceContext);

  if (!context) {
    throw new Error("Missing SpaceContext provider!");
  }

  return context;
}

export { SpaceProvider, useSpace };
