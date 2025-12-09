import { GET_USER } from "@/graphql/queries/GetUser";
import { useQuery } from "@apollo/client/react";
import { useState, type PropsWithChildren } from "react";
import SpaceContext from "./SpaceContext";

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

export default SpaceProvider;
