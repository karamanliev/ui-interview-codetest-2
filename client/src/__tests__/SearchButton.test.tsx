import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import SearchButton from "@/components/SearchButton";
import userEvent from "@testing-library/user-event";

describe("SearchButton - Search Animation", () => {
  it("shows input field on search btn click and btn label changes to arrow icon", async () => {
    const user = userEvent.setup();

    renderWithProviders(<SearchButton />);

    expect(screen.queryByPlaceholderText(/search/i)).not.toBeInTheDocument();

    expect(screen.getByText("Search")).toBeInTheDocument();

    const searchButton = screen.getByRole("button");
    await user.click(searchButton);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByTestId("ArrowRightRoundedIcon")).toBeInTheDocument();

    const textLabel = screen.getByText("Search");
    expect(textLabel).toHaveStyle({ opacity: 0, width: 0 });
  });
});
