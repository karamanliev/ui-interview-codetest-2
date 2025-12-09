import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { GET_USER } from "@/graphql/queries/GetUser";
import SpaceProvider from "@/context/SpaceProvider";
import SpaceSwitcher from "@/components/SpaceSwitcher/SpaceSwitcher";
import useSpace from "@/hooks/useSpace";
import userEvent from "@testing-library/user-event";

function TestComponent() {
  const { currentSpaceId, setCurrentSpaceId, spaces, isUserLoading } =
    useSpace();

  return (
    <div>
      <div data-testid="current-space">{currentSpaceId}</div>
      <SpaceSwitcher
        selected={currentSpaceId}
        options={spaces}
        onChange={setCurrentSpaceId}
        showSkeleton={isUserLoading}
      />
    </div>
  );
}

describe("SpaceSwitcher - switching flow", () => {
  it("switches spaces on user selection", async () => {
    const user = userEvent.setup();

    const mocks = [
      {
        request: {
          query: GET_USER,
        },
        result: {
          data: {
            user: {
              id: "1",
              name: "Gandalf the Grey",
              email: "gandalf@midearth.com",
              avatar: "wizz.png",
              role: "Admin",
              spaces: [
                { id: "chill", name: "The Shire", avatar: "shire.png" },
                { id: "evil", name: "Mordor", avatar: "mordor.png" },
                { id: "very-nice", name: "Rivendell", avatar: "nice.png" },
              ],
            },
          },
        },
      },
    ];

    renderWithProviders(
      <SpaceProvider>
        <TestComponent />
      </SpaceProvider>,
      { mocks },
    );

    await waitFor(() => {
      expect(screen.getByTestId("current-space")).toHaveTextContent("chill");
    });

    const spaceSelectBtn = screen.getByRole("combobox");
    await user.click(spaceSelectBtn);

    const evilOpt = await screen.findByText("Mordor");
    await user.click(evilOpt);

    await waitFor(() => {
      expect(screen.getByTestId("current-space")).toHaveTextContent("evil");
    });
  });
});
